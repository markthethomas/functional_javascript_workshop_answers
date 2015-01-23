// GPIO
// Goal: curry a function
// Process:
// Input: two arguments, one that is a function we want to curry, and n -- the number of arguments to curry
// Output: a number of curried functions


function curryN(fn, n) {
  // If `n` argument was omitted, use the function .length property.
  n = n || fn.length;
  function getCurriedFn(prev) {
    return function(arg) {
      // Concat the just-specified argument with the array of
      // previously-specified arguments.
      var args = prev.concat(arg);
      if (args.length < n) {
        // Not all arguments have been satisfied yet, so return a curried
        // version of the original function.
        return getCurriedFn(args);
      } else {
        // Otherwise, invoke the original function with the arguments and
        // return its value.
        return fn.apply(this, args);
      }
    };
  }

  // Return a curried version of the original function.
  return getCurriedFn([]);
}
module.exports = curryN;
