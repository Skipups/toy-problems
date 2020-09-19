// taking one element at a time, insert it into the correct possition of the sorted portion of the array
// starting from the second element
//n^2 time o(1) space in place
// works well when data is coming in live or streaming


function insertionSort(arr){

  for(let i=0; i<arr.length; i++){
    for (let j=arr.length-1; j>=0 ; j--){
      let smallest
      
    }
  }
}







function insertionSort(arr){

for(let i=1; i<arr.length; i++){
let currentV=arr[i]
let j=i-1
console.log('arr', arr,"i",i, "current", currentV, "j", j)
while(j>=0 && arr[j] > currentV){
  arr[j+1]=arr[j]
  j--
  console.log('arr', arr,"i",i, "current", currentV, "j", j)
}
arr[j+1]= currentV
}
console.log(arr)
return arr
}

insertionSort([1,0,7])


