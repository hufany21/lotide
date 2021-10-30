const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`    Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(arr, arr1) {
  let x = 0;
  let u = arr.length
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr1[i]) {
      x++;
    }
  }
  if(u < arr1.length){
    u = arr1.length
  }
  if (x === u) {
    return true;
  } else {
    return false;
  }
};


const eqObjects = function(object1, object2) {
  arr1 = Object.keys(object1)
  arr2 = Object.keys(object2)
  if (arr1.length !==  arr2.length ){
    return false
  }
  let isSameObject = true
  for(let key in object1){
   // console.log(key, object1[key], object2[key])
   if(Array.isArray(object1[key])){
      if (eqArrays(object1[key], object2[key]) === false){
        isSameObject = false
      }
   } else if (object1[key] !== object2[key]) {
     isSameObject = false 

   } 
   else {
     //return true
     }

  }
return isSameObject
  }



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


assertEqual(eqObjects(cd, dc), true)
assertEqual(eqObjects(ab, ba), true)
assertEqual(eqObjects(cd, cd2), false);
