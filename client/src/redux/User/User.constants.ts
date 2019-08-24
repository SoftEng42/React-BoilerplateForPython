import { UserState } from "./User.types";

export const LOGIN_REQUEST = 'User/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'User/LOGIN_SUCCESS';
export const LOGOUT = 'User/LOGOUT';
export const LOGOUT_AND_COME_BACK = 'User/LOGOUT_AND_COME_BACK';
export const RESET_PASSWORD = 'User/RESET_PASSWORD';
export const FORGOT_PASSWORD = 'User/FORGOT_PASSWORD';

export const initialState: UserState = {
  user: undefined,
}
