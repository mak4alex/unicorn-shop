import { API_URL, GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS,
         GET_CATEGORY_ERROR, GET_MENU_CATEGORY_REQUEST,
         GET_MENU_CATEGORY_SUCCESS, GET_MENU_CATEGORY_ERROR } from './../constants';
import fetch from 'isomorphic-fetch';


const getCategoryReq = () => {
  return {
    type: GET_CATEGORY_REQUEST,
  };
};

const getCategorySuc = (data) => {
  return {
    type: GET_CATEGORY_SUCCESS,
    category: data.category,
  };
};

const getCategoryErr = (err) => {
  return {
    type: GET_CATEGORY_ERROR,
    error: err,
  };
};

export const fetchCategory = ({ categoryId = 0 } = {}) => {
  return (dispatch) => {
    dispatch(getCategoryReq());

    return fetch(`${API_URL}/categories/${categoryId}`)
      .then((response) => {
        if (response.status >= 400) throw new Error("Bad response from server");        
        return response.json();
      })
      .then(data => dispatch(getCategorySuc(data)))
      .catch(err => dispatch(getCategoryErr(err)));
  };
};


const getMenuCategoryReq = () => {
  return {
    type: GET_MENU_CATEGORY_REQUEST,
  };
};

const getMenuCategorySuc = (data) => {
  return {
    type: GET_MENU_CATEGORY_SUCCESS,
    categories: data,
  };
};

const getMenuCategoryErr = (err) => {
  return {
    type: GET_MENU_CATEGORY_ERROR,
    error: err,
  };
};

export const fetchMenuCategory = () => {
  return (dispatch) => {
    dispatch(getMenuCategoryReq());

    return fetch(`${API_URL}/categories/menu`)
      .then((response) => {
        if (response.status >= 400) throw new Error('Bad response from server');
        return response.json();
      })
      .then(data => dispatch(getMenuCategorySuc(data)))
      .catch(err => dispatch(getMenuCategoryErr(err)));
  };
};



