import { combineReducers } from 'redux'
import { routerReducer } from './Router/Router.reducer';

export const rootReducer = combineReducers({
  router: routerReducer
})