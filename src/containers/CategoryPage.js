import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Category from '../components/Category';
import { fetchProducts } from '../actions/product';
import { addProductToCart } from '../actions/cart';
import { fetchCategory } from '../actions/category';


function mapStateToProps(state) {
  return {
    products: state.product,
    category: state.category,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchProducts,
      addProductToCart,
      fetchCategory,
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Category);
