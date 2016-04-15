import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART,
         CHANGE_PRODUCT_COUNT } from './../constants';


export const addProductToCart = (product, count = 1) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
    count,
  };
};

export const removeProductFromCart = (productId) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    productId,
  };
};

export const changeProductCount = (productId, count) => {
  return {
    type: CHANGE_PRODUCT_COUNT,
    productId,
    count,
  };
};


export const addToCart = (product, count) => {
  return dispatch => {
    dispatch(addProductToCart(product, count));
  };
};

