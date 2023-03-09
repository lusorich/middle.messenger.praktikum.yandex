/**
 * @jest-environment jsdom
 */

import Page404 from 'src/pages/404/404';
import Page505 from 'src/pages/505/505';
import { Router } from './router';

describe('Тестируем Роутер', () => {
  function createRouter(url: string) {
    return new Router(url);
  }

  it('Переход на новую страницу (go) должен менять history', () => {
    const ROUTER_INSTANCE = createRouter('#root');

    ROUTER_INSTANCE.use('/505', Page505).use('/404', Page404).start();

    ROUTER_INSTANCE.go('/');
    ROUTER_INSTANCE.go('sign-up');

    expect(window.history.length).toBe(3);
  });

  it('При вызове метода setHistoryState, state у History должен поменяться', () => {
    const ROUTER_INSTANCE = createRouter('#root');

    ROUTER_INSTANCE.setHistoryState(['name', 'mark']);

    expect(window.history.state).toHaveProperty('name', 'mark');
  });

  it('При вызове метода getHistoryStateValue, должны получить акутальное value из History state по ключу', () => {
    const ROUTER_INSTANCE = createRouter('#root');

    ROUTER_INSTANCE.setHistoryState(['name', 'mark']);

    const value = ROUTER_INSTANCE.getHistoryStateValue('name');

    expect(value).toBe('mark');
  });

  it('При использовании метода use, добавляется новый роут', () => {
    const ROUTER_INSTANCE = createRouter('#root');

    ROUTER_INSTANCE.use('/505', Page505);

    const route505 = ROUTER_INSTANCE.getRoute('/505');

    expect(route505).not.toBeUndefined;
  });
});
