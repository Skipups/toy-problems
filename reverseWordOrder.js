//reverse the order of words in each line of input, 
//while preserving the words themselves the lines of your output should not have an y trailing or leading spaces

//example 
//input
//3
//" Hello World "
//Bye World
//Useless World

//output
//World Hello
//World Bye
//World Useless

function reverseWords(str){
let end=str.length-1
let word=""
let reversedStr= ""

while(end>=0){
while(str[end]=== " " && str[end-1] === " ") end--
if(str[end] !== " "){
  word = str[end] + word
}else if(str[end] === " "){
  if(reversedStr.length === 0){
    reversedStr = word
  }else{
    reversedStr = reversedStr + " " + word
  }
  word = ""
}

end--
}
console.log(reversedStr)
return reversedStr
}


reverseWords('  Hello   Cat dog! ')