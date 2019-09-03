import { User, Credentials } from "./User.types";
import { Api } from "../../services/api";

const API_ROUTES = {
  LOGIN: '/api-auth/login/',
  LOGOUT: '/api-auth/logout',
  RESET_PASSWORD: '/api-auth/password',
};

export async function makeLoginRequest(credentials: Credentials): Promise<User> {
  await Api().post(API_ROUTES.LOGIN, credentials);
  return { username: credentials.username }
}

export async function makeLogoutRequest() {
  await Api().post(API_ROUTES.LOGOUT);
  return;
}
export async function makeForgotPasswordRequest(email: String) {
  return Api().post(API_ROUTES.RESET_PASSWORD);
}

export function makeResetPasswordRequest(password: String, token: String) {
  return;
}
