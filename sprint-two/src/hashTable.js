

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var pair = [k, v];
  if(!this._storage[index]){
  	this._storage[index] = [pair];
  }else{
  	var isFound = false;
  	for(var i = 0;i < this._storage[index].length; i++){
  		if(this._storage[index][i][0] === k){
          this._storage[index][i][1] = v;
          isFound = true;
  		}
  	}
  	if(!isFound){
      this._storage[index].push(pair);
  	}
    //traverse tupples
    //if we find tupple that matches k
    //then we know k exists at index
    // overwrite the v of k
    // if that is not the case (k is not found at index)
    // push the tupple into the array

  }
  /*
  else{
  	this._storage[index].push(pair); 
  }
  */
 // this._storage[index] = pair;

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for(var i = 0;i < this._storage[index].length; i++){
    if(this._storage[index][i][0] === k){
    	return this._storage[index][i][1];
    }
  }
  //get to index of storage
  //go throught arrays and 
  //check every array for k;
  //if that is true give the second half of the tuple

  
  //return this._storage[index][1];
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index] = [];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


