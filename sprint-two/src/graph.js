

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
  var recursiveSearch = function(graph) {
    if (graph.value === node) {
      return true;
    } else {
      for (var key in graph) {
        return recursiveSearch(graph[key]);
      }
    }
    return false;
  };
  return recursiveSearch(this);
  
  
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  
  //need to know which nodes to remove edges from
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
  for (var key in this.storage.nodes) {
    if (Number(key) === fromNode) {
      this.storage.nodes[key].edge.push(toNode);
    }
    if (Number(key) === toNode) {
      this.storage.nodes[key].edge.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var key in this.storage.nodes) {
    if (Number(key) === fromNode) {
      var index = this.storage.nodes[key].edge.indexOf(toNode);
      this.storage.nodes[key].edge.splice(index, 1);
    }
    if (Number(key) === toNode) {
      var index = this.storage.nodes[key].edge.indexOf(fromNode);
      this.storage.nodes[key].edge.splice(index, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage.nodes) {
    cb(Number(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


