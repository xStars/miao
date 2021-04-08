var xstars = {
  after: function (n, func) {
    let i = 0
    return (...args) => {
      if (i++ > n) {
        func(...args)
      }
    }
  }
}