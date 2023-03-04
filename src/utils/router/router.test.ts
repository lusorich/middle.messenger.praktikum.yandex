/**
 * @jest-environment jsdom
 */

import UnauthorizedLayout from 'src/layouts/unauthorized/unauthorized';
import RegistrationPage from 'src/pages/registration/registration';
import SigninPage from 'src/pages/signin/signin';
import { Router } from './router';

describe('Тестируем переходы у Роутера', () => {
  function createRouter(url: string) {
    return new Router(url);
  }

  it('Переход на новую страницу должен менять history', () => {
    const ROUTER_INSTANCE = createRouter('');

    ROUTER_INSTANCE.use('/', UnauthorizedLayout, {
      content: new SigninPage(),
    }).use('/sign-up', UnauthorizedLayout, {
      content: new RegistrationPage(),
    });

    ROUTER_INSTANCE.go('/');
    ROUTER_INSTANCE.go('sign-up');

    expect(window.history.length).toBe(3);
  });
});
