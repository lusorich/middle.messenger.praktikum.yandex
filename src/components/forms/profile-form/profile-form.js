import { compile } from "../../../lib/template-engine/compile";
import tpl from "./profile-form.template";
import inputWithLabel from "../../inputWithLabel/inputWithLabel";
import btn from "../../button/button";

export default () => {
  return compile(tpl(), {
    inputFirstName: inputWithLabel({
      labelText: "Имя",
      placeholder: "Бэтмен",
      name: "first_name",
      wrapperClassName: "wrapper-profile-form",
      inputClassName: "input input-form",
    }),
    inputSecondName: inputWithLabel({
      labelText: "Фамилия",
      placeholder: "Бэтменюк",
      name: "second_name",
      wrapperClassName: "wrapper-profile-form",
      inputClassName: "input input-form",
    }),
    inputDisplayName: inputWithLabel({
      labelText: "Отображаемое имя",
      placeholder: "Бэтмен",
      name: "display_name",
      wrapperClassName: "wrapper-profile-form",
      inputClassName: "input input-form",
    }),
    inputLogin: inputWithLabel({
      labelText: "Логин",
      placeholder: "Batman",
      name: "login",
      wrapperClassName: "wrapper-profile-form",
      inputClassName: "input input-form",
    }),
    inputEmail: inputWithLabel({
      labelText: "Почта",
      placeholder: "batman@hero.com",
      name: "email",
      wrapperClassName: "wrapper-profile-form",
      inputClassName: "input input-form",
      type: "email",
    }),
    inputPhone: inputWithLabel({
      labelText: "Телефон",
      placeholder: "8-777-777-77-77",
      name: "phone",
      type: "tel",
      wrapperClassName: "wrapper-profile-form",
      inputClassName: "input input-form",
    }),
    saveBtn: btn({
      name: "save",
      text: "Сохранить",
      className: "btn btn--contained",
    }),
  });
};
