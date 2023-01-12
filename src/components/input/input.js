import { compile } from "../../lib/template-engine/compile";
import tpl from "./input.template";

export default ({ placeholder = " ", name, type = "text" }) => {
  const input = compile(tpl(), {
    placeholder,
    name,
    type,
  });

  return input;
};
