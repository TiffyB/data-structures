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

binaryMethods.contains = function(target, branch) {
  if (branch === undefined) {
    branch = this;
  }  
  if (branch.value === target) {
    return true;
  } else if (target < branch.value) {
    if (!branch.left) {
      return this.contains(target, branch.left);
    } else {
      return false;
    }
  } else if (target > branch.value) {
    if (!branch.right) {
      return false;
    } else {
      return this.contains(target, branch.right);
    }
  }
  /*
  console.log(result.length);
  return result.length > 0;
  */
  //return false;
  
//if value equals target 
    //return true
  //else compare current value to target
    // if target is smaller go left
       // call contains of left branch
    // if target is bigger go right
        // call contains on left branch
    //

};

binaryMethods.depthFirstLog = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
