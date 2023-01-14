import {
  setListenersByRoute,
  renderActualRoute,
  navLinkClickHandler,
} from "./app.helpers";

const rootEl = document.getElementById("root");

renderActualRoute(document.location.pathname, rootEl);
setListenersByRoute[`${document.location.pathname}`](rootEl);

document.querySelector("#nav-main").addEventListener((e) => {
  navLinkClickHandler(e, "/", rootEl);
});
document.querySelector("#nav-signin").addEventListener((e) => {
  navLinkClickHandler(e, "/signin", rootEl);
});
document.querySelector("#nav-registration").addEventListener((e) => {
  navLinkClickHandler(e, "/registration", rootEl);
});
document.querySelector("#nav-profile").addEventListener((e) => {
  navLinkClickHandler(e, "/profile", rootEl);
});
document.querySelector("#nav-profile-edit").addEventListener((e) => {
  navLinkClickHandler(e, "/profile/edit", rootEl);
});
document.querySelector("#nav-profile-edit-password").addEventListener((e) => {
  navLinkClickHandler(e, "/profile/edit-password", rootEl);
});
document.querySelector("#nav-404").addEventListener((e) => {
  navLinkClickHandler(e, "/404", rootEl);
});
document.querySelector("#nav-505").addEventListener((e) => {
  navLinkClickHandler(e, "/505", rootEl);
});

const observeUrlChange = () => {
  let lastPathname = document.location.pathname;

  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      if (lastPathname !== document.location.pathname) {
        lastPathname = document.location.pathname;
        setListenersByRoute[lastPathname] &&
          setListenersByRoute[lastPathname](rootEl);
      }
    });
  });

  observer.observe(document.querySelector("body"), {
    childList: true,
    subtree: true,
  });
};

window.onload = observeUrlChange;
