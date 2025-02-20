export function panic(s: string | Error): never {
  console.error(s)
  throw s instanceof Error ? s : new Error(s)

}

export function createPromise<T>() {
  let resolve: Function
  let reject: Function

  const p = new Promise<T>((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  })

  // @ts-expect-error
  return {p, resolve, reject}
}
