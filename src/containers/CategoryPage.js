import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Category from '../components/Category';
import * as Actions from '../actions/product';

function mapStateToProps(state) {
  return {
    products: state.product,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
