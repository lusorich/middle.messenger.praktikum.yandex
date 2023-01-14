import { compile } from "../../../lib/template-engine/compile";
import tpl from "./profile-password-form.template";
import inputWithLabel from "../../inputWithLabel/inputWithLabel";
import btn from "../../button/button";

export default () => {
  return compile(tpl(), {
    inputOldPassword: inputWithLabel({
      labelText: "Старый пароль",
      placeholder: "Пароль",
      name: "oldPassword",
      wrapperClassName: "wrapper-profile-form",
      inputClassName: "input input-form",
      type: "password",
    }),
    inputNewPassword: inputWithLabel({
      labelText: "Новый пароль",
      placeholder: "Пароль",
      name: "newPassword",
      wrapperClassName: "wrapper-profile-form",
      inputClassName: "input input-form",
      type: "password",
    }),
    inputNewPasswordRepeat: inputWithLabel({
      labelText: "Повторите новый пароль",
      placeholder: "Пароль",
      name: "newPasswordRepeat",
      wrapperClassName: "wrapper-profile-form",
      inputClassName: "input input-form",
      type: "password",
    }),
    saveBtn: btn({
      name: "save",
      text: "Сохранить",
      className: "btn btn--contained",
    }),
  });
};
