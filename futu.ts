import EventEmitter from 'node:events'
import {connect, type Socket} from 'node:net'
import {Long, proto} from '@futu/proto'

import {AES, RSA, sha1} from './crypto'
import {createPromise, panic} from './util'

export enum ID {
  INIT = 1001,
  PING = 1004,
  CAP_FLOW = 3211,
  CAP_DIST = 3212,
  POSITION = 2102,
  /** 最大可卖查询 */
  SELLABLE = 2111,
  /** 交易账户列表 */
  ACCS = 2001,
  /** 解锁账户 */
  UNLOCK = 2005,
  /** 获取股票快照 */
  STOCK_SNAPSHOT = 3203,
  /** 订阅账户推送 */
  SUB_ACC = 2008,
  /** 订阅 or 取消订阅 */
  SUB_TOGGLE = 3001,
  /** 查询订阅信息 */
  SUB_INFO = 3003,
  /** 系统事件通知 */
  NOTIFY_EVENT = 1003,
  /** 订单状态通知 */
  NOTIFY_ORDER = 2208,
  /** 成交通知 */
  NOTIFY_DEAL = 2218,
  /** 实时报价回调 */
  NOTIFY_BASIC_QOT = 3005,
  /** 下单 */
  ORDER_CREATE = 2202,
  /** 查询订单费用 */
  ORDER_FEE = 2225,
}

export class Futu extends EventEmitter {
  socket: Socket

  sn = {pkg: 1, order: 1}

  rsa!: RSA
  aes!: AES

  tasks = new Map<number, {resolve: Function, reject: Function}>()

  // 数据缓存
  pool = {
    recv: [] as Buffer[],
    send: [] as Buffer[]
  }

  sub!: Sub
  order!: Order
  connID!: Long | number

  ready = createPromise()

  constructor(opts: {
    port?: number
    host?: string
    pbk: string
    prk: string}) {
    super()
    const c = this.socket = connect({
      port: opts.port ?? 11111,
      host: opts.host ?? '127.0.0.1'
    })

    this.rsa = new RSA(opts.pbk, opts.prk)
    this.sub = new Sub(this)
    this.order = new Order(this)

    c.on('connect', this.init.bind(this))
    c.on('data', this.handle.bind(this))
    c.on('drain', this.drain.bind(this))
  }

  private async init() {
    let r

    r = proto.base.InitReq.encode(proto.base.InitReq.create({
      c2s: {
        clientID: '1',
        clientVer: 101,
        recvNotify: true,
        packetEncAlgo: 2
      }
    })).finish()

    r = await this.send(ID.INIT, r)
    r = proto.base.InitRes.decode(r)
    if (r.retType || !r.s2c) panic(r.retMsg)
    this.ready.resolve()
    this.connID = r.s2c.connID
    this.aes = new AES(r.s2c.connAESKey, r.s2c.aesCBCiv!)
    this.ping(r.s2c.keepAliveInterval)
  }

  private drain() {
    while (this.pool.send.length && this.socket.writable) {
      const data = this.pool.send.shift()!
      this.socket.write(data)
    }
  }

  private async ping(d: number) {
    let r

    r = await this.send(ID.PING, proto.base.Ping.encode(proto.base.Ping.create({
      c2s: {
        time: Date.now() / 1e3 | 0
      }
    })).finish())

    r = proto.base.Pong.decode(r)

    if (r.retType) console.error(r.retMsg)

    setTimeout(this.ping.bind(this, d), d * 1e3)
  }

  async send(id: ID, data: Buffer | Uint8Array): Promise<Buffer> {
    const hash = sha1(data)

    if (id === ID.INIT) data = this.rsa.encrypt(data)
    else {
      if (!this.aes) await this.ready.p
      data = this.aes.encrypt(data)
    }

    const l = data.length
    const b = Buffer.alloc(44 + l)

    b.write("FT", 0)
    b.writeUInt32LE(id, 2)
    b.writeUInt8(0, 6)
    b.writeUInt8(0, 7)
    b.writeUInt32LE(this.sn.pkg, 8)
    b.writeUInt32LE(l, 12)
    hash.copy(b, 16)
    b.fill(0, 36, 44)
    b.set(data, 44)

    if (this.socket.writable && this.ready) this.socket.write(b)
    else this.pool.send.push(b)

    const {p, resolve, reject} = createPromise<Buffer>()

    this.tasks.set(this.sn.pkg, {resolve, reject})
    this.sn.pkg++

    return await p
  }

  private handle(data: Buffer<ArrayBufferLike>) {
    if (this.pool.recv.length) {
      data = Buffer.concat([...this.pool.recv, data])
      this.pool.recv = []
    }

    while (true) {
      // 数据长度小于协议头 不足以解析
      if (data.length < 44) return this.pool.recv.push(data)

      const flag = data.toString('utf8', 0, 2)
      if (flag !== 'FT') return panic('协议解析失败')

      const l = data.readUInt32LE(12)
      const total = 44 + l
      // 数据不足
      if (data.length < total) return this.pool.recv.push(data)

      const id = data.readUint32LE(2)
      const sn = data.readUInt32LE(8)

      let r

      r = data.subarray(44, total)

      if (id === ID.INIT) r = this.rsa.decrypt(r)
      else r = this.aes.decrypt(r)

      const task = this.tasks.get(sn)

      if (task) {
        this.tasks.delete(sn)
        task.resolve(r)
      } else this.match(id, r)

      if (data.length > total) data = data.subarray(total)
      else break
    }
  }

  /** on:data 应该放在其他方法之前调用，防止有数据未监听到 */
  on(name: 'data', fn: (data: OnData) => void): this
  on(name: string, fn: (...args: any[]) => void) {
    super.on(name, fn)
    return this
  }

  private match(id: ID, r: Buffer) {
    switch (id) {
      case ID.NOTIFY_EVENT: {
        return this.emit('data', {id, data: proto.notify.Event.decode(r)})
      }
      case ID.NOTIFY_ORDER: {
        return this.emit('data', {id, data: proto.notify.Order.decode(r)})
      }
      case ID.NOTIFY_BASIC_QOT: {
        return this.emit('data', {id, data: proto.notify.BasicQot.decode(r)})
      }
      case ID.NOTIFY_DEAL: {
        return this.emit('data', {id, data: proto.notify.Deal.decode(r)})
      }
      default: {
        console.log(`未处理: id: ${id}`)
        break
      }
    }
  }

  /** 解锁交易 */
  async unlock(pwdMD5: string, securityFirm: proto.common.SecurityFirm) {
    let r

    r = proto.base.UnlockReq.encode(proto.base.UnlockReq.create({
      c2s: {
        unlock: true,
        pwdMD5,
        securityFirm
      }
    })).finish()

    r = await this.send(ID.UNLOCK, r)

    r = proto.base.UnlockRes.decode(r)

    if (r.retType) panic(r.retMsg)

    return r
  }

  /** 获取交易业务账户列表 */
  async accounts(opts?: {needGeneralSecAccount?: boolean, trdCategory?: proto.common.TrdCategory}) {
    let r

    r = proto.base.AccReq.encode(proto.base.AccReq.create({
      c2s: {
        userID: 0,
        trdCategory: opts?.trdCategory,
        needGeneralSecAccount: opts?.needGeneralSecAccount
      }
    })).finish()

    r = proto.base.AccRes.decode(await this.send(ID.ACCS, r))
    if (r.retType) panic(r.retMsg)
    return r
  }

  /** 获取股票基本信息 */
  async stock(securityList: proto.common.ISecurity[] | proto.common.ISecurity) {
    let r

    r = await this.send(ID.STOCK_SNAPSHOT, proto.base.stockReq.encode(proto.base.stockReq.create({
      c2s: {
        securityList: Array.isArray(securityList) ? securityList : [securityList]
      }
    })).finish())

    r = proto.base.stockRes.decode(r)
    if (r.retType) panic(r.retMsg)
    return r
  }

  /** 获取资金流向 */
  async capFlow(opts: {
    code: string
    market: proto.common.QotMarket
    periodType?: proto.common.PeriodType
    beginTime?: string
    endTime?: string}) {
    let r

    r = await this.send(ID.CAP_FLOW, proto.base.CapFlowReq.encode(proto.base.CapFlowReq.create({
      c2s: {
        security: {code: opts.code, market: opts.market},
        periodType: opts.periodType,
        beginTime: opts.beginTime,
        endTime: opts.endTime
      }
    })).finish())

    r = proto.base.CapFlowRes.decode(r)
    if (r.retType) panic(r.retMsg)
    return r
  }

  /** 获取资金分布 */
  async capDist(opts: proto.common.ISecurity) {
    let r

    r = await this.send(ID.CAP_DIST, proto.base.CapDistReq.encode(proto.base.CapDistReq.create({
      c2s: {
        security: opts
      }
    })).finish())

    r = proto.base.CapDistRes.decode(r)
    if (r.retType) panic(r.retMsg)
    return r
  }

  /** 获取账户持仓 */
  async positions(opts: {
    trdEnv?: proto.common.TrdEnv
    accID: number | Long
    filterConditions?: proto.common.ITrdFilterConditions
    trdMarket: proto.common.TrdMarket
    filterPLRatioMin?: number
    filterPLRatioMax?: number
    refreshCache?: boolean}) {
    let r

    r = await this.send(ID.POSITION, proto.base.PositionReq.encode(proto.base.PositionReq.create({
      c2s: {
        header: {
          trdEnv: opts.trdEnv ?? proto.common.TrdEnv.TrdEnv_Real,
          accID: opts.accID,
          trdMarket: opts.trdMarket
        },
        filterConditions: opts.filterConditions,
        filterPLRatioMax: opts.filterPLRatioMax,
        filterPLRatioMin: opts.filterPLRatioMin,
        refreshCache: opts.refreshCache
      }
    })).finish())

    r = proto.base.PositionRes.decode(r)
    if (r.retType) panic(r.retMsg)
    return r
  }

  /** 查询股票可卖数量 */
  async sellable(opts: {
    trdEnv?: proto.common.TrdEnv
    accID: number | Long
    trdMarket: proto.common.TrdMarket} & Omit<proto.base.SellableReq.IC2S, 'header'>) {
    let r

    const {accID, trdEnv, trdMarket, ...rest} = opts
    r = await this.send(ID.SELLABLE, proto.base.SellableReq.encode(proto.base.SellableReq.create({
      c2s: {
        header: {
          accID,
          trdMarket,
          trdEnv: trdEnv ?? proto.common.TrdEnv.TrdEnv_Real,
        },
        ...rest
      }
    })).finish())

    r = proto.base.SellableRes.decode(r)
    if (r.retType) panic(r.retMsg)
    return r
  }

  destroy() {
    this.socket.destroy()
    this.removeAllListeners()
  }
}

/** 订阅类 */
class Sub {
  private futu: Futu

  constructor(futu: Futu) {
    this.futu = futu
  }

  /**
   * 订阅接收交易账户的推送数据
   *
   * 指定发送该协议的连接接收交易数据（订单状态，成交状态等）推送
   */
  async account(ids: Array<number | Long>) {
    let r
    r = await this.futu.send(ID.SUB_ACC, proto.sub.AccReq.encode(proto.sub.AccReq.create({
      c2s: {
        accIDList: ids
      }
    })).finish())
    r = proto.sub.AccRes.decode(r)
    if (r.retType) panic(r.retMsg)
    return r
  }

  async info(isReqAllConn?: boolean) {
    let r
    r = await this.futu.send(ID.SUB_INFO, proto.sub.InfoReq.encode(proto.sub.InfoReq.create({
      c2s: {isReqAllConn}
    })).finish())
    r = proto.sub.InfoRes.decode(r)
    if (r.retType) panic(r.retMsg)
    return r
  }

  /** 订阅与反订阅 */
  async toggle(opts: proto.sub.ToggleReq.IC2S) {
    let r
    r = await this.futu.send(ID.SUB_TOGGLE, proto.sub.ToggleReq.encode(proto.sub.ToggleReq.create({
      c2s: opts
    })).finish())

    r = proto.sub.ToggleRes.decode(r)
    if (r.retType) panic(r.retMsg)
    return r
  }
}

/** 订单类 */
class Order {
  private futu: Futu

  private sn = 1

  constructor(futu: Futu) {
    this.futu = futu
  }

  /** 下单 */
  async create(opts: {
    accID: number | Long
    trdEnv?: proto.common.TrdEnv
    trdMarket: proto.common.TrdMarket
  } & Omit<proto.order.CreateReq.IC2S, 'header' | 'packetID'>) {
    await this.futu.ready.p

    const {accID, trdEnv, trdMarket, ...rest} = opts

    let r
    r = proto.order.CreateReq.encode(proto.order.CreateReq.create({
      c2s: {
        ...rest,
        header: {
          trdEnv: trdEnv ?? proto.common.TrdEnv.TrdEnv_Real,
          accID: accID,
          trdMarket: trdMarket
        },
        packetID: {
          connID: this.futu.connID,
          serialNo: this.sn++
        }
      }
    })).finish()
    r = await this.futu.send(ID.ORDER_CREATE, r)
    r = proto.order.CreateRes.decode(r)
    if (r.retType) panic(r.retMsg)
    return r
  }

  /** 查询订单费用 */
  async fee(opts: {
    trdEnv?: proto.common.TrdEnv,
    accID: number | Long
    trdMarket: proto.common.TrdMarket
    ids: string[]}) {
    let r

    r = proto.order.FeeReq.encode(proto.order.FeeReq.create({
      c2s: {
        orderIdExList: opts.ids,
        header: {
          accID: opts.accID,
          trdMarket: opts.trdMarket,
          trdEnv: opts.trdEnv ?? proto.common.TrdEnv.TrdEnv_Real,
        }
      }
    })).finish()

    r = proto.order.FeeRes.decode(await this.futu.send(ID.ORDER_FEE, r))

    if (r.retType) panic(r.retMsg)

    return r
  }
}

type OnData = {
  id: ID.NOTIFY_EVENT
  data: proto.notify.Event
} | {
  id: ID.NOTIFY_BASIC_QOT
  data: proto.notify.BasicQot
} | {
  id: ID.NOTIFY_ORDER
  data: proto.notify.Order
} | {
  id: ID.NOTIFY_DEAL
  data: proto.notify.Deal
}
