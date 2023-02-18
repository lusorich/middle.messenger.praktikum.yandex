import { set } from 'src/helpers/set';
import EventBus from './event-bus';

export enum StoreEvents {
  Updated = 'updated',
}

export const enum ACTIONS {
  'ADD_CHAT',
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

  public dispatch(action: ACTIONS, data: unknown) {
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
      default:
        return '';
    }
  }

  public getState() {
    return this.state;
  }
}

export const store = new Store();
