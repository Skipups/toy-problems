//write a funciton the counts the unique values in a sorted array

function countUniqueValues(arr){
let slow=0
let fast=1


while(fast<=arr.length){

if(arr[slow] !== arr[fast]){
  slow++
  fast++
  
}else{
  fast++
}

}
console.log(slow,fast)
return slow

}
countUniqueValues([1,1,1,1,2])

//solution altering array and building up unique values
function gatherUniqueValues(arr){
  let slow=0
  let fast=1
  
  
  while(fast<arr.length){
  
  if(arr[slow] !== arr[fast]){
    arr[slow+1]=arr[fast]
    slow++
    fast++
    
    
  }else{
    fast++
  }
  
  }
  let cat=arr.slice(0,slow+1)
  console.log(slow,fast,cat )
  return slow +1
  
  }
  gatherUniqueValues([1,1,2,3,4,5,5,5])
