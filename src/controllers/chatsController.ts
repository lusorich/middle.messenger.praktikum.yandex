import ChatsAPI from 'src/api/chats-api';
import {
  ChatAddUsersParams,
  ChatDeleteUsersParams,
  CreateChatBodyParams,
  DeleteChatBodyParams,
  GetChatsQueryParams,
} from 'src/api/chats-api.types';
import { ACTIONS, store } from 'src/utils/store';

export class ChatsController {
  private readonly api: typeof ChatsAPI;

  constructor() {
    this.api = ChatsAPI;
  }

  async createChat(payload: { data: CreateChatBodyParams }) {
    try {
      const res: any = await this.api.createChat(payload);

      if (res.status < 200 || res.status > 300) {
        throw new Error('Ошибка при попытке добавить чат');
      }

      this.getChats();
    } catch (e: any) {
      console.error(e);
    }
  }

  async getChats(payload?: { data?: GetChatsQueryParams }) {
    try {
      const res: any = await this.api.getChats(payload ?? { data: undefined });

      if (res.status < 200 || res.status > 300) {
        throw new Error('Ошибка при попытке добавить чат');
      }

      store.dispatch(ACTIONS.SET_CHATS, JSON.parse(res.response));
    } catch (e: any) {
      console.error(e);
    }
  }

  async deleteChat(payload: { data: DeleteChatBodyParams }) {
    try {
      const res: any = await this.api.deleteChat(payload);

      if (res.status < 200 || res.status > 300) {
        throw new Error('Ошибка при попытке удалить чат');
      }

      store.dispatch(ACTIONS.DELETE_CHAT, payload.data.chatId);
    } catch (e: any) {
      console.error(e);
    }
  }

  async addUserToChat(payload: { data: ChatAddUsersParams }) {
    try {
      const res: any = await this.api.addUsersToChat(payload);

      if (res.status < 200 || res.status > 300) {
        throw new Error('Ошибка при попытке добавить пользователя в чат');
      }
    } catch (e: any) {
      console.error(e);
    }
  }

  async removeUserFromChat(payload: { data: ChatDeleteUsersParams }) {
    try {
      const res: any = await this.api.removeUsersFromChat(payload);

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
