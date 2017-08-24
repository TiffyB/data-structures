var LinkedList = function() {
  var list = {};
  list.head = {
    value: null

  };
  list.tail = {
    listedValues: []
  };

  list.addToTail = function(value) {
    list.tail.listedValues.push(value);
    list.tail.value = list.tail.listedValues[list.tail.listedValues.length - 1];
    list.head.value = list.tail.listedValues[0];
  };

  list.removeHead = function() {
    /*
    var temp = Node(list.head[Object.keys(list.head)[0]];
    delete list.head[Object.keys(list.head)[0]];
    return temp;
    */
    var temp = list.tail.listedValues.shift();
    list.head.value = list.tail.listedValues[0];
    return temp;
    
  };

  list.contains = function(target) {
  //search for target
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
