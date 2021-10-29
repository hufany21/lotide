let str = "Lighthouse labs is the best"

let countLetters = function(str){
let results = {}
for(let letters of str) 
{
  if (letters !== ' '){
    if (results[letters]){
    results[letters] += 1
    }
     else { results[letters] = 1}
  }
}
  return results

};

console.log(countLetters(str))