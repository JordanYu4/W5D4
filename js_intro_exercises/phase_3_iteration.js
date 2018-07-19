Array.prototype.transpose = function () {
  let transposed = [...Array(this.length)].map(e => Array(this[0].length));
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      transposed[j][i] = this[i][j];
    }
  }
  return transposed;
};

// let emptyArr = [];
// let matrix = [[1,2,3],[4,5,6],[7,8,9]];

Array.prototype.bubbleSort = function () {
  let switched = true;
  while (switched) {
    switched = false;
    for (i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i+1]) {
        let temp = this[i+1];
        this[i+1] = this[i];
        this[i] = temp;
        switched = true;
      }
    }
  }
  return this;
};

// let bubSorty = [2, 4, 7, -4, 1];

String.prototype.substrings = function () {
  let subs = [];
  for (i = 0; i < this.length; i++) {
    for (j = i + 1; j <= this.length; j++) {
      subs.push(this.slice(i, j));
    }
  }
  return subs.uniq();
};

let str = "javascript"; 