import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Checkout from './../components/Checkout';
import * as CartActions from './../actions/cart';
import * as OrderActions from './../actions/order';


function mapStateToProps(state) {
  return {
    cart: state.cart.toJS(),
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, CartActions, OrderActions), dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
