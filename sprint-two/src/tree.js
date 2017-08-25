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
  this.children[this.children.length] = Tree(value);
};

treeMethods.contains = function(target, branch) {
  if (branch === undefined) {
    //branch = this.value;
    branch = this;
  }
  console.log(this);
  if (this.value === target) {
    return true;    
    console.log('im true');
  } else if (this.children.length > 0) {
    console.log('i got here');
    for (var i = 0; i < this.children.length; i++) { 
      console.log('blah');
      //branch = this.children[i];
      treeMethods.contains(target, this.children[i]);
    }
    
    
    //traverse children in the tree
    //check if children contains target
    //
  }
  return false; 
  
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
