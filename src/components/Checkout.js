import React, { Component } from 'react';
import CheckoutForm from './CheckoutForm';

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
        <h1>CheckoutPage</h1>
        <table>
          <thead>
            <tr>
              <th>#</th><th>Product</th><th>Price</th><th>Count</th><th>Sum Price</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            lineItems.map((lineItem, i) => {
              const product = lineItem.product;
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>
                    <input type="number" min="1" step="1" value={lineItem.count}
                      onChange={ (e) => this.changeCount(e, product.id) }
                    />
                  </td>
                  <td>{product.price * lineItem.count}</td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })
          }
          </tbody>
        </table>
        <p>Total: {total}$</p>
        <h3>Checkout Form</h3>
        <CheckoutForm prepareCart={this.prepareCart}
          postOrder={this.props.postOrder}
        />
      </div>
    );
  }
}
