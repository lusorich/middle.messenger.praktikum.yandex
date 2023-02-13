import tpl from './signin.template';
import SignInForm from '../../components/forms/signin-form/signin-form';
import { compile } from '../../lib/template-engine/compile';
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
      href: '/registration',
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
    return this.compile(
      (context) =>
        compile(tpl(), {
          ...context,
        }),
      this.props,
    );
  }
}
