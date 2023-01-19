import signInPage from "../pages/signin/signin";
import registrationPage from "../pages/registration/registration";
import mainPage from "../pages/main/main";
import profilePage from "../pages/profile/profile";
import profileEditPage from "../pages/profile-edit/profile-edit";
import profileEditPasswordPage from "../pages/profile-edit-password/profile-edit-password";
import page404 from "../pages/404/404";
import page505 from "../pages/505/505";

export const ROUTES = {
  "/": mainPage,
  "/signin": signInPage,
  "/registration": registrationPage,
  "/profile": profilePage,
  "/profile/edit": profileEditPage,
  "/profile/edit-password": profileEditPasswordPage,
  "/404": page404,
  "/505": page505,
};
