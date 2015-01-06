function countWords(array, classifier) {
  return array.reduce(function(counter, item) {
    var prop = (classifier || String)(item);
    counter[prop] = counter.hasOwnProperty(prop) ? counter[prop] + 1 : 1;
    return counter;
  }, {})
}

module.exports = countWords
