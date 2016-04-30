import React, { Component, PropTypes } from 'react';
import ProductItem from './ProductItem';


export default class ProductList extends Component {
  static propTypes = {};

  render() {
    const { products } = this.props;
  
    let template = null;
   
    if (products.get('isFetching')) {
      template = (<h1>Loading...</h1>);
    }
    else {
      template = (
        <div>     
          {
            products.get('entities').map(product => {
              return (<ProductItem key={product.id} product={product}
                        addProductToCart={this.props.addProductToCart} />);
            })
          }
        </div>
      );
    }

    return template;
  }
}
