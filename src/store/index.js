import configureStore from './configureStore';
import { configure } from 'redux-auth';
import { API_URL } from './../constants';


const store = configureStore();


store.dispatch(configure(
  {
    apiUrl: API_URL,
    signOutPath: '/user/sign_out',
    emailSignInPath: '/user/sign_in',
    emailRegistrationPath: '/user',
  }
)).then(() => {
  // your store should now have the current user. now render your
  // app to the DOM. see the demo app for a more complete example.
});

export default store;
