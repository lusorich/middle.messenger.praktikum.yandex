import { compile } from '../../lib/template-engine/compile';
import Link from '../../components/link/link';
import Component from '../../utils/component/component';
import tpl from './profile.template';
import AuthController from 'src/controllers/auth-controller';
import { mainRouter } from 'src/app/app';
import Avatar from 'src/components/avatar/avatar';

export default class ProfilePage extends Component<Record<string, unknown>> {
  init() {
    this.children.editDataLink = new Link({
      id: 'link-profile-edit',
      href: '/edit',
      text: 'Изменить данные',
      className: 'link link-border-bottom',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          mainRouter.go('/profile/edit');
        },
      },
    });
    this.children.editPasswordLink = new Link({
      id: 'link-profile-password-edit',
      href: '/edit-password',
      text: 'Изменить пароль',
      className: 'link link-border-bottom',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          mainRouter.go('/profile/edit-password');
        },
      },
    });
    this.children.exitLink = new Link({
      id: 'link-profile-signin',
      href: '/signin',
      text: 'Выйти',
      className: 'link link--red',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          AuthController.logout();
        },
      },
    });
    this.children.avatar = new Avatar({
      alt: 'Аватар пользователя',
      size: 'xl',
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
