import { EVENTS_T } from './component/component.types';
import { ValueOf } from './custom-utility-types';

type T_EVENTS = ValueOf<typeof EVENTS_T>;

class EventBus {
  private listeners: {
    [key in T_EVENTS]?: ((...args: any) => void)[];
  };

  constructor() {
    this.listeners = {};
  }

  _checkEventExist(event: T_EVENTS) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события ${event}`);
    }
  }

  on(event: T_EVENTS, callback: (...args: any) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event]?.push(callback);
  }

  off(event: T_EVENTS, callback: (args: any) => void) {
    this._checkEventExist(event);

    this.listeners[event] = this.listeners[event]?.filter(
      (listener) => listener !== callback,
    );
  }

  emit(event: T_EVENTS, ...args: any) {
    this._checkEventExist(event);

    this.listeners[event]?.forEach((cb) => cb(...args));
  }
}

export default EventBus;
