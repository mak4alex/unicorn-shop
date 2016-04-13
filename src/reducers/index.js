import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import category from './category';
import product from './product';


const rootReducer = combineReducers({
  category,
  product,
  routing,
});


export default rootReducer;
