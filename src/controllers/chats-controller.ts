import ChatsAPI from 'src/api/chats-api';
import { mainRouter } from 'src/app/app';
import { ACTIONS, store } from 'src/utils/store';

export class ChatsController {
  private readonly api: typeof ChatsAPI;

  constructor() {
    this.api = ChatsAPI;
  }

  async createChat(data: any) {
    try {
      const res: any = await this.api.createChat(data);

      if (res.status < 200 || res.status > 300) {
        throw new Error('Ошибка при попытке добавить чат');
      }

      store.dispatch(ACTIONS.ADD_CHAT, {
        ...JSON.parse(res.response),
      });
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

      mainRouter.go('/profile');
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

export default new ChatsController();
