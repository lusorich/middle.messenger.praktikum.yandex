import { compile } from '../../../lib/template-engine/compile';
import tpl from './registration-form.template';
import Component from '../../../utils/Component';
import Button from '../../button/button';
import Input from '../../input/input';
import { RegistrationFormProps } from './registration-form.types';

export default class RegistrationForm extends Component<RegistrationFormProps> {
  init() {
    this.children.registrationBtn = new Button({
      name: 'registration',
      text: 'Зарегистрироваться',
      className: 'btn btn--contained',
      type: 'submit',
    });
    this.children.inputFirstName = new Input({
      placeholder: 'Имя',
      name: 'first_name',
      className: 'input input--secondary',
      type: 'text',
    });
    this.children.inputSecondName = new Input({
      placeholder: 'Фамилия',
      name: 'second_name',
      className: 'input input--secondary',
      type: 'text',
    });
    this.children.inputLogin = new Input({
      placeholder: 'Логин',
      name: 'login',
      className: 'input input--secondary',
      type: 'text',
    });
    this.children.inputEmail = new Input({
      placeholder: 'Почта',
      name: 'email',
      className: 'input input--secondary',
      type: 'email',
    });
    this.children.inputPassword = new Input({
      placeholder: 'Пароль',
      name: 'password',
      type: 'password',
      className: 'input input--secondary',
    });
    this.children.inputPhone = new Input({
      placeholder: 'Телефон',
      name: 'phone',
      type: 'tel',
      className: 'input input--secondary',
    });
  }

  render() {
    return this.compile(context => compile(tpl(), { ...context }), this.props);
  }
}
