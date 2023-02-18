import { BaseAPI } from 'src/utils/base-api';

const CHATS_API_PATH = '/chats';

const USER_CHANGE_AVATAR_API_PATH = '/profile/avatar';
const USER_CHANGE_PASSWORD_API_PATH = '/password';
const USER_INFO_API_PATH = '/';
const USER_SEARCH_API_PATH = '/search';

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

  request() {}
}

export default new ChatsAPI();
