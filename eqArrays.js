const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`    Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(arr, arr1) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr1[i]) {
      x++;
    }
  }
  if (x === arr.length) {
    return true;
  } else {
    return false;
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
 
