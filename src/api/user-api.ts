import { BaseAPI } from 'src/utils/base-api';

const USER_API_PATH = '/user';
const USER_CHANGE_PROFILE_API_PATH = '/profile';
const USER_CHANGE_AVATAR_API_PATH = '/profile/avatar';
const USER_CHANGE_PASSWORD_API_PATH = '/password';
const USER_INFO_API_PATH = '/{id}';
const USER_SEARCH_API_PATH = '/search';

export class UserAPI extends BaseAPI {
  constructor() {
    super(USER_API_PATH);
  }

  changeProfile(data: any) {
    return this.http.put(USER_CHANGE_PROFILE_API_PATH, data);
  }

  // signup(data: any) {
  //   return this.http.post(AUTH_SIGNUP_API_PATH, data);
  // }

  // userInfo() {
  //   return this.http.get(AUTH_USER_INFO_API_PATH);
  // }

  // logout() {
  //   return this.http.post(AUTH_USER_LOGOUT_API_PATH);
  // }

  request() {}
}

export default new UserAPI();
