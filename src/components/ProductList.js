import React, { Component, PropTypes } from 'react';
import ProductItem from './ProductItem';


export default class ProductList extends Component {
  static propTypes = {};

  render() {
    const { products, isFetching, addProductToCart } = this.props;
    let template = null;

    if (isFetching) {
      template = (<h1>Loading...</h1>);
    } else {
      template = (
        <div>
          {
            products.map(product =>
              (<ProductItem key={product.id} product={product}
                addProductToCart={addProductToCart} />)
            )
          }
        </div>
      );
    }
    return template;
  }
}
