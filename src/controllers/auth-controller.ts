import { AuthAPI } from 'src/api/auth-api';

const API = new AuthAPI();

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: any) {
    try {
      await this.api.signin(data);

      // router.go('/profile');
    } catch (e: any) {
      console.error(e);
    }
  }
}

export default new AuthController();
