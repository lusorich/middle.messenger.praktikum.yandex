import MessengerPage from 'src/pages/messenger/messenger';
import { Router } from 'src/utils/router/router';
import SigninPage from 'src/pages/signin/signin';
import UnauthorizedLayout from 'src/layouts/unauthorized/unauthorized';
import RegistrationPage from 'src/pages/registration/registration';
import ProfileLayout from 'src/layouts/profile/profile';
import ProfilePage from 'src/pages/profile/profile';
import ProfileEditPage from 'src/pages/profileEdit/profileEdit';
import ProfileEditPasswordPage from 'src/pages/profileEditPassword/profileEditPassword';
import Page404 from 'src/pages/404/404';
import Page505 from 'src/pages/505/505';

export const mainRouter = new Router('#root');

mainRouter
  .use('/', UnauthorizedLayout, {
    content: new SigninPage(),
  })
  .use('/messenger', MessengerPage)
  .use('/sign-up', UnauthorizedLayout, {
    content: new RegistrationPage(),
  })
  .use('/settings', ProfileLayout, {
    content: new ProfilePage(),
  })
  .use('/settings/edit', ProfileLayout, {
    content: new ProfileEditPage(),
  })
  .use('/settings/edit-password', ProfileLayout, {
    content: new ProfileEditPasswordPage(),
  })
  .use('/404', Page404)
  .use('/505', Page505)
  .start();
