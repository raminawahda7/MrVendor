const coins =  [50, 20, 1, 0.5, 0.2, 0.1];


export const getCoins = (inputAmount, availableCoins) => {
  let coinsToReturn = []; // create coins to return array

  // loop through as long as the inputAmount is bigger than 0
  while (inputAmount > 0) {

    // loop through the coins array
    for (let coin of coins) {

      // if the current coin from the coins array is smaller or as large as the inputAmount
      if (coin <= inputAmount) {
        inputAmount = inputAmount - coin; // substract coin from inputAmount
        inputAmount = inputAmount.toFixed(2);
        coinsToReturn.push(coin); // push the coin to the return array
        break;
      }
    }
  }
  // return coinsToReturn.join(", ");   // return the coinsToReturn array as a string
  return coinsToReturn;
}


console.log(getCoins(102.5, coins)); 
