var BinarySearchTree = function(value) {
  var tree = Object.create(binaryMethods);
  this.right = undefined;
  this.left = undefined;
  this.value = value;

  return tree;
};

var binaryMethods = {};
binaryMethods.insert = function(value) {
  var newTree = BinarySearchTree(value);
  console.log(newTree);
  return newTree;
};

binaryMethods.contains = function(target) {

};

binaryMethods.depthFirstLog = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
