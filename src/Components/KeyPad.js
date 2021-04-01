import React, { Component } from 'react';

const KeyPad = ({setindexItem,indexItem }) => {

	const number =  [1,2,3,4,5];

	const buttons = number.map((item, i) => {
		const handleClick = (value) => { 
			let indexArr = [...indexItem]
			indexArr.push(value)
			if (indexArr.length > 2) {
			  setindexItem('')
			
			  return;
			}
			indexArr = indexArr.join('')
	
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
			<div className="coins">{buttons}</div>
		</div>
	)

}


export default KeyPad;