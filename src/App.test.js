const coins =  [50, 20, 1, 0.5, 0.2, 0.1];

 const getCoins = (inputAmount, availableCoins) => {
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

class MrVendor {
  constructor(snacks, stock, coins) {
      this.snacks = snacks
      this.stock = stock
      this.coins = coins
      this.theRest = 0;
  }

  checkAvailabilty = (indexSnack) => (
     this.snacks.find(ele => ele.snackId == indexSnack)
  )

  updateQuantity = (indexSnack,quantity) => {
      let obj = this.checkAvailabilty(indexSnack)
      let index = this.snacks.indexOf(obj)
      this.snacks.fill(obj.snackCount=quantity,index,index++)
      return obj;
  }

  isMoneyValid = (money) => {
      let moneyAllowed = [0.1, 0.2, 0.5, 1, 20, 50];
      let isValid = false;
      moneyAllowed.forEach(element => {
          if (element === money) {
              isValid = true;
          }
          return isValid;
      });
  }

  giveMeSnack = (indexSnack, money) => {
      let snackReq = this.checkAvailabilty(indexSnack);
      console.log(snackReq);

      if (!snackReq.snackCount) {
          alert('Snack slot for this type is empty');
          // return 
      } else if (snackReq.snackPrice > money) {
          alert('Snack price is larger than what you inserted');
      }
      else {

          this.theRest = money - snackReq.snackPrice;
          let changes = getCoins(this.theRest,this.coins);
          return changes
      }
  }

  getStock(){
      return this.stock;
  }

  getChanges(moneyAmount){
      return getCoins(moneyAmount,this.coins)
  }
}


const snacks = [
  { snackId: '11', snackName: 'Coke', snackPrice: 2, snackCount: 0,},
  { snackId: '12', snackName: 'Twix', snackPrice: 2, snackCount: 5,},
  { snackId: '13', snackName: 'Chocolate', snackPrice: 3, snackCount: 5,},
  { snackId: '14', snackName: 'Doritos', snackPrice: 4, snackCount: 5,},
  { snackId: '15', snackName: 'Galaxy', snackPrice: 3, snackCount: 5,},


  { snackId: '21', snackName: 'Orio', snackPrice: 1, snackCount: 5,},
  { snackId: '22', snackName: 'Lays', snackPrice: 3, snackCount: 5,},
  { snackId: '23', snackName: 'Chips', snackPrice: 1, snackCount: 5,},
  { snackId: '24', snackName: 'Chips', snackPrice: 1, snackCount: 5,},
  { snackId: '25', snackName: 'Chips', snackPrice: 1, snackCount: 5,},
]

const Vendor = new MrVendor(snacks, 1000, coins);

test('Return availabilty of item', () => {
  expect(Vendor.checkAvailabilty("11")).toStrictEqual({ snackId: '11', snackName: 'Coke', snackPrice: 2, snackCount: 0, });
});

test('Update quantity for itemId given', () => {
  expect(Vendor.updateQuantity("22",32)).toStrictEqual({ snackId: '22', snackName: 'Lays', snackPrice: 3, snackCount: 32, });
});