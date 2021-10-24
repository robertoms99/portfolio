export const nth = (times: number, callback: (index: number) => any) => {
  for (let index = 0; index <= times; index++) callback.call(this, index)
}

export const compose = function (callbacks: Function[]) {
  return function (this: any, ...args: any[]) {
    return callbacks.reduceRight((args: any[], callback: Function) => callback.apply(this, args), args)
  }
}

export const debounce = function (callback: Function, delay: number) {
  const timeoutId = 0
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId)
    setTimeout(() => callback.apply(this, args), delay)
  }
}

export const throttle = function (callback: Function, delay: number) {
  let isThrottled = false
  let lastArgs: null | any[] = null
  return function throttling(this: any, ...args: any[]) {
    if (!isThrottled) {
      setTimeout(() => {
        if (lastArgs !== null) throttling(lastArgs)
        isThrottled = false
        lastArgs = null
      }, delay)
      callback.apply(this, args)
    } else lastArgs = args
    isThrottled = true
  }
}

export const delayed = function (callback: Function, delay: number) {
  return function (this: any, ...args: any[]) {
    setTimeout(callback.bind(this, ...args), delay)
  }
}

export const curry = (callback: Function) => {
  return function partial(this: any, ...args: any[]) {
    if (args.length === callback.length) return callback.apply(this, args)
    else {
      return function (this: any, ...restArgs: any[]) {
        return partial.apply(this, args.concat(restArgs))
      }
    }
  }
}
