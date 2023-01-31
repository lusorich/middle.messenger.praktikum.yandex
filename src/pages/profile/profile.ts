import { compile } from '../../lib/template-engine/compile';
import Link from '../../components/link/link';
import Component from '../../utils/component/component';
import tpl from './profile.template';

export default class ProfilePage extends Component<Record<string, void>> {
  init() {
    this.children.editDataLink = new Link({
      id: 'link-profile-edit',
      href: '/edit',
      text: 'Изменить данные',
      className: 'link link-border-bottom',
    });
    this.children.editPasswordLink = new Link({
      id: 'link-profile-password-edit',
      href: '/edit-password',
      text: 'Изменить пароль',
      className: 'link link-border-bottom',
    });
    this.children.exitLink = new Link({
      id: 'link-profile-signin',
      href: '/signin',
      text: 'Выйти',
      className: 'link link--red',
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
