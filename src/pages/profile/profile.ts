import Link from '../../components/link/link';
import Component, { Props } from '../../utils/component/component';
import tpl from './profile.template.hbs';
import AuthController from 'src/controllers/authController';
import { mainRouter } from 'src/app/app';
import Avatar from 'src/components/avatar/avatar';
import { connect } from 'src/utils/connect';
import { Indexed } from 'src/helpers/custom-utility-types';
import { BASE_URL, PAGE_PATHS } from 'src/app/app.constants';

class ProfilePage extends Component<Record<string, unknown>> {
  init() {
    this.children.editDataLink = new Link({
      id: 'link-profile-edit',
      href: `${PAGE_PATHS.SETTINGS_EDIT}`,
      text: 'Изменить данные',
      className: 'link link-border-bottom',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          mainRouter.go(`${PAGE_PATHS.SETTINGS_EDIT}`);
        },
      },
    });
    this.children.editPasswordLink = new Link({
      id: 'link-profile-password-edit',
      href: `${PAGE_PATHS.SETTINGS_EDIT_PASSWORD}`,
      text: 'Изменить пароль',
      className: 'link link-border-bottom',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          mainRouter.go(`${PAGE_PATHS.SETTINGS_EDIT_PASSWORD}`);
        },
      },
    });
    this.children.exitLink = new Link({
      id: 'link-profile-signin',
      href: `${PAGE_PATHS.SIGNIN}`,
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
      src: `${BASE_URL}/resources/${this.props.avatar}` ?? '',
    });
  }

  protected componentDidUpdate(_prevProps: Props, _nextProps: Props): boolean {
    this.children.avatar = new Avatar({
      alt: 'Аватар пользователя',
      size: 'xl',
      src: `${BASE_URL}/resources/${this.props.avatar}` ?? '',
    });

    return true;
  }

  render() {
    return this.compile(tpl, this.props);
  }
}

export default connect((state) => {
  return state.auth as Indexed;
})(ProfilePage);
