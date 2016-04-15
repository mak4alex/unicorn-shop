import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import category from './category';
import product from './product';
import cart from './cart';

const rootReducer = combineReducers({
  category,
  product,
  cart,
  routing,
});

export default rootReducer;
