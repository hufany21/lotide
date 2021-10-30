

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

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("It's the same!");
  } else {
    console.log("It's difference!");
  }
};



const without = function(source, itemsToRemove) {
  let results = [];
  for (const val of source)  {
    if (val !== itemsToRemove) {
      results.push(val);
    }
  }
  return results;
};

const words = ["hello", "world", "lighthouse"];

console.log(without(words, "lighthouse"));
assertArrayEqual(words, ["hello", "world", "lighthouse"]);
