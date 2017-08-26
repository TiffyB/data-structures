

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  this.storage.nodes = {}; 
  this.value = undefined;
  this.edge = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new Graph();
  newNode.value = node;
  this.storage.nodes[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this.storage.nodes[node.toString()];  
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.storage.nodes[node.toString()].edge; i++) {
    this.removeEdge(this.storage.nodes[node.toString()].edge[i], node);
  }
  delete this.storage.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { 
  return this.storage.nodes[fromNode.toString()].edge.includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage.nodes[fromNode.toString()].edge.push(toNode);
  this.storage.nodes[toNode.toString()].edge.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromIndex = this.storage.nodes[fromNode.toString()].edge.indexOf(toNode);
  this.storage.nodes[fromNode.toString()].edge.splice(fromIndex, 1);
  var toIndex = this.storage.nodes[toNode.toString()].edge.indexOf(fromNode);
  this.storage.nodes[toNode.toString()].edge.splice(toIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage.nodes) {
    cb(Number(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
addNode: O(1)
contains: O(1)
removeNode: O(n) (potentially worse depending on how many edges are listed at each node)
addEdge: O(1)
hasEdge: O(n) (because we set edges up as an array. O(1) if edge were an object)
removeEdge: O(n) (because we set edges up as an array, it needs to be iterated thru to find the corresponding node)
forEachNode: O(n)
 */


