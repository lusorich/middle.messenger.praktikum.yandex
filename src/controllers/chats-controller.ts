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

  async deleteChat(data: any) {
    try {
      const res: any = await this.api.deleteChat(data);

      if (res.status < 200 || res.status > 300) {
        throw new Error('Ошибка при попытке удалить чат');
      }

      store.dispatch(ACTIONS.DELETE_CHAT, JSON.parse(data?.data).chatId);
    } catch (e: any) {
      console.error(e);
    }
  }

  async addUserToChat(data: any) {
    try {
      const res: any = await this.api.addUsersToChat(data);

      if (res.status < 200 || res.status > 300) {
        throw new Error('Ошибка при попытке добавить пользователя в чат');
      }
    } catch (e: any) {
      console.error(e);
    }
  }

  async removeUserFromChat(data: any) {
    try {
      const res: any = await this.api.removeUsersFromChat(data);

      if (res.status < 200 || res.status > 300) {
        throw new Error('Ошибка при попытке удалить пользователя из чата');
      }
    } catch (e: any) {
      console.error(e);
    }
  }

  async getChatToken(chatId: string) {
    try {
      const res: any = await this.api.getChatToken(chatId);

      if (res.status < 200 || res.status > 300) {
        throw new Error('Ошибка при попытке получить токен');
      }

      store.dispatch(ACTIONS.ADD_CHAT_TOKEN, {
        chatId,
        token: JSON.parse(res.response)?.token,
      });

      return JSON.parse(res.response)?.token;
    } catch (e: any) {
      console.error(e);
    }
  }
}

export default new ChatsController();
