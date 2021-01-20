//naive sorts average time N^2
  // loop and compare all values until the list is sorted
  //bubble sort- largest bubble to the top
  // insertion sort- 
  //selection sort
  i
  //[1,2,3,5]
       j   

  //works very well if very few swaps
  const bubbleSort = function(arr){
  let noSwap
for(let i=arr.length-1; i>=0; i--){
  noSwap=true
  for(let j=1; j<=i; j++){
        if(arr[j-1]>arr[j]){
          //swap
          let temp=arr[j]
          arr[j]=arr[j-1]
          arr[j-1]=temp
          noSwap=false
        }
  }
  if(noSwap) break
}
return arr
}

 //works well if nearly sorted data. good if constant stream of data, keep getting more data, only need to do a single
 //pass to figure out where it goes
const insertionSort =(arr)=>{
for(let i=1; i<arr.length; i++){
  let currentV=arr[i]
  let j=j-1

  while(j>=0 && arr[j]>currentV){
    arr[j+1]=arr[j]
    j--
  }
  arr[j+1]=currentV
}

return arr
}

//not helpful if data is almost sorted, still n2 
const selectionSort = ()=>{  //sorted data at the start, keep track of min

for(let i=0; i<arr.length; i++){
  let minIndex=i
 
  for(let j=i+1; j<arr.length; j++){
    if(arr[j]<arr[minIndex]){
      minIndex=j
    }
  }
let temp= arr[minIndex]
arr[minIndex]= arr[i]
arr[i]=temp
}
return arr
}