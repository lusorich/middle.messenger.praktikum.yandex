import { PAGE_PATHS } from './app.constants';
import {
  setListenersByRoute,
  renderActualRoute,
  navLinkClickHandler,
} from './app.helpers';

const rootEl = document.getElementById('root');
const bodyEl = document.querySelector('body');

if (rootEl) {
  renderActualRoute(document.location.pathname, rootEl);
  setListenersByRoute[`${document.location.pathname as PAGE_PATHS}`](rootEl);

  document.querySelector('#nav-main')?.addEventListener('click', e => {
    navLinkClickHandler(e, PAGE_PATHS.MAIN, rootEl);
  });
  document.querySelector('#nav-signin')?.addEventListener('click', e => {
    navLinkClickHandler(e, PAGE_PATHS.SIGNIN, rootEl);
  });
  document.querySelector('#nav-registration')?.addEventListener('click', e => {
    navLinkClickHandler(e, PAGE_PATHS.REGISTRATION, rootEl);
  });
  document.querySelector('#nav-profile')?.addEventListener('click', e => {
    navLinkClickHandler(e, PAGE_PATHS.PROFILE, rootEl);
  });
  document.querySelector('#nav-profile-edit')?.addEventListener('click', e => {
    navLinkClickHandler(e, PAGE_PATHS.PROFILE_EDIT, rootEl);
  });
  document
    .querySelector('#nav-profile-edit-password')
    ?.addEventListener('click', e => {
      navLinkClickHandler(e, PAGE_PATHS.PROFILE_EDIT_PASSWORD, rootEl);
    });
  document.querySelector('#nav-404')?.addEventListener('click', e => {
    navLinkClickHandler(e, PAGE_PATHS.NOT_FIND, rootEl);
  });
  document.querySelector('#nav-505')?.addEventListener('click', e => {
    navLinkClickHandler(e, PAGE_PATHS.SERVER_ERROR, rootEl);
  });

  const observeUrlChange = () => {
    let lastPathname = document.location.pathname;

    const observer = new MutationObserver(mutations => {
      mutations.forEach(() => {
        if (lastPathname !== document.location.pathname) {
          lastPathname = document.location.pathname;
          setListenersByRoute[lastPathname as PAGE_PATHS] &&
            setListenersByRoute[lastPathname as PAGE_PATHS](rootEl);
        }
      });
    });

    bodyEl &&
      observer.observe(bodyEl, {
        childList: true,
        subtree: true,
      });
  };

  window.onload = observeUrlChange;
}
