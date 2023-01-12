import tpl from "./registration.template";
import getRegistrationForm from "../../components/forms/registration-form/registration-form";
import { compile } from "../../lib/template-engine/compile";

export default () => {
  return compile(tpl(), { form: getRegistrationForm() });
};
