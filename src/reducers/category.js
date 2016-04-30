import { fromJS, Map, List } from 'immutable';
import {
  GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, GET_CATEGORY_ERROR,
  GET_MENU_CATEGORY_REQUEST, GET_MENU_CATEGORY_SUCCESS, GET_MENU_CATEGORY_ERROR,
  CLEAR_ERROR_MESSAGE,
} from '../constants';


const initialState = fromJS({
  menuCategories: [],
  isFetchingMenu: false,
  current: {},
  isFetchingCurrent: false,
  isError: false,
  errorMessage: {},
});


export default function category(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return state.set('isFetchingCurrent', true);
    case GET_CATEGORY_SUCCESS:
      return state.set('isFetchingCurrent', false).set('current', action.category);
    case GET_MENU_CATEGORY_REQUEST:
      return state.set('isFetchingMenu', true);
    case GET_MENU_CATEGORY_SUCCESS:
      return state.set('isFetchingMenu', false).set('menuCategories', List(action.categories));
    case GET_CATEGORY_ERROR:
    case GET_MENU_CATEGORY_ERROR:
      return state.set('isError', true).set('errorMessage', action.error);
    case CLEAR_ERROR_MESSAGE:
      return state.set('isError', false).set('errorMessage', {});
    default:
      return state;
  }
}
