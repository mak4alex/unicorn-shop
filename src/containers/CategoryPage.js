import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Category from '../components/Category';
import { fetchProducts } from '../actions/product';
import { addToCart } from '../actions/cart';

function mapStateToProps(state) {
  return {
    products: state.product,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchProducts,
      addToCart,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
