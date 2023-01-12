import { compile } from "../../../lib/template-engine/compile";
import tpl from "./signin-form.template";
import btn from "../../button/button";
import input from "../../input/input";

export default () => {
  return compile(tpl(), {
    signInBtn: btn({
      name: "signin",
      text: "Войти",
    }),
    inputName: input({
      placeholder: "Логин",
      name: "login",
    }),
    inputPassword: input({
      placeholder: "Пароль",
      name: "password",
      type: "password",
    }),
  });
};
