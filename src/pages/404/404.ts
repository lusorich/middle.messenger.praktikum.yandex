import { compile } from '../../lib/template-engine/compile';
import tpl from './404.template';
import Link from '../../components/link/link';
import Component from '../../utils/component/component';

export default class Page404 extends Component<Record<string, unknown>> {
  init() {
    this.children.link = new Link({
      id: 'link-main',
      href: '/',
      text: 'Перейти на главную траницу',
      className: 'link',
    });
  }

  render() {
    return this.compile(
      (context) =>
        compile(tpl(), {
          ...context,
        }),
      this.props,
    );
  }
}
