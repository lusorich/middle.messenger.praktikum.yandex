import tpl from "./profile-edit-password.template";
import { compile } from "../../lib/template-engine/compile";
import layout from "../../layouts/profile/profile";
import profilePasswordForm from "../../components/forms/profile-password-form/profile-password-form";

export default () => {
  return layout(
    compile(tpl(), {
      content: profilePasswordForm(),
    })
  );
};
