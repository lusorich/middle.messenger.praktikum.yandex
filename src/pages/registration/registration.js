import tpl from "./registration.template";
import getRegistrationForm from "../../components/forms/registration-form/registration-form";
import { compile } from "../../lib/template-engine/compile";
import layout from "../../layouts/unauthorized/unauthorized";

export default () => {
  return layout(
    compile(tpl(), {
      form: getRegistrationForm(),
    })
  );
};
