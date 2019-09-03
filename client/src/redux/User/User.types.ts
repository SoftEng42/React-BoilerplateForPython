import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, LOGOUT_AND_COME_BACK, RESET_PASSWORD, FORGOT_PASSWORD } from "./User.constants";

export interface Credentials {
  username: String
  password: String
}

export interface User {
  username: String
  firstName?: String
  lastName?: String
}

export interface UserState {
  user?: User
}

export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST
  payload: {
    credentials: Credentials
  }
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS
  payload: {
    user: User
  }
}

export interface LogoutAction {
  type: typeof LOGOUT
}

export interface LogoutAndComeBackAction {
  type: typeof LOGOUT_AND_COME_BACK
}

export interface ResetPasswordAction {
  type: typeof RESET_PASSWORD
  payload: {
    token: String,
    password: String
  }
}

export interface ForgotPasswordAction {
  type: typeof FORGOT_PASSWORD
  payload: {
    email: String
  }
}

export type UserAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LogoutAction
  | LogoutAndComeBackAction
  | ResetPasswordAction
  | ForgotPasswordAction
