'use strict';

function getDependencies(mod, result) {
  // Initialize result and dependencies to either the passed argument or an array
  // result keeps track of the found and sorted deps
  result = result || [];
  var dependencies = mod.dependencies || [];
  // Get the keys of dependencies and run forEach
  Object.keys(dependencies).forEach(function(dep) {
    // var key takes the passed element (as dep) and gets the version from the dep
    var key = dep + '@' + mod.dependencies[dep].version;
    // if the result is not in result already, push the key into the array
    if (result.indexOf(key) === -1) {
      result.push(key)
    }
    // recurse and pass the function the specific dep and a result
    getDependencies(mod.dependencies[dep], result);
  });
  // sort results alphabetically
  return result.sort();
}


module.exports = getDependencies;
