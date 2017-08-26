var BinarySearchTree = function(value) {
  var tree = Object.create(binaryMethods);
  tree.right = undefined;
  tree.left = undefined;
  tree.value = value;

  return tree;
};

var binaryMethods = {};
binaryMethods.insert = function(value, branch) {
  if (branch === undefined) {
    branch = this;
  }
  
  if (value > branch.value) {
    if (!branch.right) {
      branch.right = BinarySearchTree(value);
    } else { 
      return this.insert(value, branch.right);
    }
  } else if (value < branch.value) {
    if (!branch.left) {
      branch.left = BinarySearchTree(value);
    } else {
      return this.insert(value, branch.left);
    }
  }
};

binaryMethods.contains = function(target) {

};

binaryMethods.depthFirstLog = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
