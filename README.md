# Futu API JavaScript
> 基于富途官方`API`略作封装(还在继续)，个人感觉是更好用了。更好的`TypeScript`支持。
> 默认启用了`RSA`加密传输(目前不支持禁用)。

```ts
const futu = new Futu({
  pbk: process.env.PBK, // RSA 公钥
  prk: process.env.PRK  // RSA 私钥
})

futu.on('data', r => {
  switch (r.id) {
    case ID.NOTIFY_DEAL: {
      console.log(r.data)
      break
    }
  }
})

// 订阅账户交易推送
futu.sub.account([Long.fromString(process.env.ACCID)])

// 订阅行情推送
futu.sub.toggle({
  securityList: [
    {market: proto.common.QotMarket.QotMarket_HK_Security, code: this.code},
  ],
  subTypeList: [proto.common.SubType.SubType_Basic],
  isSubOrUnSub: true,
  isRegOrUnRegPush: true,
  isFirstPush: true,
})

// 订单相关的操作
futu.order...
```
