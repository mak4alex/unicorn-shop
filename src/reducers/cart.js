import { fromJS } from 'immutable';
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART,
          CHANGE_PRODUCT_COUNT } from './../constants';


const initialState = fromJS({
  lineItems: [],
});

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return state.updateIn(['lineItems'], lineItems => {
        let isNew = true;
        let newlineItems = lineItems.map(lineItem => {
          if (lineItem.getIn(['product', 'id']) === action.product.id) {
            isNew = false;
            return lineItem.updateIn(['count'], count => count + action.count);
          }
          return lineItem;
        });
        if (isNew) {
          newlineItems = lineItems.push(fromJS({ product: action.product, count: action.count }));
        }
        return newlineItems;
      });
    case CHANGE_PRODUCT_COUNT:
      return state.get('lineItems').map(lineItem => {
        if (lineItem.product.id === action.productId) {
          lineItem.count.set(action.count);
        }
        return lineItem;
      });
    case REMOVE_PRODUCT_FROM_CART:
      return state.get('lineItems').filter(lineItem =>
        lineItem.product.id !== action.productId
      );
    default:
      return state;
  }
}
