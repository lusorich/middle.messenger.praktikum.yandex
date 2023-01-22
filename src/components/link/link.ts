import { compile } from "../../lib/template-engine/compile";
import tpl from "./link.template";

export default ({
  id,
  href,
  className,
  text,
}: {
  id: string;
  href: string;
  className: string;
  text: string;
}) => {
  const link = compile(tpl(), {
    id,
    href,
    className,
    text,
  });

  return link;
};
