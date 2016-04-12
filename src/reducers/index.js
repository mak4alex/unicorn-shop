import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import category from './category';


const rootReducer = combineReducers({
  category,
  routing,
});


export default rootReducer;
