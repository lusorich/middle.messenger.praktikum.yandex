import ChatsAPI from 'src/api/chats-api';
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
    } catch (e: any) {
      console.error(e);
    }
  }

  async getChats(data: any) {
    try {
      const res: any = await this.api.getChats(data);

      if (res.status < 200 || res.status > 300) {
        throw new Error('Ошибка при попытке добавить чат');
      }

      store.dispatch(ACTIONS.SET_CHATS, JSON.parse(res.response));
    } catch (e: any) {
      console.error(e);
    }
  }
}

export default new ChatsController();
