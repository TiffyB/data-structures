var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.pop = function() {
  var temp = this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
  delete this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
  return temp;
};

Stack.prototype.push = function(value) {
  this.storage[value] = value;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};


