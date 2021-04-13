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
  compact: function compact(ary) {
    return ary.reduce((result, current) => {
      if (current) {
        result.push(current)
      }
      return result
    }, [])
  },
  concat: function concat(ary, ...value) {
    let result = ary
    value.forEach(it => {
      if (Array.isArray(it)) {
        result.push(...it)
      } else {
        result.push(it)
      }
    })
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
  },
  difference: function difference(ary, ...value) {
    let set = {}
    let result = []
    value.forEach((value, idx, ary) => {
      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          set[value[i]] = true
        }
      } else {
        set[value] = true
      }
    })
    ary.forEach((key) => {
      if (!set[key]) {
        result.push(key)
      }
    })
    return result
  },
  drop: function drop(ary, n = 1) {
    return ary.slice(n)
  },
  dropRight: function dropRight(ary, n = 1) {
    return n == 0 ? ary.slice() : ary.slice(0, -n)
  },
  flatten: function flatten(ary) {
    let result = []
    for (let i = 0; i < ary.length; i++) {
      if (Array.isArray(ary[i])) {
        result.push(...ary[i])
      } else {
        result.push(ary[i])
      }
    }
    return result
  },
  flattenDeep: function flattenDeep(ary) {
    let result = []
    ary.forEach((item, idx, ary) => {
      if (Array.isArray(item)) {
        result.push(...flattenDeep(item))
      } else {
        result.push(item)
      }
    })
    return result
  },
  flattenDepth: function flattenDepth(ary, depth = 1) {
    if (depth == 0) {
      return ary.slice()
    }
    let result = []
    ary.forEach((item) => {
      if (Array.isArray(item)) {
        result.push(...flattenDepth(item, depth - 1))
      } else {
        result.push(item)
      }
    })
    return result

  },
  fill: function fill(ary, value, start = 0, end = ary.length) {
    for (let i = start; i < end; i++) {
      ary[i] = value
    }
    return ary
  },
  head: function head(ary) {
    return ary[0]
  },
  indexOf: function indexOf(ary, value, fromIndex = 0) {
    for (let i = fromIndex; i < ary.length; i++) {
      if (ary[i] == value) {
        return i
      }
    }
  },
  initial: function initial(ary) {
    return ary.slice(0, ary.length - 1)
  },
  intersection: function intersection(ary, ...args) {
    let set = {}
    let result = []
    args.forEach((it) => {
      if (Array.isArray(it)) {
        for (key in it) {
          set[key] = true
        }
      } else {
        set[it] = true
      }
    })
    ary.forEach((item) => {
      if (!set[item]) {
        result.push(item)
      }
    })
    return result
  },
  join: function join(ary, separator = ',') {
    let str = separator.toString()
    return ary.reduce((result, current, idx, ary) => {
      if (idx == ary.length - 1) {
        result += current
      } else {
        result += current + str
      }
      return result
    }, '')
  },
  last: function last(ary) {
    return ary[ary.length - 1]
  },
  lastIndexOf: function lastIndexOf(ary, value, fromIndex = ary.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (ary[i] == value) {
        return i
      }
    }
    return -1
  },
  nth: function nth(ary, n = 0) {
    if (n < 0) {
      return ary[ary.length + n]
    } else {
      return ary[n]
    }
  },
  pull: function pull(ary, ...values) {
    if (Array.isArray(values)) {
      for (let j = 0; j < values.length; j++) {
        let value = values[j]
        for (let i = ary.length - 1; i >= 0; i--) {
          if (ary[i] == value) {
            ary.splice(i, 1)
            i--
          }
        }
      }
    } else {
      for (let i = ary.length - 1; i >= 0; i--) {
        if (ary[i] == values) {
          ary.splice(i, 1)
          i--
        }
      }
    }
    return ary
  },
  pullAll: function pullAll(ary, values) {
    for (let j = 0; j < values.length; j++) {
      let value = values[j]
      for (let i = ary.length - 1; i >= 0; i--) {
        if (ary[i] == value) {
          ary.splice(i, 1)
          i--
        }
      }
    }
    return ary
  }

}