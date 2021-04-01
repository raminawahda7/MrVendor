import React, { Component } from 'react'
import Item from './Item'
import PropTypes from 'prop-types';

export default class ItemList extends Component {
	render() {
		const { items } = this.props;
		const allItems = items.map((item, i) => {
			return (
				<Item item={item} key={item.snackId} />
			)
		})
		return (
			<div className="row items-container">
				{allItems}
			</div>
		)
	}
}

ItemList.propTypes = {
  items: PropTypes.array,
}