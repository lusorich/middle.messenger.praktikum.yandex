import signInPage from "../pages/signin/signin";
import registrationPage from "../pages/registration/registration";
import mainPage from "../pages/main/main";
import profilePage from "../pages/profile/profile";
import profileEditPage from "../pages/profile-edit/profile-edit";
import profileEditPasswordPage from "../pages/profile-edit-password/profile-edit-password";

export const ROUTES = {
  "/": mainPage,
  "/signin": signInPage,
  "/registration": registrationPage,
  "/profile": profilePage,
  "/profile/edit": profileEditPage,
  "/profile/edit-password": profileEditPasswordPage,
  "/404": () => "404",
};
