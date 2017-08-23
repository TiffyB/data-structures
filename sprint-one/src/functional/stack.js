var Stack = function() {
  var someInstance = {};

  var stack = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    stack++;
    storage[stack] = value;
  };

  someInstance.pop = function() {
  if(stack > 0){
    var temp = storage[stack];
    stack--;
  return temp;
  }
  };

  someInstance.size = function() {
    return stack;  
  };

  return someInstance;
};
