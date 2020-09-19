// places the smallest values first. start at the first element, iterate through the Array keeping track of the lowest element. 
// swap the first element with the lowest found. move on to the next element and do the process again. 
// n^2 time


function selectionSort(arr){

  for (let i=0; i< arr.length; i++){
    let lowest=i
    for(let j=i+1; j<arr.length; j++){
      if (arr[j]<arr[j-1]){
          lowest=j
          console.log(arr, i, lowest,j)
      }
      
    }
    //swap
    let temp=arr[i] 
    arr[i] = arr[lowest]
    arr[lowest]=temp
    console.log(arr)

  }
  console.log(arr)
  return arr
}




















// function selectionSort(arr){

// for(let i=0; i<arr.length; i++){
//   let smallestI=i
//  for(let j=0+i; j<arr.length; j++){

//    if(arr[j] < arr[smallestI]){
//          smallestI=j
//    }

//  //swap
//  let temp=arr[smallestI] 
//    arr[smallestI]= arr[i]
//    arr[i]=temp
//    console.log(arr, arr[i], arr[smallestI])
// }
// }
//   return arr
// }

selectionSort([8, 3, 5, 6, 2, 1, 10 ])
         