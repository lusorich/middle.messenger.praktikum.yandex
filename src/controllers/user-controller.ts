import UserAPI from 'src/api/user-api';
import { mainRouter } from 'src/app/app';
import { store, StoreEvents } from 'src/utils/store';

store.on(StoreEvents.Updated, () => console.log('updated'));

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

      mainRouter.go('/profile');
    } catch (e: any) {
      console.error(e);
    }
  }
}

export default new UserController();
