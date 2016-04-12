import { fromJS, Map, List } from 'immutable';
import { GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS } from '../constants';


const initialState = fromJS({
	entities: [],
	isFetching: false
});


export default function category(state = initialState, action) {

  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return state.set('isFetching', true);
    case GET_CATEGORY_SUCCESS:
      return state.set('isFetching', false).set('entities', List(action.categories));
    default:
      return state;
  }
}
