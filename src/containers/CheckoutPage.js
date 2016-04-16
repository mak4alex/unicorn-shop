import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions/cart';

class CheckoutPage extends Component {

  constructor(props) {
    super(props);
    this.changeCount = this.changeCount.bind(this);
  }

  changeCount(e, productId) {
    this.props.changeProductCount(productId, Number(e.target.value));
  }

  render() {
    const lineItems = this.props.cart.get('lineItems');

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
              const product = lineItem.get('product').toJS();
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>
                    <input type="number" min="1" step="1" value={lineItem.get('count')}
                    onChange={ (e) => this.changeCount(e, product.id) } />
                  </td>
                  <td>{product.price * lineItem.get('count')}</td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })
          }
          </tbody>
        </table>
        <p>Total: {this.props.cart.get('total')}$</p>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
