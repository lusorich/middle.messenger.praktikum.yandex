import { set } from 'src/helpers/set';
import EventBus from './event-bus';

export enum StoreEvents {
  Updated = 'updated',
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

  public getState() {
    return this.state;
  }
}

export const store = new Store();
