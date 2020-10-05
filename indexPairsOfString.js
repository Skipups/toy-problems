// 1065. Index Pairs of a String

// Given a text string and words (a list of strings), return all index pairs [i, j] so that the substring text[i]...text[j] is in the list of words.

 //can also solve with trie**

// Example 1:

// Input: text = "thestoryofleetcodeandme", words = ["story","fleet","leetcode"]
// Output: [[3,7],[9,13],[10,17]]

function indexPairsOfString(str, words){

let result=[]

//sort words by length
words.sort((a,b)=> a.length-b.length)

//
for(let i=0; i<str.length; i++){
  words.forEach(word=>{
    if(str.slice(i, i+word.length) === word)
    result.push([i,i+word.length-1])
  })
}
 

console.log(result)
return result
}
indexPairsOfString("thestoryofleetcodeandme", ["story","fleet","leetcode"])