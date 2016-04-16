import React, { Component } from 'react';


export default class Cart extends Component {

  constructor(props) {
    super(props);
    this.removeProductFromCart = this.removeProductFromCart.bind(this);
    this.changeCount = this.changeCount.bind(this);
  }

  removeProductFromCart(lineItem) {
    this.props.removeProductFromCart(lineItem.getIn(['product', 'id']));
  }

  changeCount(e, productId) {
    this.props.changeProductCount(productId, Number(e.target.value));
  }

  render() {
    const lineItems = this.props.cart.get('lineItems');

    return (
      <div>
        <h3>Cart</h3>
        <div>
          {
            lineItems.map((lineItem, i) => {
              const product = lineItem.get('product');

              return (
                <p key={i}>
                  {product.get('title')} { ' x ' }
                  <input type="number" min="1" step="1" value={lineItem.get('count')}
                    onChange={ (e) => this.changeCount(e, product.get('id')) } />
                  <button onClick={ (e) => this.removeProductFromCart(lineItem)}>
                    Delete
                  </button>
                </p>
              );
            })
          }
        </div>
      </div>
    );
  }
}
