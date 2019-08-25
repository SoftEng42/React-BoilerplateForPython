import { User, Credentials } from "./User.types";

export function makeLoginRequest({ username }: Credentials): User {
  return { 
    username: username,
  };
}

export function makeLogoutRequest() {
  return;
}
export function makeForgotPasswordRequest(email: String) {
  return;
}

export function makeResetPasswordRequest(password: String, token: String) {
  return;
}
