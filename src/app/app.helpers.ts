import { PAGE_PATHS } from "./app.constants";
import signInPage from "../pages/signin/signin";
import registrationPage from "../pages/registration/registration";
import mainPage from "../pages/main/main";
import profilePage from "../pages/profile/profile";
import profileEditPage from "../pages/profile-edit/profile-edit";
import profileEditPasswordPage from "../pages/profile-edit-password/profile-edit-password";
import page404 from "../pages/404/404";
import page505 from "../pages/505/505";

export const getPageByPath: {
  [key in PAGE_PATHS]: () => string;
} = {
  [PAGE_PATHS.MAIN]: mainPage,
  [PAGE_PATHS.SIGNING]: signInPage,
  [PAGE_PATHS.REGISTRATION]: registrationPage,
  [PAGE_PATHS.PROFILE]: profilePage,
  [PAGE_PATHS.PROFILE_EDIT]: profileEditPage,
  [PAGE_PATHS.PROFILE_EDIT_PASSWORD]: profileEditPasswordPage,
  [PAGE_PATHS.NOT_FIND]: page404,
  [PAGE_PATHS.SERVER_ERROR]: page505,
};

export const navLinkClickHandler = (
  e: Event,
  route: PAGE_PATHS,
  rootEl: HTMLElement
) => {
  e.preventDefault();
  renderActualRoute(route, rootEl);
};

export const renderActualRoute = (pathname: string, rootEl: HTMLElement) => {
  window.history.pushState({}, "", pathname);

  if (!Object.values(PAGE_PATHS).includes(pathname as PAGE_PATHS)) {
    rootEl.innerHTML = getPageByPath[PAGE_PATHS.NOT_FIND]();
    window.history.pushState({}, "", PAGE_PATHS.NOT_FIND);
    return;
  }
  rootEl.innerHTML = getPageByPath[pathname as PAGE_PATHS]();
};

export const setListenersByRoute: {
  [key in PAGE_PATHS]: (rootEl: HTMLElement) => void;
} = {
  [PAGE_PATHS.SIGNING]: (rootEl) => {
    const signInForm = document.querySelector(".signin-form");
    const registrationPageLink = document.querySelector("#link-registration");

    signInForm &&
      signInForm.addEventListener("submit", (e) =>
        navLinkClickHandler(e, PAGE_PATHS.MAIN, rootEl)
      );

    registrationPageLink &&
      registrationPageLink.addEventListener("click", (e) =>
        navLinkClickHandler(e, PAGE_PATHS.REGISTRATION, rootEl)
      );
  },
  [PAGE_PATHS.REGISTRATION]: (rootEl) => {
    const regitrationForm = document.querySelector(".registration-form");

    regitrationForm &&
      regitrationForm.addEventListener("submit", (e) =>
        navLinkClickHandler(e, PAGE_PATHS.MAIN, rootEl)
      );
  },
  [PAGE_PATHS.MAIN]: (rootEl) => {
    const profileLink = document.querySelector("#link-profile");

    profileLink &&
      profileLink.addEventListener("click", (e) =>
        navLinkClickHandler(e, PAGE_PATHS.PROFILE, rootEl)
      );
  },
  [PAGE_PATHS.PROFILE]: (rootEl) => {
    const profileEditLink = document.querySelector("#link-profile-edit");
    const profilePasswordEditLink = document.querySelector(
      "#link-profile-password-edit"
    );
    const profileBackLink = document.querySelector("#link-profile-back");
    const profileSigninLink = document.querySelector("#link-profile-signin");

    profileEditLink &&
      profileEditLink.addEventListener("click", (e) =>
        navLinkClickHandler(e, PAGE_PATHS.PROFILE_EDIT, rootEl)
      );

    profileSigninLink &&
      profileSigninLink.addEventListener("click", (e) =>
        navLinkClickHandler(e, PAGE_PATHS.SIGNING, rootEl)
      );

    profilePasswordEditLink &&
      profilePasswordEditLink.addEventListener("click", (e) =>
        navLinkClickHandler(e, PAGE_PATHS.PROFILE_EDIT_PASSWORD, rootEl)
      );

    profileBackLink &&
      profileBackLink.addEventListener("click", (e) =>
        navLinkClickHandler(e, PAGE_PATHS.MAIN, rootEl)
      );
  },
  [PAGE_PATHS.PROFILE_EDIT]: (rootEl) => {
    const profileBackLink = document.querySelector("#link-profile-back");
    const editProfileform = document.querySelector(".profile-form");

    editProfileform &&
      editProfileform.addEventListener("submit", (e) =>
        navLinkClickHandler(e, PAGE_PATHS.PROFILE, rootEl)
      );

    profileBackLink &&
      profileBackLink.addEventListener("click", (e) =>
        navLinkClickHandler(e, PAGE_PATHS.PROFILE, rootEl)
      );
  },
  [PAGE_PATHS.PROFILE_EDIT_PASSWORD]: (rootEl) => {
    const profileBackLink = document.querySelector("#link-profile-back");
    const editPasswordform = document.querySelector(".profile-password-form");

    editPasswordform &&
      editPasswordform.addEventListener("submit", (e) =>
        navLinkClickHandler(e, PAGE_PATHS.PROFILE, rootEl)
      );

    profileBackLink &&
      profileBackLink.addEventListener("click", (e) =>
        navLinkClickHandler(e, PAGE_PATHS.PROFILE, rootEl)
      );
  },
  [PAGE_PATHS.NOT_FIND]: (rootEl) => {
    const mainBackLink = document.querySelector("#link-main");

    mainBackLink &&
      mainBackLink.addEventListener("click", (e) =>
        navLinkClickHandler(e, PAGE_PATHS.MAIN, rootEl)
      );
  },
  [PAGE_PATHS.SERVER_ERROR]: (rootEl) => {
    const mainBackLink = document.querySelector("#link-main");

    mainBackLink &&
      mainBackLink.addEventListener("click", (e) =>
        navLinkClickHandler(e, PAGE_PATHS.MAIN, rootEl)
      );
  },
};
