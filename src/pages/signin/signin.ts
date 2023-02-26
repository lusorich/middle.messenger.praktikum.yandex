import tpl from './signin.template.hbs';
import SignInForm from '../../components/forms/signinForm/signinForm';
import Link from '../../components/link/link';
import Component from '../../utils/component/component';
import { mainRouter } from '../../app/app';
import { PAGE_PATHS } from '../../app/app.constants';
export default class SigninPage extends Component<Record<string, unknown>> {
  init() {
    this.children.form = new SignInForm({
      formTitle: 'Вход',
    });
    this.children.registrationLink = new Link({
      id: 'link-registration',
      href: '/sign-up',
      text: 'Регистрация',
      className: 'link',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          mainRouter.go(PAGE_PATHS.REGISTRATION);
        },
      },
    });
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
