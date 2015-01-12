function repeat(operation, num) {
  if (num <= 0)
    return

    operation(num)

    if (num % 15 === 0) {
      setTimeout(function() {
        repeat(operation, --num)
      }, 1)
    } else {
      repeat(operation, --num)
    }
  }

  module.exports = repeat

  // Summary: repeat takes two arguments, operation and num. First, we set our return condition for the recursion, which is if num is 0 or less. We kick off operation and recurse, decrementing the num arg to pass to the next recursion. After 20 ops, we check to see if a modulus divisor will return 0. When it does, we set a timeout function that will pause the recursion for 1 milisecond. This is the default value, but we could pass it a minimum timeout ms value if we wanted. It shouldn't matter how long we release control for, since the frequency of checks is actually determined by the check interval. If we set it at something really high, say 20000, the setTimeout function won't be able to help us release control because we don't get the chance to find a number divisble w/ 0 remainder by 20000. So anytime a num is passed that is greater than the freqCheck won't ever get fired. The check mechanism for this test will also fail when we count to small numbers, since counting to anything less than the frequency check will block the event loop for that duration. 
