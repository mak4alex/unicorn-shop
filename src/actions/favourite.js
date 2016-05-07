import {
  GET_FAVOURITE_PRODUCTS_REQUEST, GET_FAVOURITE_PRODUCTS_SUCCESS,
  GET_FAVOURITE_PRODUCTS_ERROR, CLEAR_FAVOURITE_PRODUCTS, API_URL,
} from './../constants';
import { fetch } from 'redux-auth';


const getFavouriteProductsReq = () => (
  {
    type: GET_FAVOURITE_PRODUCTS_REQUEST,
  }
);

const getFavouriteProductsSuc = (payload) => (
  {
    type: GET_FAVOURITE_PRODUCTS_SUCCESS,
    payload,
  }
);

const getFavouriteProductsErr = (payload) => (
  {
    type: GET_FAVOURITE_PRODUCTS_ERROR,
    payload,
  }
);


export const clearFavouriteProducts = () =>
  (dispatch) =>
    dispatch({
      type: CLEAR_FAVOURITE_PRODUCTS,
    });


export const fetchFavouriteProducts = ({}) =>
  (dispatch) => {
    dispatch(getFavouriteProductsReq());
    return fetch(`${API_URL}/favourites/products?per_page=1000`)
      .then(res => res.json())
      .then(data => dispatch(getFavouriteProductsSuc(data)))
      .catch(err => dispatch(getFavouriteProductsErr(err)));
  };
