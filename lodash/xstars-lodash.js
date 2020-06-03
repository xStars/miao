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
  }
}