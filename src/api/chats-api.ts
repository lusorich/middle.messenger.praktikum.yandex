import { BaseAPI } from 'src/utils/base-api';
import {
  ChatAddUsersParams,
  ChatDeleteUsersParams,
  CreateChatBodyParams,
  DeleteChatBodyParams,
  GetChatsQueryParams,
} from './chats-api.types';

const CHATS_API_PATH = '/chats';
const CHATS_USERS_API_PATH = '/users';
const CHATS_TOKEN_API_PATH = '/token';

export class ChatsAPI extends BaseAPI {
  static __instance: ChatsAPI;

  constructor() {
    super(CHATS_API_PATH);

    if (ChatsAPI.__instance) {
      return ChatsAPI.__instance;
    }

    ChatsAPI.__instance = this;
  }

  createChat(payload: { data: CreateChatBodyParams }) {
    return this.http.post('', { data: JSON.stringify(payload.data) });
  }

  getChats(payload: { data?: GetChatsQueryParams }) {
    return this.http.get('', { data: JSON.stringify(payload?.data ?? '') });
  }

  getChatToken(id: string) {
    return this.http.post(`${CHATS_TOKEN_API_PATH}/${id}`);
  }

  deleteChat(payload: { data: DeleteChatBodyParams }) {
    return this.http.delete('', { data: JSON.stringify(payload.data) });
  }

  addUsersToChat(payload: { data: ChatAddUsersParams }) {
    return this.http.put(CHATS_USERS_API_PATH, {
      data: JSON.stringify(payload.data),
    });
  }

  removeUsersFromChat(payload: { data: ChatDeleteUsersParams }) {
    return this.http.delete(CHATS_USERS_API_PATH, {
      data: JSON.stringify(payload.data),
    });
  }

  request() {}
}

export default new ChatsAPI();
