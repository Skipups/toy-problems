// Given an array of one or more vanity codes and an array of phone numbers, write a function to find all phone numbers that match oone or more vanity codes. The output must be sorted array of unique phone number from the input array of numbers.
// the funciton is expected to return a string_array
// the function accepts following paramaters:
// 1. string array codes 
// 2. string array numbers
// constraints:
// the input numbers array may have repeat elements. 
// the output must be sorted array of unique numbers
// vanity codes will only consist of uppercase letters(A-Z)
// All vanity codes will be of shorter length than all phone numbers
// the output array should be subset of the input array of phone numbers
// vanity codes can appear anywhere in number, including country or area codes
// phone numbers will be in the E.164 format i.e. a (+) followed by up to 15 digits

// extra credit naive solution may cause matching time to time out, optimize for larger arrays

// sample
// TWLO
// CODES
// HTCH
// +17474824380
// +14157088956
// +91981015555
// +15109926333
// +1415123456

// sample output
// +17474824380
// +15109926333
// +17474824380

// TWLO matches 1st, CODE matches 2nd, HTCH matches 3rd


function vanityNumber(codes, numbers){

  //translate codes - string letters to numbers, back to string
  //store in codesMap?
  //store all numbers in numbersMap

  //iterate through codesMap keys, compare each codesMap key with each numberMap key, use indexOf to check if codeMap key is in numberMap key
  //if it is add it to a resultSet
  //return keys of resultSet as an array, sorted
  
  let codeObj={
    A:2,
    B:2,
    C:2,
    D:3,
    E:3,
    F:3,
    G:4,
    H:4,
    I:4,
    J:5,
    K:5,
    L:5,
    M:6,
    N:6,
    O:6,
    P:7,
    Q:7,
    R:7,
    S:7,
    T:8,
    U:8,
    V:8,
    W:9,
    X:9,
    Y:9,
    Z:9,
  }

  
  let translatedCodeArr=[]  //strings of vanity numbers
  for(let i=0;i<codes.length;i++){
    let currentCode=codes[i]
    let translatedCode_temp=''
    for(let j=0; j<currentCode.length; j++){
      let currentLetter=  currentCode[j]
      translatedCode_temp += codeObj[currentLetter].toString()
    }
    translatedCodeArr.push(translatedCode_temp)
  
  }
  let result=[]
  for(let i=0; i<numbers.length; i++){
    let currentNumber = numbers[i]
    for(let j=0; j<translatedCodeArr.length; j++){
      let currentCode=translatedCodeArr[j]
      if(currentNumber.includes(currentCode) && !result.includes(currentNumber)){
        result.push(currentNumber)
      }
    }
  }

console.log(result.sort())
return result.sort()


}
vanityNumber(['TWLO','CODE','HTCH'], ['+17474824380', '+14157088956','+919810155555', '+15109926333','+1415123456'])

