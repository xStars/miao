var xstars = {
  isNull: function (val) {
    if (val === null) {
      return true
    } else {
      return false
    }
  },
  chunk: function (array, size) {
    if (array.length == 0) {
      return []
    }
    var result = []
    var count = 0
    var temp = []
    for (var i = 0; i < array.length; i++) {
      count++
      temp.push(array[i])
      if (count == size) {
        count = 0
        result.push(temp)
        temp = []
      }
    }
    if (temp.length != 0) {
      result.push(temp)
    }
    return result
  },
  compact: function (array) {
    if (array.length == 0) {
      return []
    }
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] == false || isNaN(array[i])) {
        continue
      }
      result.push(array[i])
    }
    return result
  },
  concat: function (array, values) {
    array.push(...values)
    return array
  },
  // difference: function (array, ...values) {
  //   var n = new Set(passed)
  //   return array.filtrt(x => !passed.has(x))
  // },
  difference: function (ary, ...args) {
    let temp = Array.prototype.slice.apply(...args)
    let result = []
    for (let item of ary) {
      if (!temp.includes(item)) {
        result.push(item)
      }
    }
    return result
  },
  drop: function (array, n = 1) {
    if (array.length <= n) {
      return []
    }
    let result = []
    for (let i = n; i < array.length; i++) {
      result[i - n] = array[i]
    }
    return result
  },
  dropRight: function (array, n = 1) {
    if (array.length <= n) {
      return []
    }
    let result = []
    for (let i = 0; i < (array.length - n); i++) {
      result[i] = array[i]
    }
    return result;
  },
  fill: function (array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },
  head: function (array) {
    if (array.length == 0) {
      return undefined
    }
    return array[0]
  },
  last: function (array) {
    return array[array.length - 1]
  },
  initial: function (array) {
    if (array.length <= 1) {
      return []
    }
    array.length = array.length - 1
    return array
  },
  // flatten: function (array) {
  //   return Array.prototype.concat.apply([], array)
  // },
  flatten: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      var item = array[i];
      if (Array.isArray(item)) {
        result.push(...item)
      } else {
        result.push(item)
      }
    }
    return result
  },
  //flatten reduce方法
  flatten2: function (array) {
    return array.reduce((result, item) => {
      if (Array.isArray(item)) {
        result.push(...item)
      } else {
        result.push(item)
      }
      return result
    }, [])
  },


  flattenDeep: function (array) {
    return array.flat(Infinity)
  },
  // fla

  pairs: function (array) {
    var result = {}
    for (let i = 0; i < array.length; i++) {
      result[array[i][0]] = array[i][1]
    }
    return result
  },
  before: function (n, func) {
    var i = 0
    var result
    return function (...args) {
      if (i < n) {
        i++
        result = func(...args)
      }
      return result
    }
  },
  after: function (n, func) {
    var i = 0
    return function (...args) {
      if (i > n) {
        i++
        return func(...args)
      }
    }
  },
  ary: function (func, n = func.length) {
    return function (...args) {
      return func(...args.slice(0, n))
    }
  },
  unary: function (func) {
    return function (arg) {
      return func(arg)
    }
  },
  flip: function (func) {
    return function (...args) {
      return func(...args.reverse())
    }
  },
  negate: function (func) {
    return function (...args) {
      return !func(...args)
    }
  },
  reject: function (ary, test) {
    var result = []
    for (var i = 0; i < arg.length; i++) {
      if (!test(ary[i])) {
        result.push(ary[i])
      }
    }
  },
  spread: function (func) {
    return function (ary) {
      return func(...ary)
    }
  },
  bind: function (func, ...fixedArgs) {
    return function (...fixedArgs) {
      var copy = fixedArgs.slice()
      var j = 0
      for (let i = 0; i < copy.length; i++) {
        if (copy[i] === null) {
          copy[i] = args[j++]
        }
      }
      while (j < args.length) {
        copy.push(args[j++])
      }
      return f(...copy)
    }
  },
  filter: function (ary, predicate) {
    var test = predicate
    if (typeof predicate === "string") {
      test = it => it[predicate]
    } else if (typeof predicate === 'Object') {
      if (Array.isArray(predicate)) {
        predicate = fromParirs(predicate)
      }
      test = (it) => {
        for (var key in predicate) {
          if (predicate[key] !== it[key]) {
            return false
          }
        }
      }
    }
    return false
  },
  property: function (str) {
    return function (obj) {
      return obj[str]
    }
  },
  matches: function (trager) {
    return function (obj) {
      for (var key in trager) {
        if (obj[key] !== trager[key]) {
          return false
        }
      }
      return true
    }
  }
}