import { compile } from "../../lib/template-engine/compile";
import tpl from "./inputWithLabel.template";
import input from "../input/input";

export default ({
  labelText,
  placeholder = " ",
  name,
  type,
  wrapperClassName,
  inputClassName,
}) => {
  const inputWithLabel = compile(tpl(), {
    input: input({
      placeholder,
      name,
      type,
      className: inputClassName,
    }),
    labelText,
    wrapperClassName,
    name,
  });

  return inputWithLabel;
};
