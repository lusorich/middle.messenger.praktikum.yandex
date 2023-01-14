import { setListenersByRoute, renderActualRoute } from "./app.helpers";

const rootEl = document.getElementById("root");

renderActualRoute(document.location.pathname, rootEl);
setListenersByRoute[`${document.location.pathname}`](rootEl);

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
