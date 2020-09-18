//whatever the length, you loop over the array the same number of times
// largest number bubbles to the top
//passing through each postion, compare the number at the current postion 
// to the number in front of it
//time complexity n**2 

//can optomize by checking to make sure there are swaps
//if there aren't any we know the array is sorted and we can exit early



function bubbleSort(arr){

for(let i=arr.length; i>0; i--){
  let swapped=false
for(let j=0; j<i-1; j++){

  let slow =arr[j]
  let fast = arr[j+1]
  console.log(arr, slow, fast)
  if(arr[j]>arr[j+1]){
    //swap
    let temp=arr[j]
    arr[j]=arr[j+1]
    arr[j+1]=temp
    swapped=true
    console.log(swapped)
  

  }
}
if(swapped === false) return arr
}



  return arr
}

bubbleSort([7,2,1,4])