import tpl from "./signin.template";
import getSignInForm from "../../components/forms/signin-form/signin-form";
import { compile } from "../../lib/template-engine/compile";
import link from "../../components/link/link";
import layout from "../../layouts/unauthorized/unauthorized";

export default () => {
  return layout(
    compile(tpl(), {
      form: getSignInForm(),
      registrationLink: link({
        id: "link-registration",
        href: "/registration",
        text: "Регистрация",
        className: "link",
      }),
    })
  );
};
