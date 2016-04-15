import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import immutablejs from 'redux-storage-decorator-immutablejs';
import * as storage from 'redux-storage';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const router = routerMiddleware(browserHistory);

const reducer = storage.reducer(rootReducer);

import createEngine from 'redux-storage-engine-localstorage';
let engine = createEngine('unicorn-shop');
engine = immutablejs(engine, [
  ['cart'],
]);


const storeMiddleware = storage.createMiddleware(engine);


/**
 * Creates a preconfigured store.
 */
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
  load(store);

  // Notice that our load function will return a promise that can also be used
  // to respond to the restore event.
  load(store)
      .then((newState) => console.log('Loaded state:', newState))
      .catch(() => console.log('Failed to load previous state'));


  return store;
}
