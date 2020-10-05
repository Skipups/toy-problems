// return the first pair the sums to zero, if it doesn't sum to zero return undefined. the array is sorted

function sumZero(arr){

let left=0
let right=arr.length-1

while(left<right){
  if(arr[left] +arr[right] === 0){
    return [arr[left,arr[right]]]
  }else if(arr[left] +arr[right] > 0){
    right--
  }else{
    left++
  }
}

  return undefined

}

sumZero([-4,-3,-2,0,1,2,3,4,5,6])




// let left=0
// let right=arr.length-1

// while(left<right){

//   if((arr[left]+ arr[right]) === 0){
//     console.log([arr[left],arr[right]])
//      return [arr[left],arr[right]]
//   }else if((arr[left]+ arr[right]) >0){
//     right--
//   }else{
//     left++
//   }
// }

// return undefined