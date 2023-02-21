import { BaseAPI } from 'src/utils/base-api';

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

  createChat(data: any) {
    return this.http.post('', data);
  }

  getChats(data: any) {
    return this.http.get('', data);
  }

  getChatToken(id: string) {
    return this.http.post(`${CHATS_TOKEN_API_PATH}/${id}`);
  }

  deleteChat(data: any) {
    return this.http.delete('', data);
  }

  addUsersToChat(data: any) {
    return this.http.put(CHATS_USERS_API_PATH, data);
  }

  removeUsersFromChat(data: any) {
    return this.http.delete(CHATS_USERS_API_PATH, data);
  }

  request() {}
}

export default new ChatsAPI();
