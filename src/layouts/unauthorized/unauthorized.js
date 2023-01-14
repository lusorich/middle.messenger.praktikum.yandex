import tpl from "./unauthorized.template";
import { compile } from "../../lib/template-engine/compile";

export default (content) => {
  return compile(tpl(), {
    content,
  });
};
