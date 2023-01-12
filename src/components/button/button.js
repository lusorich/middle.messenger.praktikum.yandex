import { compile } from "../../lib/template-engine/compile";
import tpl from "./button.template";

export default ({ name, text }) => {
  const btn = compile(tpl(), {
    name,
    text,
  });

  return btn;
};
