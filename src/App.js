import { Component, useEffect, useState } from 'react';
import ItemList from './Components/ItemList'
import KeyPadCoins from './Components/KeyPadCoins'
import KeyPad from './Components/KeyPad'
import Item from './Components/Item'

import { MrVendor } from './SnackMachine/SnackMachine'
import { snacks, coins } from './SnackMachine/data'
// import CashScreen from './CashScreen'

import logo from './images/logo.png'
import './css/bootstrap.min.css'
import './css/App.css';

const Vendor = new MrVendor(snacks, 1000, coins);
const App = () => {
  const [moneyAmount, setMoneyAmount] = useState(0)
  const [indexItem, setindexItem] = useState([])

  const [counter, setCounter] = useState(0)

  const [index, setIndex] = useState([])

  const [item, setItem] = useState([])
  const [items, setItems] = useState(Vendor.snacks)

  const [changes, setChanges] = useState([])
  const changeCoin = () => {
    let changes = Vendor.getChanges(moneyAmount);
    setChanges(changes);
  }

  const buy = () => {
    if (!moneyAmount) {
      alert('please insert money')
      return
    }
   
    let change = Vendor.giveMeSnack(Number(indexItem), moneyAmount)
    setItem([...item, Vendor.checkAvailabilty(indexItem)])
    let gotItem = Vendor.checkAvailabilty(indexItem)
    if (!gotItem.snackCount) {
      return 
    }
    alert(`Snack is available -- Price :${gotItem.snackPrice}`)
    setMoneyAmount(moneyAmount - gotItem.snackPrice)
    //TODO:
    // setCounter(counter+1)
    // get the item again after each transaction
    // setItems(Vendor.snacks) 
    setChanges(change)
  }


  return (
    <div className="App">
      <div className="container">

        <nav class="navbar navbar-light bg-light">
          <img className="rounded  float-left" src={logo} alt="mr vending logo" title="MrVending" height="100" />
          <h1 className="text-center" style={{ fontFamily: 'Rajdhani' }}>Vending machine app</h1>
          <img className="rounded  float-right" src={logo} alt="mr vending logo" title="MrVending" height="100" />
        </nav>

        <ItemList items={items} />

        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
            <div className="p-2">  <h3>Coins:</h3></div>
            <div className="p-2">
              <KeyPadCoins coins={Vendor.coins} setMoneyAmount={setMoneyAmount} moneyAmount={moneyAmount} />
            </div>
            <div className=" result p-2">  {moneyAmount}</div>
            <div className=" result p-2">
              <button type="button" className="btn btn-danger ml-1" onClick={() => setMoneyAmount(0)}>Clear</button>
              <button type="button" className="btn btn-danger ml-1" onClick={() => changeCoin()}>Changes</button>
              <button type="button" className="btn btn-danger ml-1" onClick={() => { alert('Have a nice Snack'); setChanges([0]);setMoneyAmount(0); }}>Withdraw</button>


            </div>
          </div>

          <div className="d-flex flex-wrap result">
            {/*------------- CHANGES--------------- */}
            {changes?.map(ele => <div className="border border-primary rounded mt-3 ml-1" size="sm">{ele}</div>)}
          </div>

          <div className="d-flex flex-column">
            <div className="p-2">  <h3>Index Items:</h3></div>
            <div className="p-2">
              <KeyPad coins={Vendor.coins} setindexItem={setindexItem} indexItem={indexItem} />
            </div>
            <div className=" result p-2">{indexItem}</div>
            <div className=" result p-2">
              <button type="button" className="btn btn-primary" onClick={buy}>Buy</button>
            </div>

          </div>

        </div>

      </div>
      <div class="d-flex flex-wrap">
        {item?.map((item, i) => <Item item={item} key={i} />)}
      </div>
    </div>);

}

export default App