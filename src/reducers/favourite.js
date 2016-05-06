import { fromJS, List } from 'immutable';
import {
  GET_FAVOURITE_PRODUCTS_REQUEST, GET_FAVOURITE_PRODUCTS_SUCCESS,
  GET_FAVOURITE_PRODUCTS_ERROR, CLEAR_FAVOURITE_PRODUCTS,
} from './../constants';


const initialState = fromJS({
  products: [],
  isFetching: false,
});


export default function favourite(state = initialState, action) {
  switch (action.type) {
    case GET_FAVOURITE_PRODUCTS_REQUEST:
      return state.set('isFetching', true);
    case GET_FAVOURITE_PRODUCTS_SUCCESS:
      return state
        .set('isFetching', false)
        .set('products', List.of(action.payload));
    case GET_FAVOURITE_PRODUCTS_ERROR:
      return state
        .set('isFetching', false)
        .set('error', action.payload);
    case CLEAR_FAVOURITE_PRODUCTS:
      return state.set('products', List.of([]));
    default:
      return state;
  }
}
