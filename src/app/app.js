import {
  setListenersByRoute,
  renderActualRoute,
  navLinkClickHandler,
} from "./app.helpers";

const rootEl = document.getElementById("root");

renderActualRoute(document.location.pathname, rootEl);
setListenersByRoute[`${document.location.pathname}`](rootEl);

document.querySelector("#nav-main").addEventListener("click", (e) => {
  navLinkClickHandler(e, "/", rootEl);
});
document.querySelector("#nav-signin").addEventListener("click", (e) => {
  navLinkClickHandler(e, "/signin", rootEl);
});
document.querySelector("#nav-registration").addEventListener("click", (e) => {
  navLinkClickHandler(e, "/registration", rootEl);
});
document.querySelector("#nav-profile").addEventListener("click", (e) => {
  navLinkClickHandler(e, "/profile", rootEl);
});
document.querySelector("#nav-profile-edit").addEventListener("click", (e) => {
  navLinkClickHandler(e, "/profile/edit", rootEl);
});
document
  .querySelector("#nav-profile-edit-password")
  .addEventListener("click", (e) => {
    navLinkClickHandler(e, "/profile/edit-password", rootEl);
  });
document.querySelector("#nav-404").addEventListener("click", (e) => {
  navLinkClickHandler(e, "/404", rootEl);
});
document.querySelector("#nav-505").addEventListener("click", (e) => {
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
