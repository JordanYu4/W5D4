function range(start, end) {
  if (start === end) {
    return [end];
  }
  return [start].concat(range(start + 1, end));
}


function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumRec(arr.slice(1));
}


function exponent1(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent1(base, exp - 1);
}


function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp % 2 === 0) {
    return Math.pow(exponent2(base, exp / 2), 2); // exponent2(base, exp / 2) ** 2
  } else {
    return base * Math.pow(exponent2(base, (exp - 1) / 2), 2);
  }
}

function fibonacci(n) {
  if ([1, 2].includes(n)) {
    return n - 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}


function deepDup(arr) {
  arr.map(el) {
    
  }
}

let a = [1, 2, 3];
let b = 2;
let c = 3;
let vars = [a, b, c];

// base case: if arr is empty return [] 
// take first el, if normal concat el to deepDup of arr.slice(1)
// if Array, concat deepDup of el to deepDup of arr.slice(1)