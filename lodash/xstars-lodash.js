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
      let limitArgs
      args.length > n ? limitArgs = args.slice(0, n) : limitArgs = args
      return func(...limitArgs)
    }
  }
}