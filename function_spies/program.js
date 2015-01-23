function Spy(target, method) {
  // Set up original function
  var originalFunction = target[method]
    // A way to keep track of results. We can keep better track of count
  var result = {
      count: 0
    }
    // we alias the target & method to a funcion that then calls the original function, but with the important difference that we actually call the original function later by using apply
  target[method] = function() {
      result.count++
        return originalFunction.apply(this, arguments)
    }
    // Eventually return the result
  return result
}

module.exports = Spy
