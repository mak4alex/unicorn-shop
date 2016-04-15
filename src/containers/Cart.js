import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import * as Actions from './../actions/cart';


function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
