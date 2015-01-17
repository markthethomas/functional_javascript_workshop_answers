// Summary
// The repeat function takes an operation and will repeat it num times. The trampoline function takes a function as its primary argument and runs a while loop while fn is a function; the while loop serves as the primary means of being a wrapper for the repeat function, since it will be iterative-ish and allow us to re-execute the function over and over again without stacking up frames. 

function repeat(operation, num) {
  return function() {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }
}

function trampoline(fn) {
  while (typeof fn === 'function') {
    fn = fn()
  }
}

module.exports = function(operation, num) {
  trampoline(function() {
    return repeat(operation, num)
  })
}
