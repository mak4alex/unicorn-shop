import { API_URL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS,
         GET_PRODUCT_ERROR } from './../constants';
import fetch from 'isomorphic-fetch';


export const getProductReq = () => {
  return {
    type: GET_PRODUCT_REQUEST,
  };
};

export const getProductSuc = (data) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    entities: data.products,
    meta: data.meta,
  };
};

export const getProductErr = (data) => {
  return {
    type: GET_PRODUCT_ERROR,
    error: data,
  };
};

export function fetchProducts({ categoryId = 1, page = 1 } = {}) {
  return function (dispatch) {
    console.log('fetchProducts');
    dispatch(getProductReq());

    return fetch(`${API_URL}/categories/${categoryId}/products?page=${page}`)
      .then( response => {
        if (response.status >= 400) throw new Error("Bad response from server");

        return response.json();
      })
      .then( data => {
          dispatch(getProductSuc(data));
      });
  };
};


