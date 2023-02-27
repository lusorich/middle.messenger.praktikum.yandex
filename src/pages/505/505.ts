import tpl from './505.template.hbs';
import Link from '../../components/link/link';
import Component from '../../utils/component/component';

export default class Page505 extends Component<Record<string, unknown>> {
  init() {
    this.children.link = new Link({
      id: 'link-main',
      href: '/',
      text: 'Перейти на главную траницу',
      className: 'link',
    });
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
