var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;
  /*
  
  */
  return someInstance;
};

var stackMethods = {};



//need function for push
stackMethods.push = function(value) {
  //side effect: adds to storage
};

//need function for pop
stackMethods.pop = function() {
  //side effect: removes from storage
  //output = whatever was removed
};
//need function for size
stackMethods.size = function() {

  //return a number (number of items in storage)
  //return someInstance.size.length;
  return Object.keys(this.storage).length;
};


