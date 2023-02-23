import { BaseAPI } from 'src/utils/base-api';
import { AuthSignIn, AuthSignUp } from './auth-api.types';

const AUTH_API_PATH = '/auth';
const AUTH_SIGNIN_API_PATH = '/signin';
const AUTH_SIGNUP_API_PATH = '/signup';
const AUTH_USER_INFO_API_PATH = '/user';
const AUTH_USER_LOGOUT_API_PATH = '/logout';

export class AuthAPI extends BaseAPI {
  static __instance: AuthAPI;

  constructor() {
    super(AUTH_API_PATH);

    if (AuthAPI.__instance) {
      return AuthAPI.__instance;
    }

    AuthAPI.__instance = this;
  }

  signin(payload: { data: AuthSignIn }) {
    return this.http.post(AUTH_SIGNIN_API_PATH, {
      data: JSON.stringify(payload.data),
    });
  }

  signup(payload: { data: AuthSignUp }) {
    return this.http.post(AUTH_SIGNUP_API_PATH, {
      data: JSON.stringify(payload.data),
    });
  }

  userInfo() {
    return this.http.get(AUTH_USER_INFO_API_PATH);
  }

  logout() {
    return this.http.post(AUTH_USER_LOGOUT_API_PATH);
  }

  request() {}
}

export default new AuthAPI();
