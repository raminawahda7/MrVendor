import React, { Children, Component } from 'react';

 const KeyPad = ({setValue,children})=> {
	
		// const {coins, addValue, children} = this.props;
		const coins =  [0.10, 0.20, 0.50, 1];
		const money=10;
		const buttons = coins.map((item, i) => { 
			return (
						<button key={i} className="btn btn-warning btn-warning--coins" value={item}>
							{item < 1 ? `${item}💲` : `💲${item}`}
						</button>	
					)
				} 
			)
		return (
			<div className="row text-center p-relative">
			  <h3>Coins:</h3>
		  	<div className="coins">{buttons}</div>
		  	<h3>Money in the safe :</h3>
				{children}
			</div>
		)
	
}
	

export default KeyPad;