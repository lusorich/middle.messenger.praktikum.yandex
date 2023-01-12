import tpl from "./signin.template";
import getSignInForm from "../../components/forms/signin-form/signin-form";
import { compile } from "../../lib/template-engine/compile";

export default () => {
  return compile(tpl(), { form: getSignInForm() });
};
