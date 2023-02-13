import { BaseAPI } from 'src/utils/base-api';

const AUTH_API_PATH = '/auth';
const AUTH_SIGNIN_API_PATH = '/signin';
const AUTH_SIGNUP_API_PATH = '/signup';
const AUTH_USER_INFO_API_PATH = '/user';
const AUTH_USER_LOGOUT_API_PATH = '/logout';

export class AuthAPI extends BaseAPI {
  constructor() {
    super(AUTH_API_PATH);
  }

  signin(data: any) {
    return this.http.post(AUTH_SIGNIN_API_PATH, data);
  }

  signup(data: any) {
    return this.http.post(AUTH_SIGNUP_API_PATH, data);
  }

  userInfo() {
    return this.http.get(AUTH_USER_INFO_API_PATH);
  }

  logout() {
    return this.http.post(AUTH_USER_LOGOUT_API_PATH);
  }

  request() {}
}
