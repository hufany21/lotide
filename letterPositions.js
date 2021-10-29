let str = "Lighthouse labs is the best"



let letterPositions = function(str){
let results = {}
let i = 0;
for(let letters of str) {
  if (letters !== ' '){
    if (results[letters]){
    results[letters].push(i)
    }
     else {results[letters] = [i];
  }
}
 i++; 
}
return results
};

console.log(letterPositions(str))
