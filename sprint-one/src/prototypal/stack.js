var Stack = function() {
 
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};



  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};



var stackMethods = {};

stackMethods.pop = function() {
  var temp = this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
  delete this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
  return temp;

};

stackMethods.push = function(value) {
  this.storage[value] = value;

};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
