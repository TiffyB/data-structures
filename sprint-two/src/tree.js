var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  
  newTree.children = [];  // fix me

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
 // console.log(newTree);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  console.log(this.children[0].value);
  var result = [];
  var recurseivlySearchTree = function(tree, result) {
    //console.log(tree.value);
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

  //return false; 
    
    //traverse children in the tree
    //check if children contains target
    //
  
  
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
