var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  

  list.addToTail = function(value) {
    var newTail = Node(value);
    if (!list.head) {
      list.head = newTail;
      list.tail = newTail;
    } else if (list.head.value === list.tail.value) {
      list.head.next = newTail;
      list.tail = newTail;
    } else {
      list.tail.next = newTail;
      list.tail = list.tail.next;
    } 
  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
  };

  list.contains = function(target, element) {
    if (element === undefined) {
      element = list.head;
    }
    
    if (element.value === target) {
      return true;
    } else if (!element.next) {
      return false;
    } else {
      element = element.next;
      return list.contains(target, element);
    }    
    return false;
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

  addToTail: O(1)
  removeHead: O(1)
  contains: O(n) - worst case (O(1) if target happens to be list head)
 */
