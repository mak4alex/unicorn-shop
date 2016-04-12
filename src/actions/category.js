import { API_URL, GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS,
         GET_CATEGORY_ERROR } from './../constants';
import fetch from 'isomorphic-fetch';


export const getCategoryReq = () => {
  return {
    type: GET_CATEGORY_REQUEST
  };
};

export const getCategorySuc = (data) => {
  return {
    type: GET_CATEGORY_SUCCESS,
    categories: data
  };
};

export const getCategoryErr = (data) => {
  return {
    type: GET_CATEGORY_ERROR,
    error: data
  };
};

export const fetchMenuCategory = () => {
  return function (dispatch) {
    dispatch(getCategoryReq());

    return fetch(`${API_URL}/categories/menu`)
      .then(function(response) {
        if (response.status >= 400) throw new Error("Bad response from server");
        
        return response.json();
      })
      .then(function(data) {        
          dispatch(getCategorySuc(data));
      });
  };
};


