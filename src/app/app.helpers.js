import { ROUTES } from "./app.constants";

export const navLinkClickHandler = (e, route, rootEl) => {
  e.preventDefault();
  renderActualRoute(route, rootEl);
};

export const renderActualRoute = (pathname, rootEl) => {
  window.history.pushState({}, "", pathname);

  if (!ROUTES[window.location.pathname]) {
    rootEl.innerHTML = ROUTES["/404"]();
    return;
  }
  rootEl.innerHTML = ROUTES[window.location.pathname]();
};

export const setListenersByRoute = {
  "/signin": (rootEl) => {
    const signInForm = document.querySelector(".signin-form");
    const registrationPageLink = document.querySelector("#link-registration");

    signInForm &&
      signInForm.addEventListener("submit", (e) =>
        navLinkClickHandler(e, "/", rootEl)
      );

    registrationPageLink &&
      registrationPageLink.addEventListener("click", (e) =>
        navLinkClickHandler(e, "/registration", rootEl)
      );
  },
  "/registration": (rootEl) => {
    const regitrationForm = document.querySelector(".registration-form");

    regitrationForm.addEventListener("submit", (e) =>
      navLinkClickHandler(e, "/", rootEl)
    );
  },
  "/": (rootEl) => {
    const profileLink = document.querySelector("#link-profile");

    profileLink.addEventListener("click", (e) =>
      navLinkClickHandler(e, "/profile", rootEl)
    );
  },
  "/profile": (rootEl) => {
    const profileEditLink = document.querySelector("#link-profile-edit");
    const profilePasswordEditLink = document.querySelector(
      "#link-profile-password-edit"
    );
    const profileBackLink = document.querySelector("#link-profile-back");
    const profileSigninLink = document.querySelector("#link-profile-signin");

    profileEditLink.addEventListener("click", (e) =>
      navLinkClickHandler(e, "/profile/edit", rootEl)
    );

    profileSigninLink.addEventListener("click", (e) =>
      navLinkClickHandler(e, "/signin", rootEl)
    );

    profilePasswordEditLink.addEventListener("click", (e) =>
      navLinkClickHandler(e, "/profile/edit-password", rootEl)
    );

    profileBackLink.addEventListener("click", (e) =>
      navLinkClickHandler(e, "/", rootEl)
    );
  },
  "/profile/edit": (rootEl) => {
    const profileBackLink = document.querySelector("#link-profile-back");

    profileBackLink.addEventListener("click", (e) =>
      navLinkClickHandler(e, "/profile", rootEl)
    );
  },
  "/profile/edit-password": (rootEl) => {
    const profileBackLink = document.querySelector("#link-profile-back");

    profileBackLink.addEventListener("click", (e) =>
      navLinkClickHandler(e, "/profile", rootEl)
    );
  },
};
