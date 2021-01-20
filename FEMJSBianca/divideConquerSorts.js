

  
//divide and conquer sorts
  // recursivly divide lists and sort the smaller parts of the list until list is sorted
    //merge sort- divide until it's sorted as lists of one, then merge each mini sorted list in a sorted way, final merge of the remaining 2 halves is the n in the nlogn time
      //a new array is created each time

  

      const mergeSort = function (arr){

        //base case when arr.length ==1
        if(arr.length ===1){
          return arr
        }else{
          let middle= Math.floor(arr.length/2)
          //break list in half and call merger sort on each half
          let lside = mergeSort(arr.slice(0,middle ))
          let rside = mergeSort(arr.slice(middle))
          return merge(lside,rside)

        }
      }

      const merge = function (lside,rside){
        let sortedArr=[]
        let lindex=0
        let rindex=0
     

        while(lindex < lside.length && rindex < rside.length){
            if(lside[lindex]<=rside[rindex]){
                     sortedArr.push(lside[lindex])
                     lindex++
            }else{
              sortedArr.push(rside[rindex])
              rindex++
            }
        }
        if(lindex === lside.length){
          while(rindex < rside.length)
          sortedArr.push(rside[rindex])
          rindex++
        }else{
          while(lindex < lside.length)
          sortedArr.push(lside[lindex])
          lindex++
        }
        return sortedArr.concat(lside.slice(lindex)).concat(rside.slice(rindex))
      }

      mergeSort([7,6,1,12])

    
      function mergeSort(arr){
        if(arr.legnth===1){
          return arr
        }else{
          let middle=Math.floor(arr.length/2)
          let left=mergeSort(arr.slice(0,middle))
          let right= mergeSort(arr.slice(middle))
          return merge(left,right)
        }
      }

      function merge(left,right){
        let sorted=[]
        let lIndex=0
        let rIndex=0

        while(lIndex <l.length && rIndex <r.length){
          if(left[lIndex]<=right[rIndex]){
            sorted.push(left[lIndex])
            lIndex++
          }else{
            sorted.push(right[rIndex])
            rIndex++
          }
        }
        if(lIndex ===l.length){
          while(rIndex <r.length){
            sorted.push(right[rIndex])
            rIndex++
          }
        }else{
          while(lIndex<l.length){
            sorted.push(left[lIndex])
            lIndex++
          }
        }

        return sorted
      }
      mergeSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8])

      // top-down implementation
function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return arr.concat(left.slice().concat(right.slice()));
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
mergeSort(array.slice());