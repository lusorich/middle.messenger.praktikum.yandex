import { set } from 'src/helpers/set';
import EventBus from './event-bus';

export enum StoreEvents {
  Updated = 'updated',
}

export const enum ACTIONS {
  'ADD_CHAT',
  'SET_CHATS',
  'DELETE_CHAT',
  'ADD_CHAT_TOKEN',
  'ADD_MESSAGES',
  'DELETE_ACTIVE_CHAT_ID',
}
export class Store extends EventBus {
  private state: any = {};

  static __instance: Store;

  constructor() {
    super();

    if (Store.__instance) {
      return Store.__instance;
    }

    const lsStore = localStorage.getItem('store') ?? '{}';

    this.state = JSON.parse(lsStore);

    Store.__instance = this;
  }

  public set(keypath: string, data: unknown) {
    set(this.state, keypath, data);

    localStorage.setItem('store', JSON.stringify(this.state));

    this.emit(StoreEvents.Updated, this.getState());
  }

  public dispatch(action: ACTIONS, data: any) {
    switch (action) {
      case ACTIONS.ADD_CHAT: {
        if (!this.state?.chats?.list) {
          set(this.state, 'chats.list', []);
        }

        this.state.chats.list.push(data);

        localStorage.setItem('store', JSON.stringify(this.state));
        this.emit(StoreEvents.Updated, this.getState());

        break;
      }
      case ACTIONS.SET_CHATS: {
        set(this.state, 'chats.list', data);

        localStorage.setItem('store', JSON.stringify(this.state));
        this.emit(StoreEvents.Updated, this.getState());

        break;
      }
      case ACTIONS.DELETE_CHAT: {
        this.state.chats.list = this.state.chats.list.filter(
          (item: any) => item.id !== data,
        );

        localStorage.setItem('store', JSON.stringify(this.state));
        this.emit(StoreEvents.Updated, this.getState());

        break;
      }
      case ACTIONS.ADD_CHAT_TOKEN: {
        if (!this.state.chats.chatTokens) {
          set(this.state, 'chats.chatTokens', {});
        }

        this.state.chats.chatTokens[data.chatId] = data.token;

        localStorage.setItem('store', JSON.stringify(this.state));
        this.emit(StoreEvents.Updated, this.getState());

        break;
      }
      case ACTIONS.ADD_MESSAGES: {
        if (!this.state.chats.messages?.[data.chatId]) {
          set(this.state, `chats.messages.${data.chatId}`, []);
        }

        if (Array.isArray(data?.messages)) {
          data?.messages.forEach((message: Record<string, unknown>) => {
            if (!this.state.chats.messages[data.chatId].includes(message.id)) {
              this.state.chats.messages[data.chatId].push(message);
            }
          });
        } else {
          this.state.chats.messages[data.chatId].push(data.messages);
        }

        localStorage.setItem('store', JSON.stringify(this.state));
        this.emit(StoreEvents.Updated, this.getState());

        break;
      }
      case ACTIONS.DELETE_ACTIVE_CHAT_ID: {
        set(this.state, 'chats.activeChatId', '');

        this.emit(StoreEvents.Updated, this.getState());

        break;
      }
      default:
        return '';
    }
  }

  public getState() {
    return this.state;
  }
}

export const store = new Store();
