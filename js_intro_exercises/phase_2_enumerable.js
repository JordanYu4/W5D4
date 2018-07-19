
Array.prototype.myEach = function (callback) {
  for (i = 0; i < this.length; i ++) {
    callback(this[i]);
  }
}; 


Array.prototype.myMap = function (callback) {
  let mapped = []; 
    
  function mapHelper(el) {
    mapped.push(callback(el));
  }
  
  this.myEach(mapHelper);
  return mapped;
};



Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue || this[0];
  
  function helper(el) {
    acc = callback(acc, el);
  }
  
  if (initialValue) {
    this.myEach(helper);
  } else {
    this.slice(1).myEach(helper);
  }
  return acc;
};


let arr = [1, 2, 3, 4, 5];
