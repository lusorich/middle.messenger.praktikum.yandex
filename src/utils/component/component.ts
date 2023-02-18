import { nanoid } from 'nanoid';
import EventBus from '../event-bus';
import { EVENTS_T } from './component.types';

export type Props = Record<string, any>;
export type Children = Record<string, Component<Record<string, unknown>>>;
abstract class Component<T extends Record<string, unknown>> {
  static EVENTS = EVENTS_T;

  public id = nanoid(6);

  private _element?: HTMLElement;

  protected state: Record<string, string | number> = {};

  private eventBus: () => EventBus;

  protected children: Children = {};

  public props: Props = {};

  constructor(protected propsWithChildren: T = {} as T) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this.props = this._makePropsProxy(props);
    this.state = this._makePropsProxy(this.state);

    this.children = children;

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Component.EVENTS.INIT);
  }

  private _getChildrenAndProps(propsWithChildren: T) {
    const props: Record<string, any> = {};
    const children: Record<string, Component<T>> = {};

    Object.entries(propsWithChildren).forEach(([key, value]) => {
      if (value instanceof Component) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props, children };
  }

  private _addEvents(events: Props) {
    for (const [event, cb] of Object.entries(events)) {
      this._element?.addEventListener(event, cb);
    }
  }

  private _removeEvents(events: Props): void {
    for (const [event, cb] of Object.entries(events)) {
      this._element?.removeEventListener(event, cb);
    }
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Component.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  private _init() {
    this.init();

    this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  private _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Component.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(prevProps: Props, nextProps: Props) {
    const response = this.componentDidUpdate(prevProps, nextProps);

    if (response) {
      this._render();
    }
  }

  protected componentDidUpdate(_prevProps: Props, _nextProps: Props) {
    return true;
  }

  setProps = (nextProps: Record<string, unknown>) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  setState = (nextState: Record<string, unknown>) => {
    if (!nextState) {
      return;
    }

    Object.assign(this.state, nextState);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const fragment = this.render();

    const actualElement = fragment.firstElementChild as HTMLElement;

    if (this._element && actualElement) {
      this._element.replaceWith(actualElement);
    }

    this._element = actualElement;

    if (!!this.props?.events) {
      this._removeEvents(this.props.events);
      this._addEvents(this.props.events);
    }
  }

  abstract render(): DocumentFragment;

  getContent() {
    return this._element;
  }

  private _makePropsProxy(props: Record<string, any>) {
    const propsProxy = new Proxy(props, {
      get: (target, name: string) => {
        this._checkPrivateMethod(name);

        const value: any = target[name];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, name: string, value) => {
        this._checkPrivateMethod(name);

        const prevTarget = { ...target };

        target[name] = value;

        this.eventBus().emit(Component.EVENTS.FLOW_CDU, prevTarget, target);

        return true;
      },
      deleteProperty: (target, name: string) => {
        this._checkPrivateMethod(name);
        delete target[name];
        return true;
      },
    });

    return propsProxy;
  }

  private _checkPrivateMethod(name: string) {
    if (name.startsWith('_')) {
      throw new Error('Нет прав');
    }
    return true;
  }

  show() {
    if (this.element) this.element.classList.remove('visually-hidden');
  }

  hide() {
    if (this.element) this.element.classList.add('visually-hidden');
  }

  protected compile(template: (context: any) => string, context: any) {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
    });

    const html = template(contextAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = html;

    const replaceStub = (component: Component<Record<string, unknown>>) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

      if (!stub) {
        return;
      }

      component.getContent()?.append(...Array.from(stub.childNodes));

      stub.replaceWith(component.getContent()!);
    };

    Object.entries(this.children).forEach(([_, component]) => {
      if (Array.isArray(component)) {
        component.forEach(replaceStub);
      } else {
        replaceStub(component);
      }
    });

    return temp.content;
  }
}

export default Component;
