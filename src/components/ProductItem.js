import React, { Component } from 'react';

export default class ProductItem extends Component {

	render () {
		const { product } = this.props;

		return (
			<div>
				<h3>{product.title}</h3>
				<p>{product.description}</p>
				<p>{product.price}</p>
				<button onClick={(e) => {
					e.preventDefault();
					this.props.addToCart(product);
				}}>Add to cart</button>
			</div>
		);
	}
}
