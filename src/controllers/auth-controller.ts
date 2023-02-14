import AuthAPI from 'src/api/auth-api';
import { mainRouter } from 'src/app/app';
import { store, StoreEvents } from 'src/utils/store';

store.on(StoreEvents.Updated, () => console.log('updated'));

export class AuthController {
  private readonly api: typeof AuthAPI;

  constructor() {
    this.api = AuthAPI;
  }

  async signin(data: any) {
    try {
      const res: any = await this.api.signin(data);

      if (res.status < 200 || res.status > 300) {
        throw new Error('Ошибка при попытке входа');
      }

      const userInfo: any = await this.api.userInfo();

      store.set('auth', {
        ...JSON.parse(userInfo.response),
        isSignin: true,
      });

      mainRouter.go('/');
    } catch (e: any) {
      console.error(e);
    }
  }

  async signup(data: any) {
    try {
      const res: any = await this.api.signup(data);

      if (res.status < 200 || res.status > 300) {
        throw new Error('Ошибка при попытке зарегистрироваться');
      }

      const userInfo: any = await this.api.userInfo();

      store.set('auth', {
        ...JSON.parse(userInfo.response),
        isSignin: true,
      });

      mainRouter.go('/');
    } catch (e: any) {
      console.error(e);
    }
  }

  async logout() {
    try {
      const res: any = await this.api.logout();

      if (res.status < 200 || res.status > 300) {
        throw new Error('Ошибка при попытке выйти из профиля');
      }

      store.set('auth', {
        id: '',
        isSignin: false,
      });

      mainRouter.go('/signin');
    } catch (e: any) {
      console.error(e);
    }
  }
}

export default new AuthController();
