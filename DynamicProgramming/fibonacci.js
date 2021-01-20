//recursive
function fib(n){
  if(n<=2){
    return 1
  }

  return fib(n-1)+fib(n-2)
}


//memoization and top-down
function fib(n, memo=[undefined,1,1]){

  if(memo[n] !== undefined){
    return memo[n]
  } 

  let result= fib(n-1,memo) +fib(n-2,memo)
  memo[n]= result
return result

}

//in a class structure
class Fibber{
  constructor(){
    this.memo={}
  }
  fib(n){

    if(n<0){
      throw new Error("can't be negative")
    }
    if(n<=2){
      return n
    }
    if(this.memo.hasOwnProperty(n)){
      return this.memo[n]
    }
 
    let result= this.fib(n-1)+this.fib(n-2)
    this.memo[n]=result

    return result
  }
}


//Tabulation and bottom-up, start of fib(2)and work up to fib(n). takes up less space 
function fib(n){
if(n<=2){
  return 1
}
let fibNums=[0,1,1]
for(let i=3; i<=n; i++){
fibNums[i]=fibNums[i-1]+fibNums[i-2]
}
return fibNums[n]


//iteravely- O(n)
const fib = (n)=>{
 let result=[0,1]

 for(let i=2; i<=n; i++){
   result.push(result[i-1]+result[i-2])
 }
 return result[n]
}

//recursivly- O(2^n)
const fib = (n)=>{
  if(n<=2){
    return 1
  }
  return fib(n-1)+fib(n-2)
 }




//recursivly with memo- O(n), because each node is only called one
const fib = (n, memo=[undefined,1,1])=>{
if(memo[n] !== undefined){
  return memo[n]
}else{
let result=fib(n-1,memo)+fib(n-2,memo)
memo[n]=result
return result
}

}


//iteravelly O(n)
function fib(n){
  let arr=[0,1,1]

  for(let i=3; i<=n;i++){
      arr.push(arr[i-1]+arr[i-2])
  }
  return arr[n]
}


//recursivly- O(2^n)
function fib(n){
if(n<=2){
  return 1
}
return fib(n-1)+fib(n-2)
}



//memo O(n)
function fib(n,memo=[undefined,1,1]){
  if(memo[n]){
    return memo[n]
  }
  
  else{
    let result= fib(n-1,memo)+fib(n-2,memo)
    memo[n]=result
    return result
  }
}

function memo(func){
  let cache={}
  return function (n) {
    if(cache[n]){
      return cache[n]
    }else{
      let result = func(n)
      cache[n]=result
      return result
    }
  }
}

let memo10=memo(fib)
console.log(memo10(10))