// all basic sorts space complexity O(1)
//not creating new arrays, return same array
//average time quadratic
//excell when data sets are small

//Insertion sort
//builds sorted portion by gradually creating a larger left half which is sorted
//O(n^2) worst time if our list is reversed. 
//if almost sorted O(n) inner loop runs O(1)
//online algo- because one side sorted and insert in right place, an insert at a moments notice. 
//Good for continuous sort, maintain a running sort

//take second element in array, 
//compare to previous element, swap if necessary
//continue to next and repeat until sorted
function insertS(arr){
 
  for(let i=1; i<arr.length; i++){
   let currV=arr[i]
   let j=i-1
    while(j>=0 && arr[j]>currV){
      arr[j+1]=arr[j]
       j--
      }
      arr[j+1]=currV
    }
    return arr
}               
insertionSort([0,1,8,8,3]) 

function insertion(arr){
  for(let i=1; i<arr.length; i++){
    let currV=arr[i]
    let j=i-1
    while(j>=0 && arr[j]>currV){
   arr[j+1]=arr[j]
   j--
    }
    arr[j+1]=currV
  }
  return arr
}


//Bubble sort
//builds sorted portion on the right with the largest value bubbling to the top 
//O(n^2) worst time , roughtly making n comparisions to every n
//if almost sorted O(n)

//1st loop starts right, window becomes smaller with each iteration of inner loop, because those are sorted
//2nd loop starts from left, compare curr number to next, if curr is larger than next, swap
//largest number bubbles to the top at first sweep

function bubble(arr){
  for(let i=arr.length-1; i>0; i--){
    let noSwaps=true
    for(let j=0; j<i; j++){
      if(arr[j]>arr[j+1]){
        //swap
        let temp=arr[j+1]
        arr[j+1]=arr[j]
        arr[j]=temp
       noSwaps=false
      }
    }
    if(noSwaps) break

  }
  return arr
}
bubble([10,1,8,7,3]) 

function bubble(arr){
  for(let i=arr.length-1; i>=0; i--){
    let noSwap=true
    for(let j=0; j<i; j++){
      if(arr[j]>arr[j+1]){
        let temp=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp
        noSwap=false
      }
    }
    if(noSwap) 
    break
  }
  return arr
}

//Selection sort
//Builds sorted portion on left side, placing smaller values into sorted postion
//O(n^2) always because always loops through the entire list, keeping track of the lowest variable 
//only good if you want to minimize the number of swaps, end of each loop

//store the first element as the smallest value seen so far
//compare it to the next item until you find a smaller one
//if a smaller is found, save it as the new min and continue to end of array
//if min index is not what you was your original min index, swap
//repeat

function selection(arr){

  for(let i=0; i<arr.length; i++){
    let lowestI=i
    for(let j=i+1; j<arr.length; j++){
      if(arr[lowestI]> arr[j]){
        lowestI=j
      }
     
    }
    if(lowestI !== i){
      let temp=arr[i]
      arr[i]=arr[lowestI]
      arr[lowestI]=temp
      }
  }
return arr
}





//.sort()
//n(log n)
//JS built-insort method that takes optional comparator function telling JS how we want to sort


//-----------------// 

//Merge sort 
//O(n log n) time no matter the order of the data, and O(n) space comlexity
//nlogn time because you keep splitting half each time, as n grows the number of times we need to split it up grows log n times, n comparisions per decomposition before the merge

//decompose arrays into smaller arrays of 0 o1, build up sorted array
//helper function for merging sorted arr. runs O(n+m)time and space
function mSort(arr){
  if(arr.length <=1){
    return arr
  }
let middle=Math.floor(arr.length/2)
let left = mSort(arr.slice(0,middle))
let right=mSort(arr.slice(middle))
return merge(left,right)

}
function merge(ar1, ar2){
let sorted=[]
let one=0
let two=0
while(one<ar1.length && two<ar2.length){
  if(ar1[one]<=ar2[two]){
    sorted.push(ar1[one])
    one++
  }else{
    sorted.push(ar2[two])
    two++
  }
}
while(one<ar1.length){
  sorted.push(ar1[one])
  one++
}
while(two<ar2.length){
  sorted.push(ar2[two])
  two++
}
merge(lside,rside)
return sorted
}

merge([2,3,4],[1,2,5])

function ms(arr){
if(arr.length <=1){
  return arr
}
let middle=Math.floor(arr.length/2)
let left= ms(arr.slice(0,middle))
let right = ms(arr.slice(middle))
 return merge(left,right)
}
function merge(left,right){
  let arr=[]
  let l=0
  let r=0

  while(l<left.length && r<right.length){
    if(left[l]<=right[r]){
arr.push(left[l])
l++
    }else{
      arr.pish(right[r])
      r++
    }
  }
  return arr.concat(left.slice(l)).concat(right.slice(r))
}

//Quick sort
 //best case nlogn worst n^2 (if it's sorted and out pivot is first num)

 function quickSort(arr){
   if(arr.length <=1){
     return arr
   }
   const [pivot, ...rest]= arr
   const left=[]
   const right=[]
   rest.forEach(num=> num>=pivot ? right.push(num): left.push(num))
   return   quickSort(left).concat(pivot).concat(quickSort(right))
 }
quickSort([2,3,4,1,2,5])

s//earch and insert
function binarySearch(){

  // if(this.map[tweetName] === undefined){
//     this.map[tweetName]=[time,1]
//     return
// }else
//    let list=this.map[tweetName]  //[[0,1],[2,1],[4,1]]
//    let n=list.length 
// //insert in sorted order
// if(time<list[0][0]){
//     list.splice(0,0,[time,1])
// } else if(time> list[n-1][0]){
//     list.push([time,1])
// }else{
//     //BS
//     let left=0
//     let right=n-1
//      let mid=Math.floor((left+right)/2)
//     while(l<r){
//      if(list[mid][0]===time){
//          list[mid][1]++
//          return
//      }else if(list[mid][0]>time){
//          r=mid-1
//      }else{
//          l=mid+1
//      } 
//      }
//     list.splice(l,0,[time,1])
//     return
//     } 
}