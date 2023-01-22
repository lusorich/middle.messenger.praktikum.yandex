import EventBus from "./Event-bus";

class Component {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update",
  } as const;

  private _element: HTMLElement | null = null;

  private _meta: {
    tagName: string;
    props: {};
  };

  private eventBus: () => EventBus;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(public tagName = "div", protected props = {}) {
    const eventBus = new EventBus();

    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Component.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  // Может переопределять пользователь, необязательно трогать
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

  // Может переопределять пользователь, необязательно трогать
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
    const User_component = this.render();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    if (this._element instanceof HTMLElement) {
      this._element.innerHTML = User_component;
    }
  }

  // Может переопределять пользователь, необязательно трогать
  render() {}

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: Record<string, any>) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const propsProxy = new Proxy(props, {
      get: (target, name: string) => {
        this._checkPrivateMethod(name);

        const value: any = target[name];
        return typeof value === "function" ? value.bind(target) : value;
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
    if (name.startsWith("_")) {
      throw new Error("Нет прав");
    }
    return true;
  }

  _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    if (this.element) this.element.style.display = "Component";
  }

  hide() {
    if (this.element) this.element.style.display = "none";
  }
}

export default Component;
