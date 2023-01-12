import { compile } from "../../../lib/template-engine/compile";
import tpl from "./profile-password-form.template";
import input from "../../input/input";

export default () => {
  return compile(tpl(), {
    inputOldPassword: input({
      name: "oldPassword",
      type: "password",
      placeholder: "Пароль",
    }),
    inputNewPassword: input({
      name: "newPassword",
      type: "password",
      placeholder: "Пароль",
    }),
    inputNewPasswordRepeat: input({
      name: "newPasswordRepeat",
      type: "password",
      placeholder: "Пароль",
    }),
  });
};
