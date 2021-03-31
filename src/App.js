import { Component, useState } from 'react';
import ItemList from './Components/ItemList'
import KeyPadCoins from './Components/KeyPadCoins'
import KeyPad from './Components/KeyPad'

import { MrVendor } from './SnackMachine/SnackMachine'
import { snacks, coins } from './SnackMachine/data'
// import CashScreen from './CashScreen'

import logo from './images/logo.png'
import './css/bootstrap.min.css'
import './css/App.css';

const Vendor = new MrVendor(snacks, 100, coins);
const App = () => {
  const [moneyAmount, setMoneyAmount] = useState(0)
  const [indexItem, setindexItem] = useState(0)

  const [index, setIndex] = useState('')
  const [item, setItem] = useState('')

  // const itemIndex = (value) => {
  //   let indexArr = []
  //   indexArr.push(value)
  //   if (indexArr.length > 2) {
  //     setIndex('')
  //     return;
  //   }
  //   indexArr = indexArr.join()
  //   setIndex(indexArr)

  // }


  const getItem = () => {
    if (index.length === 2) {

      setItem(Vendor.checkAvailabilty(index))
    }
  }

  return (
    <div className="App">
      <div className="container">

        <nav class="navbar navbar-light bg-light">
          <img className="rounded  float-left" src={logo} alt="mr vending logo" title="MrVending" height="100" />
          <h1 className="text-center">Vending machine app</h1>
          <img className="rounded  float-right" src={logo} alt="mr vending logo" title="MrVending" height="100" />
        </nav>

        <ItemList items={Vendor.snacks} />

        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column">
            <div class="p-2">  <h3>Coins:</h3></div>
            <div class="p-2">
              <KeyPadCoins coins={Vendor.coins} setMoneyAmount={setMoneyAmount} moneyAmount={moneyAmount} />
            </div>
            <div class=" result p-2">  {moneyAmount}</div>
              <div class=" result p-2">
              <button type="button" className="btn btn-danger" onClick={()=>  setMoneyAmount(0)}>Clear</button>
            </div>
          </div>

          <div class="d-flex flex-column">
            <div class="p-2">  <h3>Index Items:</h3></div>
            <div class="p-2">
              <KeyPad coins={Vendor.coins} setindexItem={setindexItem} indexItem={indexItem} />
            </div>
            <div class=" result p-2">  {indexItem}</div>
            <div class=" result p-2">
              <button type="button" className="btn btn-primary">Buy</button>
            </div>

          </div>

        </div>

      </div>

    </div>);

}

export default App