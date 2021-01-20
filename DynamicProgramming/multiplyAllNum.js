//multiply al the numbers in the range 1...n
//top down
function product1ToN(n){

  return (n>1) ? (n*product1ToN(n-1)):1
}





///bottom-up
function product1ToN(n){

  let result=1
  for(let i=1; i<=n; i++){
result*=i
  }

  return result
}