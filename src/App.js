import { Component } from 'react';
import ItemList from './Components/ItemList'
import KeyPad from './Components/KeyPad'
import {MrVendor} from './SnackMachine/SnackMachine'
import {snacks,coins} from './SnackMachine/data'

import logo from './images/logo.png'
import './css/bootstrap.min.css'
import './css/App.css';

const Vendor = new MrVendor(snacks,100,coins);
const App =()=> {

    return (
    <div className="App">
      <div className="container">

        <nav class="navbar navbar-light bg-light">
          <img className="rounded  float-left" src={logo} alt="mr vending logo" title="MrVending" height="100" />
          <h1 className="text-center">Vending machine app</h1>
          <img className="rounded  float-right" src={logo} alt="mr vending logo" title="MrVending" height="100" />
        </nav>
        <ItemList items={Vendor.snacks}/>
      
      </div>
    </div>);
  
}

export default App