import React, {Component} from 'react';

const KeyPadCoins = ({ coins, setMoneyAmount, children,moneyAmount }) => {


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
			<div className="coins">{buttons}</div>
		</div>
	)

}


export default KeyPadCoins;