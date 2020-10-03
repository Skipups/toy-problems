/*LeetCode #560. Subarray Sum Equals K

Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Input:nums = [1,1,1], k = 2
Output: 2 */


function subarraySum(arr,k){
let count=0
let sum=0
let map= new Map()  //map will store sums and the frequency of occurance

map.set(0,1)
for( let i=0; i<arr.length; i++){
sum+=arr[i]

if(!map.has(sum)){     //check if sum is in map, if so increment value of key
  map.set(sum,1)
}else{
  map.get(sum, map.set(sum)+1)     //if not add key and set value to 1 
}

if(map.has(sum-k)===0){
  count +=map.get(sum)
}

 //check if sum - k is in the map, if so that means we have found a subarray that qualifies, we increament the count by the number of value of the key: value pair


}




  return count
}