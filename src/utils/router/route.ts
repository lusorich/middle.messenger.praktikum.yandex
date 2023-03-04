import Component from '../component/component';

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}

function rootRender(
  query: string,
  component: Component<Record<string, unknown>>,
) {
  const root = document.querySelector(query);

  if (root) {
    root!.innerHTML = '';
    root && root.appendChild(component.getContent() as Node);
  }

  return root;
}

export class Route {
  private _pathname: string;

  private _componentClass: new (props: Record<string, unknown>) => any;

  private _component: Component<Record<string, unknown>> | null;

  private _props: Record<string, unknown> & {
    componentProps: Record<string, unknown>;
  };

  constructor(
    pathname: string,
    componentClass: new () => any,
    props: Record<string, unknown> & {
      componentProps: Record<string, unknown>;
    },
  ) {
    this._pathname = pathname;
    this._componentClass = componentClass;
    this._component = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._component) {
      this._component.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (this._componentClass) {
      this._component = new this._componentClass({
        ...this._props.componentProps,
      });

      rootRender(
        this._props.rootQuery as string,
        this._component as Component<Record<string, unknown>>,
      );

      return;
    }

    this._component && this._component.show();
  }
}
