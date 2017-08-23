var Queue = function() {
  var someInstance = {};
  var queue = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    queue++;
  };

  someInstance.dequeue = function() {
  if(queue > 0){
    queue--;
  }
  };

  someInstance.size = function() {
    return queue;
  };

  return someInstance;
};
