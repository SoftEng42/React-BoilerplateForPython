import { Reducer } from 'redux';
import { LOGIN_SUCCESS, LOGOUT, initialState } from './User.constants';
import { UserAction, UserState } from './User.types';

export const userReducer: Reducer<UserState, UserAction> = (
  state: UserState = initialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const user = action.payload ? action.payload.user : undefined;
      return { ...state, user: user };
    case LOGOUT:
      return { ...state, user: undefined };
  }
  return { ...state };
};
