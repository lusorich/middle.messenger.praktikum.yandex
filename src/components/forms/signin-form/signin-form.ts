import { compile } from '../../../lib/template-engine/compile';
import tpl from './signin-form.template';
import Button from '../../button/button';
import Input from '../../input/input';
import Component from '../../../utils/Component';
import { SigninFormProps } from './signin-form.types';

export default class SigninForm extends Component<SigninFormProps> {
  init() {
    this.children.inputName = new Input({
      placeholder: 'Логин',
      name: 'login',
      className: 'input input--secondary',
      type: 'text',
    });
    this.children.inputPassword = new Input({
      placeholder: 'Пароль',
      name: 'password',
      type: 'password',
      className: 'input input--secondary',
    });
    this.children.signInBtn = new Button({
      name: 'signin',
      text: 'Войти',
      className: 'btn btn--contained',
      type: 'submit',
    });
  }

  render() {
    return this.compile(context => compile(tpl(), { ...context }), this.props);
  }
}
