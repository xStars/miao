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
      if (i++ < n) {
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
  },
  negate: function (predicate) {
    return (...args) => {
      return !predicate(...args)
    }
  },
  once: function once(func) {
    let i = 0
    let result
    return (...args) => {
      if (i++ < 1) {
        result = func(...args)
      }
      return result
    }
  },
  unary: function unary(func) {
    return (arg) => func(arg)
  },
  spread: function spread(func) {
    return (args) => {
      return func(...args)
    }
  },
  chunk: function chunk(ary, size = 1) {
    let result = []
    let n = Math.ceil(ary.length / size)
    for (let i = 0; i < n; i++) {
      let start = i * size
      result[i] = ary.slice(start, start + size)
    }
    return result
  },
  fromPairs: function fromPairs(ary) {
    let result = {}
    for (let i = 0; i < ary.length; i += 2) {
      result[ary[i]] = ary[i + 1]
    }
    return result
  },
  filter: function filter(ary, predicate) {
    let test = predicate
    if (typeof predicate == 'string') {
      test = it => it[predicate]
    } else if (typeof predicate == 'object') {
      //{active: true, gender: 'f'} or ['activc',true,'gender','f']
      if (Array.isArray(predicate)) {
        predicate = formPairs(predicate)
      }
      test = it => {
        for (let key in it) {
          if (predicate[key] !== it[key]) {
            return false
          }
        }
        return true
      }
    }
    let result = []
    for (let i = 0; i < ary.length; i++) {
      if (test(ary[i], i, ary)) {
        result.push(ary[i])
      }
    }
    return result
  }
}