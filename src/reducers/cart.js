import { fromJS, List } from 'immutable';
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART,
          CHANGE_PRODUCT_COUNT, CLEAR_CART } from './../constants';


const initialState = fromJS({
  lineItems: [],
  total: 0,
});

function updateTotal(state) {
  return state.get('lineItems').reduce((prev, curr) =>
    (prev + curr.get('count') * curr.getIn(['product', 'price'])), 0.0);
}

export default function cart(state = initialState, action) {
  let newState = null;
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      newState = state.updateIn(['lineItems'], lineItems => {
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
      return newState.set('total', updateTotal(newState));
    case CHANGE_PRODUCT_COUNT:
      newState = state.updateIn(['lineItems'], lineItems =>
        lineItems.map(lineItem => {
          if (lineItem.getIn(['product', 'id']) === action.productId) {
            return lineItem.set('count', action.count);
          }
          return lineItem;
        })
      );
      return newState.set('total', updateTotal(newState));
    case REMOVE_PRODUCT_FROM_CART:
      newState = state.updateIn(['lineItems'], lineItems =>
        lineItems.filter(lineItem =>
          lineItem.getIn(['product', 'id']) !== action.productId
        )
      );
      return newState.set('total', updateTotal(newState));
    case CLEAR_CART:
      newState = state.set('lineItems', List());
      return newState.set('total', updateTotal(newState));
    default:
      return state;
  }
}
