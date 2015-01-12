module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(prev, curr, index, array) {
    array[index] = fn(curr)
    return array
  }, 0)
}