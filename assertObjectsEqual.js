
const eqArrays = function(arr, arr1) {
  let x = 0;
  let u = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr1[i]) {
      x++;
    }
  }
  if (u < arr1.length) {
    u = arr1.length;
  }
  if (x === u) {
    return true;
  } else {
    return false;
  }
};


const eqObjects = function(object1, object2) {
  arr1 = Object.keys(object1);
  arr2 = Object.keys(object2);
  if (arr1.length !==  arr2.length) {
    return false;
  }
  let isSameObject = true;
  for (let key in object1) {
    // console.log(key, object1[key], object2[key])
    if (Array.isArray(object1[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        isSameObject = false;
      }
    } else if (object1[key] !== object2[key]) {
      isSameObject = false;

    } else {
      //return true
    }

  }
  return isSameObject;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`    Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const object1 = {
  a:2,
  b:3,
  c:4
};

const object2 = {
  a:2,
  b:3,
  c:4
};

assertObjectsEqual(object1, object2);