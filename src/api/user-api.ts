import { BaseAPI } from 'src/utils/base-api';

const USER_API_PATH = '/user';
const USER_CHANGE_PROFILE_API_PATH = '/profile';
const USER_CHANGE_AVATAR_API_PATH = '/profile/avatar';
const USER_CHANGE_PASSWORD_API_PATH = '/password';
const USER_INFO_API_PATH = '/';
const USER_SEARCH_API_PATH = '/search';

export class UserAPI extends BaseAPI {
  constructor() {
    super(USER_API_PATH);
  }

  changeProfile(data: any) {
    return this.http.put(USER_CHANGE_PROFILE_API_PATH, data);
  }

  changeAvatar(data: any) {
    return this.http.put(USER_CHANGE_AVATAR_API_PATH, data);
  }

  changePassword(data: any) {
    return this.http.put(USER_CHANGE_PASSWORD_API_PATH, data);
  }

  getUser(data: any) {
    return this.http.get(USER_INFO_API_PATH, data);
  }

  searchUser(data: any) {
    return this.http.post(USER_SEARCH_API_PATH, data);
  }

  request() {}
}

export default new UserAPI();
