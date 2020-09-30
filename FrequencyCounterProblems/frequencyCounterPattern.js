//given 2 arrays, valuate if array2 has the same values as array1, but squared

//instead of using nested for loop, create 2 obj, storing num as the key and frquency as the value
//O(n) linear time

function frequencyCounter(ar1,ar2){

  if( ar1.length !== ar2.length) return false


  let obj1={}
  let obj2={}

  for(let num of ar1){
    obj1[num] = (obj1[num] || 0) +1
  }
  for(let num of ar2){
    obj2[num] = (obj2[num] || 0) +1
  }

  for(let key in obj1){
    if(!(key**2 in obj2) ){
      return false
    }
    if(obj2[key**2] !== obj1[key]){
      return false
    }
  }
  console.log(true)
return true

}

frequencyCounter([1,4,3], [9,16,4])