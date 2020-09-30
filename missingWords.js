// Given two strings, one is a subsequence if all of the elements of the
// first string occur in the same order within the second string. They do
// not have to be contiguous in the second string, but order must be
// maintained. For example, given the string 'I like cheese', the words ('I',
// 'cheese') are one possible subsequence of that string. Words are space
// delimited.
// Given two strings, s and t, where t is a subsequence of s, report the
// words of s, missing in t (case sensitive), in the order they are missing.
// Example
// s = 'I like cheese'
// t = 'like'
// Then 'like' is the subsequence, and ['I', 'cheese'] is the list of missing
// words, in order.
// I am using HackerRank to improve programming →
// s = 'I am using HackerRank to improve
// programming'
// am HackerRank to improve →
// t = 'am HackerRank to improve'
// Sample Output
// I
// using
// programming
// Explanation
// The missing words are:
// 1. I
// 2. using
// 3. programming
// Add these words in order to the array ["I", "using", "programming"],
// then return this array as the answer.

function missingWords(str, sub){
 

  let arrStr = str.split(" ")
  let arrSub= sub.split(" ")
  
  let strMap= new Map()
  for(let i=0; i<arrStr.length; i++){
    let currentWord= arrStr[i]
    strMap.set(currentWord)
  }
  console.log("strMap",strMap)


for (let word of arrSub){
  if(strMap.has(word)){
    strMap.delete(word)
  }
}
let difference= []
for (let key of strMap.keys()){
difference.push(key)
}
console.log(difference)
}

//missingWords('I am using HackerRank to improve programming', 'am HackerRank to improve')

// Sam's on the fly attempt

function missingWordsSam(str, sub) {
  // str has all the words
  // sub has missing words

  // my first hint: I see the word "subsequence" so order matters here

  // This is a comparison because we're comparing strings, sO i need to compare a word against another

  const result = []

  const strArray = str.split(" ")
  const subArray = sub.split(" ")//

  let strPointer = 0 //pointer for my strArray
  let subPointer = 0 //pointer for my subArray

  // Thsi is where order matters in regards to using "subsequence"
  // And this is where I start comparing
  // I want to compare the subArray against the strArray

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] !== subArray[subPointer]) {
      result.push(strArray[i])
      //continue
    } else {
      subPointer++
    }
  }
  console.log(result)
  return result
}

missingWordsSam('I am using HackerRank to improve programming', 'am HackerRank to improve')

/*
[ 'I', 'am', 'using', 'HackerRank', 'to', 'improve', 'programming' ] 
        i  

[ 'am', 'HackerRank', 'to', 'improve' ]
  subP
*/