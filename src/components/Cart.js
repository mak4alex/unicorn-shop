import React, { Component } from 'react';


export default class Cart extends Component {
  render() {
    const lineItems = this.props.cart.get('lineItems');




    return (
      <div>
        <h3>Cart</h3>
        <div>
          {
            lineItems.map((lineItem, i) => {
              return (<p key={i}>{lineItem.getIn(['product', 'title'])} { ' x ' }
                        {lineItem.get('count')}</p>);
            })
          }
        </div>
      </div>
    );
  }
}