var BinarySearchTree = function(value) {
  var tree = Object.create(binaryMethods);
  tree.right = undefined;
  tree.left = undefined;
  tree.value = value;

  return tree;
};

var binaryMethods = {};

binaryMethods.insert = function(value) {
  if (value > this.value) {
    if (!this.right) {
      this.right = BinarySearchTree(value);
    } else { 
      return this.right.insert(value);
    }
  } else if (value < this.value) {
    if (!this.left) {
      this.left = BinarySearchTree(value);
    } else {
      return this.left.insert(value);
    }
  }
};

binaryMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (target < this.value) {
    if (!this.left) {
      return this.left.contains(target);
    } else {
      return false;
    }
  } else if (target > this.value) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(target);
    }
  }
};


binaryMethods.depthFirstLog = function(func) { 
  func(this.value);
  if (this.left) {
    return this.left.depthFirstLog(func);
  }
  if (this.right) {
    return this.right.depthFirstLog(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
insert: O(log n) (assuming balanced)
contains: O(log n) (assuming balanced)
depthFirstLog: O(log n) (assuming balanced)
 */
