import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, RESET_PASSWORD, FORGOT_PASSWORD, LOGOUT_AND_COME_BACK } from './User.constants';
import {
  Credentials,
  LoginRequestAction,
  LoginSuccessAction,
  LogoutAction,
  ResetPasswordAction,
  ForgotPasswordAction,
  User,
  LogoutAndComeBackAction,
} from './User.types';

export const loginRequest = (credentials: Credentials): LoginRequestAction => ({
  type: LOGIN_REQUEST,
  payload: { credentials },
});

export const loginSuccess = (user: User): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: { user },
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});

export const logoutAndComeBack = (): LogoutAndComeBackAction => ({
  type: LOGOUT_AND_COME_BACK
})

export const resetPassword = (password: string, token: string): ResetPasswordAction => ({
  type: RESET_PASSWORD,
  payload: { password, token },
});

export const forgotPassword = (email: string): ForgotPasswordAction => ({
  type: FORGOT_PASSWORD,
  payload: { email },
});
