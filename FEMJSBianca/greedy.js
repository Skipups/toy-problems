//least number of coins that add up to an amount where teh amount is always divisible by 5

//greedy algo
function makeChange(coins, input) {
  coins.sort((a, b) => a - b);
  let i = 0;

  while (input > 0) {
    if (input > coins[i]) {
      input = input - coins[i];
      numCoins++;
    } else {
      i++;
    }
  }
  return numCoins;
}

//[10,6,1] 12

//make change with recursion, exponential time
function makeChange(coins, input) {
  //12
  let minCoins = -1;

  if (input === 0) {
    return 0;
  }
  coins.forEach((coin) => {
    //10
    if (input - coin >= 0) {
      //2
      let curMinCoin = makeChange(coins, input - coin);
      if (minCoins === -1 || minCoins > curMinCoin) {
        minCoin = curMinCoin;
      }
    }
  });
  return minCoins + 1;
}

//make change with dynamic programmingfunction makeChange(coins, input){ //12
