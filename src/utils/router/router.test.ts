/**
 * @jest-environment jsdom
 */

import Page404 from 'src/pages/404/404';
import Page505 from 'src/pages/505/505';
import { Router } from './router';

describe('Тестируем переходы у Роутера', () => {
  function createRouter(url: string) {
    return new Router(url);
  }

  it('Переход на новую страницу должен менять history', () => {
    const ROUTER_INSTANCE = createRouter('#root');

    ROUTER_INSTANCE.use('/505', Page505).use('/404', Page404).start();

    ROUTER_INSTANCE.go('/');
    ROUTER_INSTANCE.go('sign-up');

    expect(window.history.length).toBe(3);
  });
});
