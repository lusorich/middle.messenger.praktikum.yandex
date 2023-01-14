import { compile } from "../../lib/template-engine/compile";
import tpl from "./button.template";

export default ({ name, text, className }) => {
  const btn = compile(tpl(), {
    name,
    text,
    className,
  });

  return btn;
};
