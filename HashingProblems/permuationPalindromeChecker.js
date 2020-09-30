// Write an efficient function that checks whether any permutation of an input 
// string is a palindrome.

// You can assume the input string only contains lowercase letters.

function palindromeChecker(str){
let seen= new Set()

for (let i=0; i<str.length; i++){
let letter= str[i]
if(seen.has(letter)){
  seen.delete(letter)
}else{
  seen.add(letter)
}
}
return seen.size<=1 ? true: false

}

palindromeChecker('caattc')

