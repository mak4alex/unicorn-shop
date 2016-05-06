import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import immutablejs from 'redux-storage-decorator-immutablejs';
import filter from 'redux-storage-decorator-filter';
import * as storage from 'redux-storage';
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART,
         CHANGE_PRODUCT_COUNT, CLEAR_CART, EMAIL_SIGN_IN_COMPLETE
         } from './../constants';
import createEngine from 'redux-storage-engine-localstorage';


const logger = createLogger({
  level: 'info',
  collapsed: true,
});


const router = routerMiddleware(browserHistory);
const reducer = storage.reducer(rootReducer);
let engine = createEngine('unicorn-shop');

engine = filter(engine, [
  ['cart'],
]);

engine = immutablejs(engine, [
  ['cart'],
]);


const storeMiddleware = storage.createMiddleware(engine, [],
  [ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART,
    CHANGE_PRODUCT_COUNT, CLEAR_CART, EMAIL_SIGN_IN_COMPLETE]);


export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk, storeMiddleware, router, logger),
      DevTools.instrument(),
      persistState(
        window.location.href.match(
          /[?&]debug_session=([^&]+)\b/
        )
      )
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  const load = storage.createLoader(engine);
  load(store)
      .then((newState) => console.log('Loaded state:', newState))
      .catch(() => console.log('Failed to load previous state'));


  return store;
}
