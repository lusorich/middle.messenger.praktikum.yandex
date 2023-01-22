import tpl from "./main.template";
import { compile } from "../../lib/template-engine/compile";

export default () => {
  return compile(tpl());
};
