import React, {Component} from 'react';

export default class Item extends Component {
	render(){
		const {item} = this.props;
		return (
			<div className="col-xs-6 col-sm-3">
				{item.snackCount ? 
					<div className="items-left bg-success text-success">Available items: {item.snackCount}</div> : 
					<div className="items-left bg-danger text-danger">Out of stock</div>
				}
	      <img className="img-responsive center-block img-max-150" src={item.imgUrl} alt=".." />
	      <div className="item bg-warning text-warning">{item.snackName}</div>
	      <div className="item-price bg-info text-info">Price: ${item.snackPrice}</div>
	    </div>
		)
	}
}

// Item.propTypes = {
//   item: React.PropTypes.object,
//   i: React.PropTypes.number
// }