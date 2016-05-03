import React, { Component } from 'react';


export default class Checkout extends Component {

  render() {
    const { lineItems, changeCount } = this.props;

    return (
      <table className="table table-hover table-condensed">
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
                  <input type="number" min="1" step="1" max={product.quantity} value={lineItem.count}
                    onChange={ (e) => changeCount(e, product.id) }
                  />
                </td>
                <td>{product.price * lineItem.count}</td>
                <td>
                  <button className="btn btn-default">Delete</button>
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    );
  }
}
