import { compile } from "../../lib/template-engine/compile";
import tpl from "./button.template";

export default ({
  name,
  text,
  className,
  type = "button",
}: {
  name: string;
  text: string;
  className: string;
  type: string;
}) => {
  const btn = compile(tpl(), {
    name,
    text,
    className,
    type,
  });

  return btn;
};
