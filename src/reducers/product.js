import { fromJS, Map, List } from 'immutable';
import { GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from '../constants';


const initialState = fromJS({
	entities: [],
	isFetching: false,
  meta: {},
});


export default function product(state = initialState, action) {

  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return state.set('isFetching', true);
    case GET_PRODUCT_SUCCESS:
      return state.set('isFetching', false)
                  .set('entities', List(action.entities))
                  .set('meta', Map(action.meta));
    default:
      return state;
  }

};
