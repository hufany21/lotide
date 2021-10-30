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

const assertArrayEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) { 
    console.log("It's the same!")
  } else {
    console.log("It's difference!")
}  
}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



const words = ["ground", "control", "to", "major", "tom"];


assertArrayEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
