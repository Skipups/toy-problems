//write recursive factorial method
const factorial = function (n){

if(n<2){
  return 1
}else{
  return n*factorial(n-1)
}

}

//caching function

const memo= function (fn){

  let cache={}

  return (n)=>{
    if( n in cache){
      return cache[n]
    }else{
      let result = fn(n)
      cache[n]= result
      return result

    }
  }
}

const factorial10 = memo(
(n)=>{
  if(n<2){
    return 1
  }else{
    return n*factorial(n-1)
  }
}
  
  
)

//memoize your recursive factorial method above

let memo9 = memo(factorial)
memo9(9)

console.log(factorial10(10))