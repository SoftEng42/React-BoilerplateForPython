import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { LoginRequestAction, User, ResetPasswordAction, ForgotPasswordAction } from './User.types';
import { LOGIN_REQUEST, LOGOUT, RESET_PASSWORD, FORGOT_PASSWORD } from './User.constants';
import { makeLoginRequest, makeLogoutRequest, makeResetPasswordRequest, makeForgotPasswordRequest } from './User.api';
import { loginSuccess } from './User.actions';
import { ROUTE } from '../Router/Router.routes';

export function* loginRequest(action: LoginRequestAction): SagaIterator {
  try {
    const user: User = yield call(makeLoginRequest, action.payload.credentials);
    console.info('You have been successfully logged in!');
    yield put(loginSuccess(user));
    yield put(push(ROUTE.HOME));
  } catch (error) {
    console.error('You could not be logged in...');
  }
}

export function* logoutRequest(): SagaIterator {
  try {
    yield call(makeLogoutRequest);
    console.info('You have been successfully logged out!');
    yield put(push(ROUTE.LOGIN));
  } catch (error) {
    console.error('Something went wrong during the logout');
  }
}

export function* resetPassword(action: ResetPasswordAction): SagaIterator {
  try {
    yield call(makeResetPasswordRequest, action.payload.password, action.payload.token);
    console.info('Password successfully changed');
    yield put(push(ROUTE.LOGIN));
  } catch (error) {
    console.error('Something went wrong during the password reset');
  }
}

export function* forgotPassword(action: ForgotPasswordAction): SagaIterator {
  try {
    yield call(makeForgotPasswordRequest, action.payload.email);
    console.info('An email was sent');
    yield put(push(ROUTE.LOGIN));
  } catch (error) {
    console.error('Something went wrong... The provided email might not exist.');
  }
}

export function* userSaga(): SagaIterator {
  yield takeEvery(LOGIN_REQUEST, loginRequest);
  yield takeEvery(LOGOUT, logoutRequest);
  yield takeLatest(RESET_PASSWORD, resetPassword);
  yield takeLatest(FORGOT_PASSWORD, forgotPassword);
}
