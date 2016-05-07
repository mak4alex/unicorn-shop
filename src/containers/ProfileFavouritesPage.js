import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFavouriteProducts } from './../actions/favourite';
import { addProductToCart } from './../actions/cart';
import { ProductList } from './../components/ProductList';


class ProfileFavouritesPage extends Component {

  componentDidMount() {
    this.props.fetchFavouriteProducts();
  }

  render() {
    const products = this.props.favourite.get('products');
    const isFetching = this.props.favourite.get('isFetching');
    console.log(products);
    console.log(isFetching);

    return (
      <div>
        <div className="page-header">
          <h1>Favourite Products</h1>
        </div>
        
      </div>
    );
  }
}

//<ProductList addProductToCart={this.props.addProductToCart}
//          products={products} isFetching={isFetching}
//        />

function mapStateToProps(state) {
  return {
    favourite: state.favourite,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchFavouriteProducts,
    addProductToCart,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFavouritesPage);
