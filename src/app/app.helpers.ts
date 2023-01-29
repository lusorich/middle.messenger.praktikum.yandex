import { PAGE_PATHS } from './app.constants';
import ProfilePage from '../pages/profile/profile';
import UnauthorizedLayout from '../layouts/unauthorized/unauthorized';
import SigninPage from '../pages/signin/signin';
import RegistrationPage from '../pages/registration/registration';
import MainPage from '../pages/main/main';
import ProfileLayout from '../layouts/profile/profile';
import ProfileEditPage from '../pages/profile-edit/profile-edit';
import ProfileEditPasswordPage from '../pages/profile-edit-password/profile-edit-password';
import Page404 from '../pages/404/404';
import Page505 from '../pages/505/505';

export const getPageByPath: {
  [key in PAGE_PATHS]: () => HTMLElement | Element | undefined;
} = {
  [PAGE_PATHS.MAIN]: () => new MainPage({}).getContent(),
  [PAGE_PATHS.SIGNIN]: () =>
    new UnauthorizedLayout({ content: new SigninPage() }).getContent(),
  [PAGE_PATHS.REGISTRATION]: () =>
    new UnauthorizedLayout({
      content: new RegistrationPage({}),
    }).getContent(),
  [PAGE_PATHS.PROFILE]: () =>
    new ProfileLayout({ content: new ProfilePage() }).getContent(),
  [PAGE_PATHS.PROFILE_EDIT]: () =>
    new ProfileLayout({
      content: new ProfileEditPage(),
    }).getContent(),
  [PAGE_PATHS.PROFILE_EDIT_PASSWORD]: () =>
    new ProfileLayout({
      content: new ProfileEditPasswordPage(),
    }).getContent(),
  [PAGE_PATHS.NOT_FIND]: () => new Page404().getContent(),
  [PAGE_PATHS.SERVER_ERROR]: () => new Page505().getContent(),
};

export const renderActualRoute = (pathname: string, rootEl: HTMLElement) => {
  window.history.pushState({}, '', pathname);
  rootEl.innerHTML = '';

  if (!Object.values(PAGE_PATHS).includes(pathname as PAGE_PATHS)) {
    rootEl.append(getPageByPath[PAGE_PATHS.NOT_FIND]() as Node);
    window.history.pushState({}, '', PAGE_PATHS.NOT_FIND);
    return;
  }

  rootEl.appendChild(getPageByPath[pathname as PAGE_PATHS]() as Node);
};

export const navLinkClickHandler = (
  e: Event,
  route: PAGE_PATHS,
  rootEl: HTMLElement,
) => {
  e.preventDefault();
  renderActualRoute(route, rootEl);
};

export const setListenersByRoute: {
  [key in PAGE_PATHS]: (rootEl: HTMLElement) => void;
} = {
  [PAGE_PATHS.SIGNIN]: rootEl => {
    // const signInForm = document.querySelector('.signin-form');
    const registrationPageLink = document.querySelector('#link-registration');

    // signInForm &&
    //   signInForm.addEventListener('submit', e =>
    //     navLinkClickHandler(e, PAGE_PATHS.MAIN, rootEl),
    //   );

    registrationPageLink &&
      registrationPageLink.addEventListener('click', e =>
        navLinkClickHandler(e, PAGE_PATHS.REGISTRATION, rootEl),
      );
  },
  [PAGE_PATHS.REGISTRATION]: rootEl => {
    const regitrationForm = document.querySelector('.registration-form');

    regitrationForm &&
      regitrationForm.addEventListener('submit', e =>
        navLinkClickHandler(e, PAGE_PATHS.MAIN, rootEl),
      );
  },
  [PAGE_PATHS.MAIN]: rootEl => {
    const profileLink = document.querySelector('#link-profile');

    profileLink &&
      profileLink.addEventListener('click', e =>
        navLinkClickHandler(e, PAGE_PATHS.PROFILE, rootEl),
      );
  },
  [PAGE_PATHS.PROFILE]: rootEl => {
    const profileEditLink = document.querySelector('#link-profile-edit');
    const profilePasswordEditLink = document.querySelector(
      '#link-profile-password-edit',
    );
    const profileBackLink = document.querySelector('#link-profile-back');
    const profileSigninLink = document.querySelector('#link-profile-signin');

    profileEditLink &&
      profileEditLink.addEventListener('click', e =>
        navLinkClickHandler(e, PAGE_PATHS.PROFILE_EDIT, rootEl),
      );

    profileSigninLink &&
      profileSigninLink.addEventListener('click', e =>
        navLinkClickHandler(e, PAGE_PATHS.SIGNIN, rootEl),
      );

    profilePasswordEditLink &&
      profilePasswordEditLink.addEventListener('click', e =>
        navLinkClickHandler(e, PAGE_PATHS.PROFILE_EDIT_PASSWORD, rootEl),
      );

    profileBackLink &&
      profileBackLink.addEventListener('click', e =>
        navLinkClickHandler(e, PAGE_PATHS.MAIN, rootEl),
      );
  },
  [PAGE_PATHS.PROFILE_EDIT]: rootEl => {
    const profileBackLink = document.querySelector('#link-profile-back');
    const editProfileform = document.querySelector('.profile-form');

    editProfileform &&
      editProfileform.addEventListener('submit', e =>
        navLinkClickHandler(e, PAGE_PATHS.PROFILE, rootEl),
      );

    profileBackLink &&
      profileBackLink.addEventListener('click', e =>
        navLinkClickHandler(e, PAGE_PATHS.PROFILE, rootEl),
      );
  },
  [PAGE_PATHS.PROFILE_EDIT_PASSWORD]: rootEl => {
    const profileBackLink = document.querySelector('#link-profile-back');
    const editPasswordform = document.querySelector('.profile-password-form');

    editPasswordform &&
      editPasswordform.addEventListener('submit', e =>
        navLinkClickHandler(e, PAGE_PATHS.PROFILE, rootEl),
      );

    profileBackLink &&
      profileBackLink.addEventListener('click', e =>
        navLinkClickHandler(e, PAGE_PATHS.PROFILE, rootEl),
      );
  },
  [PAGE_PATHS.NOT_FIND]: rootEl => {
    const mainBackLink = document.querySelector('#link-main');

    mainBackLink &&
      mainBackLink.addEventListener('click', e =>
        navLinkClickHandler(e, PAGE_PATHS.MAIN, rootEl),
      );
  },
  [PAGE_PATHS.SERVER_ERROR]: rootEl => {
    const mainBackLink = document.querySelector('#link-main');

    mainBackLink &&
      mainBackLink.addEventListener('click', e =>
        navLinkClickHandler(e, PAGE_PATHS.MAIN, rootEl),
      );
  },
};
