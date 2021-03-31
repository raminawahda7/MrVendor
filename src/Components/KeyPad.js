import React, { Children, Component } from 'react';
import CashScreen from './CashScreen'
const KeyPad = ({setindexItem, children,indexItem }) => {

	// const {coins, addValue, children} = this.props;
	const number =  [1,2,3,4,5];

	const buttons = number.map((item, i) => {
		const handleClick = (value) => { 
			let indexArr = []
			indexArr.push(value)
			console.log('---------',indexArr);
			if (indexArr.length > 2) {
			  setindexItem('')
			  return;
			}
			indexArr = indexArr.join()
			// setindexItem(indexArr)
			setindexItem(indexArr)
		}
		return (
			<button key={i} className="btn btn-secondary" style={{margin:'2px'}} value={item} onClick={()=> handleClick(item)}>
				 {item}
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