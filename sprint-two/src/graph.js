

// Instantiate a new graph
var Graph = function() {
  this.value = undefined;

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.value = node;
  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //var results = [];
  var recursiveSearch = function(graph) {
    if (graph.value === node) {
      //results.push(true);
      return true;
    } else {
      for (var key in graph) {
        //return recursiveSearch(graph[key], results);
        return recursiveSearch(graph[key]);
      }
    }
    return false;

  };
  return recursiveSearch(this);
  
  //return results.length > 0;
  
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.value;
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


