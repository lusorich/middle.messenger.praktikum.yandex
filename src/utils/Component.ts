import EventBus from './Event-bus';
import { nanoid } from 'nanoid';

type Props = Record<string, any>;
type Children = Record<string, Component<{}>>;

abstract class Component<T extends {} = {}> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update',
  } as const;

  public id = nanoid(6);

  private _element?: HTMLElement;

  private eventBus: () => EventBus;

  protected children: Children = {};

  protected props: Props = {};

  constructor(protected propsWithChildren: T = {} as T) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this.props = this._makePropsProxy(props);
    this.children = children;

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Component.EVENTS.INIT);
  }

  _getChildrenAndProps(propsWithChildren: T) {
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

  _registerEvents(eventBus: EventBus) {
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

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Component.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate() {
    const response = this.componentDidUpdate();

    if (response) {
      this._render();
    }
  }

  componentDidUpdate() {
    return true;
  }

  setProps = (nextProps: {}) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const fragment = this.render();

    let actualElement = fragment.firstElementChild as HTMLElement;

    if (this._element && actualElement) {
      this._element.replaceWith(actualElement);
    }

    this._element = actualElement;
  }

  abstract render(): DocumentFragment;

  getContent() {
    return this._element;
  }

  _makePropsProxy(props: Record<string, any>) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const propsProxy = new Proxy(props, {
      get: (target, name: string) => {
        this._checkPrivateMethod(name);

        const value: any = target[name];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, name: string, value) => {
        this._checkPrivateMethod(name);

        target[name] = value;

        this.eventBus().emit(Component.EVENTS.FLOW_CDU);

        return true;
      },
      deleteProperty(target, name: string) {
        this._checkPrivateMethod(name);
        delete target[name];
      },
    });

    return propsProxy;
  }

  _checkPrivateMethod(name: string) {
    if (name.startsWith('_')) {
      throw new Error('Нет прав');
    }
    return true;
  }

  show() {
    if (this.element) this.element.style.display = 'block';
  }

  hide() {
    if (this.element) this.element.style.display = 'none';
  }

  protected compile(template: (context: any) => string, context: any) {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
    });

    const html = template(contextAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = html;

    Object.entries(this.children).forEach(([_, component]) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

      if (!stub) {
        return;
      }

      component.getContent()?.append(...Array.from(stub.childNodes));

      stub.replaceWith(component.getContent()!);
    });

    return temp.content;
  }
}

export default Component;
