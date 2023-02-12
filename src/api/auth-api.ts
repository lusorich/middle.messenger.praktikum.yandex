import { BaseAPI } from 'src/utils/base-api';

const AUTH_API_PATH = '/auth';
const AUTH_SIGNIN_API_PATH = '/signin';

export class AuthAPI extends BaseAPI {
  constructor() {
    super(AUTH_API_PATH);
  }

  signin(data: any) {
    return this.http.post(AUTH_SIGNIN_API_PATH, data);
  }

  request() {}
}
