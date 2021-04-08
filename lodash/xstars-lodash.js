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
  }
}