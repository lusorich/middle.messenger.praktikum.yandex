import UserAPI from 'src/api/user-api';
import { mainRouter } from 'src/app/app';
import { PAGE_PATHS } from 'src/app/app.constants';
import { store } from 'src/utils/store';

export class UserController {
  private readonly api: typeof UserAPI;

  constructor() {
    this.api = UserAPI;
  }

  async changeProfile(data: any) {
    try {
      const res: any = await this.api.changeProfile(data);

      if (res.status < 200 || res.status > 300) {
        throw new Error('Ошибка при попытке изменения данных');
      }

      store.set('auth', {
        ...JSON.parse(res.response),
        isSignin: true,
      });

      mainRouter.go(PAGE_PATHS.SETTINGS);
    } catch (e: any) {
      console.error(e);
    }
  }

  async changePassword(data: any) {
    try {
      const res: any = await this.api.changePassword(data);

      if (res.status < 200 || res.status > 300) {
        throw new Error('Ошибка при попытке изменения пароля');
      }

      mainRouter.go(PAGE_PATHS.SETTINGS);
    } catch (e: any) {
      console.error(e);
    }
  }

  async changeAvatar(data: any) {
    try {
      const res: any = await this.api.changeAvatar(data);

      if (res.status < 200 || res.status > 300) {
        throw new Error('Ошибка при попытке изменения данных');
      }

      store.set('auth', {
        ...JSON.parse(res.response),
      });
    } catch (e: any) {
      console.error(e);
    }
  }
}

export default new UserController();
