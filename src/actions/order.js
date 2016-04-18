import { POST_ORDER_REQUEST, POST_ORDER_SUCCESS,
          POST_ORDER_ERROR, API_URL } from './../constants';
import fetch from 'isomorphic-fetch';


export const postOrderRequest = () => {
  return {
    type: POST_ORDER_REQUEST,
  };
};


export const postOrderSuccess = (order) => {
  return {
    type: POST_ORDER_SUCCESS,
    order,
  };
};


export const postOrderError = (error) => {
  return {
    type: POST_ORDER_ERROR,
    error,
  };
};


export const postOrder = (order) => {
  return (dispatch) => {
    dispatch(postOrderRequest());

    fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    })
    .then(response => response.json())
    .then(data => dispatch(postOrderSuccess(data.order)))
    .catch(exc => dispatch(postOrderError(exc)));
  };
};
