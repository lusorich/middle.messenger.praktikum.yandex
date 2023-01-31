import { compile } from '../../lib/template-engine/compile';
import tpl from './505.template';
import Link from '../../components/link/link';
import Component from '../../utils/component/component';

export default class Page505 extends Component {
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
