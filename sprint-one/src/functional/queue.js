var Queue = function() {
  var someInstance = {};
  var queue = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  var storageKeys = Object.keys(storage);

  // Implement the methods below

  someInstance.enqueue = function(value) {
    queue++;
    storage[queue] = value;
  };

  someInstance.dequeue = function() {
  if(queue > 0){
    var temp = storage[1];
   // var remove = storage[storageKeys[1]];
    queue--;
    
    return temp;
  }
  };

  someInstance.size = function() {
    return queue;
  };
  console.log(queue);
  console.log(storage);
  return someInstance;
};
