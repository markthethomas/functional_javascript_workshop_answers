var tree = {
  "name": "lorem-ipsum",
  "version": "0.1.1",
  "dependencies": {
    "optimist": {
      "version": "0.3.7",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }
      }
    },
    "inflection": {
      "version": "1.2.6"
    }
  }
}

function getDependencies(tree, widthIndex) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.

  var widthIndex = widthIndex || 0
  var deps = []
  var treeObj = tree[Object.keys(tree)[0]]
  if (tree.hasOwnProperty('dependencies')) {
    getDependencies(tree.dependencies);
  } else {
    if (Object.keys(tree).length >= widthIndex && !tree.hasOwnProperty('dependencies') ) {
      deps.push(Object.keys(tree)[widthIndex] + '@' + treeObj.version)
      console.log("Width index is currently" + widthIndex);
      console.log(deps)
      widthIndex += 1
      getDependencies(tree, widthIndex)
    }
    getDependencies(treeObj.dependencies);
  }
}

getDependencies(tree)
