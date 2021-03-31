import React, { Component } from 'react';

export default class Item extends Component {
	render() {
		const { item } = this.props;
		return (
			<div className="col-xs-6 col-sm-3" style={{backgrounColor: '#eee'}}> 
				{item.snackCount ?
					<div className="items-left bg-success ">Available items: {item.snackCount}</div> :
					<div className="items-left bg-danger ">Out of stock</div>
				}
				<img className="img-responsive center-block img-max-150" src={item.imgUrl} alt=".." />
				<div className="item bg-warning ">{item.snackName}</div>
				<div className="item-price bg-info ">Price: ${item.snackPrice}</div>
				<div className="item-index bg-secondary">{item.snackId}</div>

			</div>
		)
	}
}

// Item.propTypes = {
//   item: React.PropTypes.object,
//   i: React.PropTypes.number
// }