const flat = (array)=>{
  let result=[]

const helper = (arr)=>{
for(let i=0; i<arr.length; i++){
  if(Array.isArray(arr[i])){
   helper(arr[i])
  }else{
    result.push(arr[i])
  }
}
}
helper(array)
return result
}

//space O(n)
//time O(n)
const flatten = (array)=>{
  let flatMap=[]
  for(let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
      flatMap=flatMap.concat(flatten(arr[i]))
    }else{
      flatMap.push(arr[i])
    }
  }
  return flatMap
}

flat([1,2,[2,3,[3],5],[7,[8]]])


//iterative flattening of array
function flatternIterativly(array){
  let arr=[...array]
  let stack=[arr.pop()]
  let result=[]

  while(stack.length >0){
    let elem=stack.pop()
if(Array.isArray(elem)){
  stack.push(...elem)
}else{
  result.push(elem)
}
if(stack.length ===0 && arr.length>0){
  stack.push(arr.pop())
}
  }
result.reverse()
  return result
}

function flattenWithReduce(arr){
let reduced= arr.reduce((acc, curr)=>{
if(Array.isArray(curr)){
    acc= acc.concat(flattenWithReduce(curr))
}else{
  acc.push(curr)

}

return acc

  },[])

  return reduced
}
flattenWithReduce([1,2,[2,3,[3],5],[7,[8]]])