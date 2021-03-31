import React, { Children, Component } from 'react';
import CashScreen from './CashScreen'
const KeyPad = ({ coins, setMoneyAmount, children,moneyAmount }) => {

	// const {coins, addValue, children} = this.props;
	// const coins =  [0.10, 0.20, 0.50, 1];
	const money = 10;
	const buttons = coins.map((item, i) => {
		const handleClick = (value) => { 
			setMoneyAmount(moneyAmount + value)
		}
		return (
			<button key={i} className="btn btn-warning btn-warning--coins" value={item} onClick={()=> handleClick(item)}>
				{item < 1 ? `${item}💲` : `💲${item}`}
			</button>
		)
	}
	)
	return (
		<div className="row text-center p-relative">
			{/* <h3>Coins:</h3> */}
			<div className="coins">{buttons}</div>
			{/* <h3>Money in the safe :</h3>
			{children} */}
		</div>
	)

}


export default KeyPad;