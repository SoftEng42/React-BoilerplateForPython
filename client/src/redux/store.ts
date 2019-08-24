import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers';
import { initialState } from './state';

import { routerMiddleware } from './Router/Router.middleware'

// Create a middleware for intercepting actions to execute sagas
const sagaMiddleware = createSagaMiddleware();

/* eslint-disable @typescript-eslint/no-explicit-any */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/* eslint-enable */
export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(routerMiddleware, sagaMiddleware)),
);
