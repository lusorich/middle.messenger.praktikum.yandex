import tpl from "./profile-edit.template";
import layout from "../../layouts/profile/profile";
import profileForm from "../../components/forms/profile-form/profile-form";
import { compile } from "../../lib/template-engine/compile";

export default () => {
  return layout(
    compile(tpl(), {
      content: profileForm(),
    })
  );
};
