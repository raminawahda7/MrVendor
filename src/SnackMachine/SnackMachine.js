import {getCoins} from './Changes'

export class MrVendor {
    constructor(snacks, stock, coins) {
        this.snacks = snacks
        this.stock = stock
        this.coins = coins
        this.theRest = 0;
    }

    // this function to chick an item and return it
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
    // TODO: 1- check availability for snack
    //  2- after VM accept the money decrease the quantity for this item
    giveMeSnack = (indexSnack, money) => {
        let snackReq = this.checkAvailabilty(indexSnack);
        console.log(snackReq);

        // if (!this.isMoneyValid(money)) {
        //     return 'My Vending Machine Accept just 10c, 20c, 50c, 1$, 20$ and 50$'
        // }
        
        // compare between snackPrice and money
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
