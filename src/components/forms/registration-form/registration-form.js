import { compile } from "../../../lib/template-engine/compile";
import tpl from "./registration-form.template";
import btn from "../../button/button";
import input from "../../input/input";

export default () => {
  return compile(tpl(), {
    registrationBtn: btn({
      name: "registration",
      text: "Зарегистрироваться",
    }),
    inputFirstName: input({
      placeholder: "Имя",
      name: "first_name",
    }),
    inputSecondName: input({
      placeholder: "Фамилия",
      name: "second_name",
    }),
    inputLogin: input({
      placeholder: "Логин",
      name: "login",
    }),
    inputEmail: input({
      placeholder: "Почта",
      name: "email",
    }),
    inputPassword: input({
      placeholder: "Пароль",
      name: "password",
      type: "password",
    }),
    inputPhone: input({
      placeholder: "Телефон",
      name: "phone",
      type: "tel",
    }),
  });
};
