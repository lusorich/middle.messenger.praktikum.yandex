import { store } from '../store';
import { Route } from './route';

export class Router {
  protected routes: Route[] = [];

  protected history: History;

  private _rootQuery: string;

  private _currentRoute: null | Route;

  static __instance: Router;

  constructor(rootQuery: string) {
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    this.history = window.history;

    if (Router.__instance) {
      return Router.__instance;
    }

    Router.__instance = this;
  }

  use(
    pathname: string,
    component: new () => any,
    componentProps: Record<string, unknown> = {},
  ) {
    const route = new Route(pathname, component, {
      rootQuery: this._rootQuery,
      componentProps,
    });

    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = (() => {
      this._onRoute(window.location.pathname);
    }).bind(this);

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!store.getState()?.auth?.id && pathname !== '/sign-up') {
      this._currentRoute = this.getRoute('/') as Route;
      this._currentRoute.render();
      return;
    }

    if (store.getState()?.auth?.id && ['/sign-up', '/'].includes(pathname)) {
      this.go('/messenger');
      return;
    }

    if (!route) {
      this._currentRoute = this.getRoute('/404') as Route;
      this._currentRoute.render();
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }

  getHistoryState(key: string) {
    return window.history.state?.[key];
  }

  setHistoryState(value: string[]) {
    this.history.pushState(
      {
        [value[0]]: value[1],
      },
      '',
    );
  }
}
