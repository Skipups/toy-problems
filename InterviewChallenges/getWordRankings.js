//Given a list of words which has a pre-sorted ranking, write a function which takes in a prefix and returns the top 3 ranked words matching that prefix.

var words = [
  "doghouse",
  "birdhouse",
  "dogshow",
  "cats",
  "frogs",
  "dog",
  "dogs",
]

{
"d": ["doghouse", "dogs"..]
"do" ["doghouse", "dogs"..
"dog": ["doghouse", "
}

/*tri */
d
- - -
o
---
g

const wordsMap = (arr)=>{
let obj={}
arr.forEach(word=>{
if(word.)

}



function getWorkRankings(str) {
let preLen=str.length
let result=[]
for(let i=0; i<words.length; i++){
let currW=words[i]
if(currW.slice(0,preLen) === str){
if(result.length <3){
 result.push(currW)
}

}
console.log(result)
return result
}

console.log(getWorkRankings("dog"));

