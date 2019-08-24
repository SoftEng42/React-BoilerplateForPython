import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { routerReducer } from './Router/Router.reducer';
import { userReducer } from './User/User.reducers'

const persistUser = persistReducer({ key: 'userState', storage }, userReducer);

export const rootReducer = combineReducers({
  router: routerReducer,
  userState: persistUser,
})
