// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true

function isValidParen(str){
if(str.length%2 !==0) return false
let arr=[]

let strArr=str.split('')
for(let i=0; i<strArr.length; i++){
  let brac= str[i]
  if(brac === '(') {
    arr.push(')')
  } else if(brac === '{') {
    arr.push('}')
  } else if(brac === '['){
    arr.push(']')
  } else {
if( brac !== arr.pop()) return false
  }
 
}
   

return arr.length ===0

}

isValidParen('((({})))')
isValidParen('())')