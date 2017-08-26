var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  // fix me
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var result = [];
  var recurseivlySearchTree = function(tree, result) {
    if (tree.value === target) {
      result.push(true);
    } else if (tree.children.length !== 0) {
      for (var i = 0; i < tree.children.length; i++) {
        recurseivlySearchTree(tree.children[i], result);
      }
    }
    return false;
  };
  
  recurseivlySearchTree(this, result);
  return result.length !== 0;
};






/*
 * Complexity: What is the time complexity of the above functions?
  add:  O(1)
  contains: O(n)
 */
