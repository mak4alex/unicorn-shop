import React, { Component } from 'react';
import { Link } from 'react-router';


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
    const total = this.props.cart.get('total');

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Shopping Cart{' '}
            <span className="label label-default">{total}$</span>        
          </h3>
        </div>
        <div className="panel-body">          
          {
            lineItems.map((lineItem, i) => {
              const product = lineItem.get('product');

              return (
                <div key={i} className="row">
                  <div className="input-group">
                    <span className="input-group-addon">{product.get('title')}</span>
                    <input type="number" className="form-control" min="1" step="1" value={lineItem.get('count')}
                      onChange={ (e) => this.changeCount(e, product.get('id')) } 
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-default" onClick={(e) => this.removeProductFromCart(lineItem)}>
                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                      </button>
                    </span>
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="panel-footer">
          <div className="btn-group btn-group-justified" role="group">
            <div className="btn-group" role="group">
              <Link to={'/checkout'} className="btn btn-default">Checkout</Link>
            </div>
            <div className="btn-group" role="group">
              <button className="btn btn-default" onClick={this.props.clearCart}>Empty</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
