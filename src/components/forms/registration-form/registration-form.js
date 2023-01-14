import { compile } from "../../../lib/template-engine/compile";
import tpl from "./registration-form.template";
import btn from "../../button/button";
import input from "../../input/input";

export default () => {
  return compile(tpl(), {
    registrationBtn: btn({
      name: "registration",
      text: "Зарегистрироваться",
      className: "btn btn--contained",
    }),
    inputFirstName: input({
      placeholder: "Имя",
      name: "first_name",
      className: "input input--secondary",
    }),
    inputSecondName: input({
      placeholder: "Фамилия",
      name: "second_name",
      className: "input input--secondary",
    }),
    inputLogin: input({
      placeholder: "Логин",
      name: "login",
      className: "input input--secondary",
    }),
    inputEmail: input({
      placeholder: "Почта",
      name: "email",
      className: "input input--secondary",
      type: "email",
    }),
    inputPassword: input({
      placeholder: "Пароль",
      name: "password",
      type: "password",
      className: "input input--secondary",
    }),
    inputPhone: input({
      placeholder: "Телефон",
      name: "phone",
      type: "tel",
      className: "input input--secondary",
    }),
    formTitle: "Регистрация",
  });
};
