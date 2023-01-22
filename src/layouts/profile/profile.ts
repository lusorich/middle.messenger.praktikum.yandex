import tpl from "./profile.template";
import { compile } from "../../lib/template-engine/compile";

export default (content: string) => {
  return compile(tpl(), {
    content,
  });
};
