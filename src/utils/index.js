import store from './../store';


export const requireAuth = (nextState, transition, cb) => {
  setTimeout(() => {
    if (!store.getState().auth.getIn(['user', 'isSignedIn'])) {
      transition(null, '/login');
    }
    cb();
  }, 0);
};
