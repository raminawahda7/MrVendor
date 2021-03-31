import React, { Children, Component } from 'react';
import CashScreen from './CashScreen'
const KeyPad = ({ coins, setMoneyAmount, children,moneyAmount }) => {

	// const {coins, addValue, children} = this.props;
	// const coins =  [0.1, 0.2, 0.5, 1];

	const buttons = coins.map((item, i) => {
		const handleClick = (value) => {
			// parseFloat to solve 0.1 + 0.2 = 0.30000000000000004 (floating point)
			setMoneyAmount(parseFloat((moneyAmount+value).toFixed(2)))
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