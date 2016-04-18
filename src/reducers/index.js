import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { authStateReducer } from 'redux-auth';
import Immutable from "immutable";
import category from './category';
import product from './product';
import cart from './cart';

const auth = (state = {}, action) => {
  return authStateReducer(Immutable.fromJS(state), action);
}

const rootReducer = combineReducers({
  auth,
  cart,
  category,
  product,
  routing,
});

export default rootReducer;
