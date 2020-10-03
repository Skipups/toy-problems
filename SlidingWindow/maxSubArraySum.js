//write function maxSubArraySum that accepts an array of integers and num n, calculate the largest sum of n consecutive numbers


function maxSubArraySum(arr,n){
//let the initial max sum to sum of index 0->n-1
let maxSum=0


if(arr.length<n) return null
for(let i=0; i<n;  i++){
  maxSum+=arr[i]
}
console.log(maxSum)
let tempSum=maxSum
for(let i=n; i<arr.length; i++){
tempSum= tempSum +arr[i]-arr[i-n]
maxSum= Math.max(maxSum,tempSum)
console.log('maxSum',maxSum,'tempSum',tempSum, '+',arr[i], '-',arr[i-n])


}

console.log(maxSum)
return maxSum

}
maxSubArraySum([3,4,5,1,6,-1,20],3)
        