import React, { Component } from 'react';

export default class ProductItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.addProductToCart = this.addProductToCart.bind(this);
    this.changeCount = this.changeCount.bind(this);
  }

  addProductToCart(e) {
    e.preventDefault();
    this.props.addProductToCart(this.props.product, this.state.count);
    this.setState({ count: 1});
  }

  changeCount(e) {
    this.setState({ count: Number(e.target.value) });
  }

  render() {
    const { product } = this.props;

    return (
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>
          <input type="number" min="1" step="1" value={this.state.count}
            onChange={this.changeCount}
          />
          <button onClick={this.addProductToCart}>Add to cart</button>
        </p>
      </div>
    );
  }
}
