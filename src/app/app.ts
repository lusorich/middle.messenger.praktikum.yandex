import MainPage from 'src/pages/main/main';
import { Router } from 'src/utils/router/router';
import SigninPage from 'src/pages/signin/signin';
import UnauthorizedLayout from 'src/layouts/unauthorized/unauthorized';
import RegistrationPage from 'src/pages/registration/registration';
import ProfileLayout from 'src/layouts/profile/profile';
import ProfilePage from 'src/pages/profile/profile';
import ProfileEditPage from 'src/pages/profile-edit/profile-edit';
import ProfileEditPasswordPage from 'src/pages/profile-edit-password/profile-edit-password';
import Page404 from 'src/pages/404/404';
import Page505 from 'src/pages/505/505';

export const mainRouter = new Router('#root');

mainRouter
  .use('/', MainPage)
  .use('/signin', UnauthorizedLayout, {
    content: new SigninPage(),
  })
  .use('/registration', UnauthorizedLayout, {
    content: new RegistrationPage(),
  })
  .use('/profile', ProfileLayout, {
    content: new ProfilePage(),
  })
  .use('/profile/edit', ProfileLayout, {
    content: new ProfileEditPage(),
  })
  .use('/profile/edit-password', ProfileLayout, {
    content: new ProfileEditPasswordPage(),
  })
  .use('/404', Page404)
  .use('/505', Page505)
  .start();

const navMain = document.querySelector('#nav-main');
const navSignin = document.querySelector('#nav-signin');
const navReg = document.querySelector('#nav-registration');
const navProfile = document.querySelector('#nav-profile');
const navProfileEdit = document.querySelector('#nav-profile-edit');
const navProfileEditPassword = document.querySelector(
  '#nav-profile-edit-password',
);

navMain?.addEventListener('click', (e) => {
  e.preventDefault();
  mainRouter.go('/');
});
navSignin?.addEventListener('click', (e) => {
  e.preventDefault();
  mainRouter.go('/signin');
});
navReg?.addEventListener('click', (e) => {
  e.preventDefault();
  mainRouter.go('/registration');
});
navProfile?.addEventListener('click', (e) => {
  e.preventDefault();
  mainRouter.go('/profile');
});
navProfileEdit?.addEventListener('click', (e) => {
  e.preventDefault();
  mainRouter.go('/profile/edit');
});
navProfileEditPassword?.addEventListener('click', (e) => {
  e.preventDefault();
  mainRouter.go('/profile/edit-password');
});
