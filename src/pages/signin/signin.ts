import tpl from './signin.template';
import SignInForm from '../../components/forms/signin-form/signin-form';
import { compile } from '../../lib/template-engine/compile';
import Link from '../../components/link/link';
import Component from '../../utils/component/component';
export default class SigninPage extends Component {
  init() {
    this.children.form = new SignInForm({
      formTitle: 'Вход',
    });
    this.children.registrationLink = new Link({
      id: 'link-registration',
      href: '/registration',
      text: 'Регистрация',
      className: 'link',
    });
  }

  render() {
    return this.compile(
      context =>
        compile(tpl(), {
          ...context,
        }),
      this.props,
    );
  }
}
