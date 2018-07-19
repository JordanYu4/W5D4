Array.prototype.uniq = function () {
  let uniqs = [];
  this.forEach(function(el) {
    if (!uniqs.includes(el)) {
      uniqs.push(el);
    }
  });
  return uniqs;
};

Array.prototype.twoSum = function () {
  let pairs = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
};

// let nums1 = [2, 4, 7, -4, 1]; //=> [[1, 3]]
// let nums2 = [1, 6, 5, 8, -1]; //=> [[0, 4]]
// let nums3 = [3, 5, 7]; // []
// 
// console.log(nums1.twoSum());
// console.log(nums2.twoSum());
// console.log(nums3.twoSum());

