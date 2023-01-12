import tpl from "./profile.template";
import { compile } from "../../lib/template-engine/compile";

export default (content) => {
  return compile(tpl(), {
    content,
  });
};
