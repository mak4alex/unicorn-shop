import React, { Component } from 'react';
import CheckoutForm from './CheckoutForm';
import CheckoutTable from './CheckoutTable';

export default class Checkout extends Component {

  constructor(props) {
    super(props);
    this.changeCount = this.changeCount.bind(this);
    this.prepareCart = this.prepareCart.bind(this);
  }

  changeCount(e, productId) {
    this.props.changeProductCount(productId, Number(e.target.value));
  }

  prepareCart() {
    return {
      order: {
        total: this.props.cart.total,
        line_items: this.props.cart.lineItems.map(lineItem => {
          return { product_id: lineItem.product.id, quantity: lineItem.count };
        }),
      },
    };
  }

  render() {
    const { lineItems, total } = this.props.cart;

    return (
      <div>
        <div className="page-header">
          <h1>Checkout Order</h1>
        </div>
        <CheckoutTable lineItems={lineItems} changeCount={this.changeCount} />
        <div className="well text-center">
          <h3>Total: {total}$</h3>
        </div>
        <div>
          <h2>Checkout Form</h2>
          <CheckoutForm prepareCart={this.prepareCart} postOrder={this.props.postOrder} />
        </div>
      </div>
    );
  }
}
