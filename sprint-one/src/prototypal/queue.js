var Queue = function() {
  
  var instanceOf = Object.create(queueMethods);
  instanceOf.storage = {};
  return instanceOf;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};
queueMethods.dequeue = function() {
  var temp = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  return temp;
};

queueMethods.enqueue = function(value) {
  this.storage[value] = value;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};


