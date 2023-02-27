import AuthAPI from 'src/api/auth-api';
import { AuthSignIn, AuthSignUp } from 'src/api/auth-api.types';
import { mainRouter } from 'src/app/app';
import { PAGE_PATHS } from 'src/app/app.constants';
import { ACTIONS, store } from 'src/utils/store';

export class AuthController {
  private readonly api: typeof AuthAPI;

  constructor() {
    this.api = AuthAPI;
  }

  async signin(payload: { data: AuthSignIn }) {
    try {
      const res: any = await this.api.signin(payload);

      if (res.status === 500) {
        return mainRouter.go(PAGE_PATHS.SERVER_ERROR);
      }

      if (
        (res.status < 200 || res.status > 300) &&
        JSON.parse(res.response)?.reason !== 'User already in system'
      ) {
        throw new Error('Ошибка при попытке входа');
      }

      const userInfo: { response: string } = (await this.api.userInfo()) as {
        response: string;
      };

      store.set('auth', {
        ...JSON.parse(userInfo.response),
        isSignin: true,
      });

      store.dispatch(ACTIONS.CLEAR_CHATS_STATE, {});

      mainRouter.go('/');
    } catch (e: any) {
      console.error(e);
    }
  }

  async signup(payload: { data: AuthSignUp }) {
    try {
      const res: any = await this.api.signup(payload);

      if (res.status < 200 || res.status > 300) {
        throw new Error('Ошибка при попытке зарегистрироваться');
      }

      const userInfo: { response: string } = (await this.api.userInfo()) as {
        response: string;
      };

      store.set('auth', {
        ...JSON.parse(userInfo.response),
        isSignin: true,
      });

      store.dispatch(ACTIONS.CLEAR_CHATS_STATE, {});

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

      mainRouter.go(PAGE_PATHS.SIGNIN);
    } catch (e: any) {
      console.error(e);
    }
  }
}

export default new AuthController();
