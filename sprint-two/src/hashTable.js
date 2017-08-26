

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var pair = [k, v];
  if (!this._storage[index]) {
    this._storage[index] = [pair];
  } else {
    var isFound = false;
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
        isFound = true;
      }
    }
    if (!isFound) {
      this._storage[index].push(pair);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
*insert: typical case is O(1) when all pairs are in separate buckets. 
  O(n) if there are many collisions.
*retrieve: typical case is O(1) when all pairs are in separate buckets. 
  O(n) if there are many collisions.
*remove: O(1) in most cases, but may be O(n) when all tuples end up in the same bucket

 */


