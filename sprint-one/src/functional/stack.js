var Stack = function() {
  var someInstance = {};

  var stack = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    stack++;
  };

  someInstance.pop = function() {
    stack--;
  };

  someInstance.size = function() {
    return stack;  
  };

  return someInstance;
};
