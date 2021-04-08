var xstars = {
  after: function (n, func) {
    let i = 0
    return (...args) => {
      if (i++ >= n) {
        func(...args)
      }
    }
  },
  ary: function (func, n = func.length) {
    return (...args) => {
      return func(...args.slice(0, n))
    }
  },
  unary: function (func) {
    return (arg) => {
      return func(arg)
    }
  },
  before: function (n, func) {
    let i = 0
    let result
    return (...args) => {
      if (i++ <= n) {
        result = fuc(...args)
      }
      return result
    }
  },
  bind: function (func, ...thisArgs) {
    let copy = thisArgs.slice()
    let i = 0
    return (...args) => {
      copy.forEach((item, idx, ary) => {
        if (item === null) {
          ary[idx] = args[i++]
        }
      })
      return func(...copy, ...args.slice(i))
    }
  },
  flip: function (func) {
    return (...args) => {
      return func(...args.reverse())
    }
  }
}