import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART,
         CHANGE_PRODUCT_COUNT, CLEAR_CART } from './../constants';


export const addProductToCart = (product, count = 1) => {
  return dispatch => {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      product,
      count,
    });
  };
};

export const removeProductFromCart = (productId) => {
  return dispatch => {
    dispatch({
      type: REMOVE_PRODUCT_FROM_CART,
      productId,
    });
  };
};

export const clearCart = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_CART,
    });
  };
};

export const changeProductCount = (productId, count) => {
  return {
    type: CHANGE_PRODUCT_COUNT,
    productId,
    count,
  };
};
