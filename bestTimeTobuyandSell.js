// 121. Best Time to Buy and Sell Stock
// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), 
//design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.




const maxProfit= function (prices){
if(prices.length < 2) return null
let profit=0 // profit= price-lowest
let lowest=0
for (let i=0; i<=prices.length; i++){
let price=prices[i]
if(price<lowest){
  lowest=price
}else if( profit<(price-lowest)){
  profit=price-lowest
}
}
return profit
}





var maxProfit = function(prices) {
  let buy=Infinity
  let profit=0
  
  //[3,7,1,2]
  for(let i=0; i<prices.length; i++){
     if( buy>prices[i]){
       buy=prices[i]
     }else if(prices[i]-buy>profit){
       profit=prices[i]-buy
     }
    
  }
  return profit
};