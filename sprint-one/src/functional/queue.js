var Queue = function() {
  var someInstance = {};
  var queue = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  

  // Implement the methods below

  someInstance.enqueue = function(value) {
   
    storage[value] = value;
  };

  someInstance.dequeue = function() {
 
    var temp = Object.keys(storage)[0];
    delete storage[temp];
   // var remove = storage[storageKeys[1]];
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };
  console.log(queue);
  console.log(storage);
  return someInstance;
};