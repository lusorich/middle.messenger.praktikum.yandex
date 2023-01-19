import { compile } from "../../lib/template-engine/compile";
import tpl from "./button.template";

export default ({ name, text, className, type = "button" }) => {
  const btn = compile(tpl(), {
    name,
    text,
    className,
    type,
  });

  return btn;
};
