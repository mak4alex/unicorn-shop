import { push } from 'react-router-redux';

export function redirect(path = '/') {
  return (dispatch) => dispatch(push(path));
};
