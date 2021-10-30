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

const takeUntil = function(array, callback) {
let results = []
for (let val of array){ 
if  (!callback(val)) {
  results.push(val) } 
   else  {
    return results} 
  }
  
}




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArrayEqual((results2), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);