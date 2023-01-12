import layout from "../../layouts/profile/profile";
import tpl from "./profile.template";
import { compile } from "../../lib/template-engine/compile";

export default () => {
  return layout(compile(tpl()));
};
