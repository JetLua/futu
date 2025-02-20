import {constants, createCipheriv, createDecipheriv, createHash, publicEncrypt} from 'node:crypto'
import NodeRSA from 'node-rsa'

export function sha1(data: Buffer | Uint8Array) {
  return createHash('sha1').update(data).digest()
}

export class RSA {
  pbk: string
  prk: NodeRSA

  constructor(pbk: string, prk: string) {
    this.pbk = pbk
    this.prk = new NodeRSA(prk)
    this.prk.setOptions({environment: 'browser', encryptionScheme: 'pkcs1'})
  }

  encrypt(data: NodeJS.ArrayBufferView) {
    return publicEncrypt({key: this.pbk, padding: constants.RSA_PKCS1_PADDING}, data)
  }

  decrypt(data: NodeJS.ArrayBufferView) {
    return this.prk.decrypt(data as any)
  }
}

export class AES {
  key: Buffer
  iv: Buffer

  constructor(key: string, iv: string) {
    this.key = Buffer.from(key)
    this.iv = Buffer.from(iv)
  }

  encrypt(data: NodeJS.ArrayBufferView) {
    const cipher = createCipheriv('aes-128-cbc', this.key, this.iv)
    return Buffer.concat([cipher.update(data), cipher.final()])
  }

  decrypt(data: NodeJS.ArrayBufferView) {
    const cipher = createDecipheriv('aes-128-cbc', this.key, this.iv)
    return Buffer.concat([cipher.update(data), cipher.final()])
  }
}
