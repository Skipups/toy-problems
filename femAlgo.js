//must be sorted for binaryS

const binaryS= function (arr,item){

let max=arr.length-1
let min=0
let guessIndex


while(min<=max){

guessIndex=Math.floor((min+max)/2)

if(arr[guessIndex]=== item){
  return guessIndex
}else {
  if(arr[guessIndex]>item){
    max=guessIndex-1
}else{
  min=guessIndex+1
}
}
}

return -1
}
binaryS([2,3,4,5,6,7,8,9])



      worried about not understanding factirial and  memoization combination
      understand concat and explain it outloud
      type up notes from interview and my behavioral answers
      type up annoyances and learning from family trip
