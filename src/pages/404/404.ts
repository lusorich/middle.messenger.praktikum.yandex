import { compile } from "../../lib/template-engine/compile";
import tpl from "./404.template";
import link from "../../components/link/link";

export default () => {
  return compile(tpl(), {
    link: link({
      id: "link-main",
      href: "/",
      text: "Перейти на главную траницу",
      className: "link",
    }),
  });
};
