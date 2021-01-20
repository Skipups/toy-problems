//make the locally optimal choice
//data set so large can't check all difference senarios. don't tknow if the locally optimal solution is the globally optimal solution this makes it not very good solution choice
// it just allows you to have a solution vs no solution
//hard to prove it's best solution

//write a function that makes change with the least amount of coins

//coin values 5,10,25

const greedyCoin = (coinArr, amount) =>{

  coinArr.sort((a,b)=> b-a)
  let coinCount=0
  let index=0
 

  while(0 !== amount){
if(coinArr[index]<=amount){
  amount -= coinArr[index]
  coinCount++
}else{
  index++
}
  }
  return coinCount
}

//using global cache

let cache={}

function gcoin(coinArr, amount){
  if(amount in cache) return cache[amount]

  let minCoins=-1

  coinArr.sort((a,b)=>b-a)

  coinArr.forEach(coin=> {
    if(amount-coin>= 0){
      amount -=coin
      minCoins++

    }
  })
}