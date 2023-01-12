import { compile } from "../../../lib/template-engine/compile";
import tpl from "./profile-form.template";
import input from "../../input/input";

export default () => {
  return compile(tpl(), {
    inputFirstName: input({
      placeholder: "Бэтмен",
      name: "first_name",
    }),
    inputSecondName: input({
      placeholder: "Бэтменюк",
      name: "second_name",
    }),
    inputDisplayName: input({
      placeholder: "Бэтмен",
      name: "display_name",
    }),
    inputLogin: input({
      placeholder: "Batman",
      name: "login",
    }),
    inputEmail: input({
      placeholder: "batman@hero.com",
      name: "email",
    }),
    inputPhone: input({
      placeholder: "8-777-777-77-77",
      name: "phone",
      type: "tel",
    }),
  });
};
