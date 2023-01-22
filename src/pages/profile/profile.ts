import layout from "../../layouts/profile/profile";
import tpl from "./profile.template";
import { compile } from "../../lib/template-engine/compile";
import link from "../../components/link/link";

export default () => {
  return layout(
    compile(tpl(), {
      editDataLink: link({
        id: "link-profile-edit",
        href: "/edit",
        text: "Изменить данные",
        className: "link link-border-bottom",
      }),
      editPasswordLink: link({
        id: "link-profile-password-edit",
        href: "/edit-password",
        text: "Изменить пароль",
        className: "link link-border-bottom",
      }),
      exitLink: link({
        id: "link-profile-signin",
        href: "/signin",
        text: "Выйти",
        className: "link link--red",
      }),
    })
  );
};
