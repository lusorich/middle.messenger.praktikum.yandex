import { compile } from '../../../lib/template-engine/compile';
import tpl from './registration-form.template';
import Component from '../../../utils/component/component';
import Button from '../../button/button';
import Input from '../../input/input';
import { RegistrationFormProps } from './registration-form.types';
import {
  isLoginValid,
  isPasswordValid,
  isNameValid,
  validate,
  ERROR_FIRST_NAME_MSG,
  ERROR_LOGIN_MSG,
  ERROR_PASSWORD_MSG,
  ERROR_SECOND_NAME_MSG,
  isEmailValid,
  ERROR_EMAIL_MSG,
  ERROR_PHONE_MSG,
  isPhoneValid,
} from '../../../utils/validation.helpers';
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
      events: {
        blur: () => {
          validate('first_name', ERROR_FIRST_NAME_MSG, isNameValid);
        },
        focus: () => {
          validate('first_name', ERROR_FIRST_NAME_MSG, isNameValid);
        },
      },
    });
    this.children.inputSecondName = new Input({
      placeholder: 'Фамилия',
      name: 'second_name',
      className: 'input input--secondary',
      type: 'text',
      events: {
        blur: () => {
          validate('second_name', ERROR_SECOND_NAME_MSG, isNameValid);
        },
        focus: () => {
          validate('second_name', ERROR_SECOND_NAME_MSG, isNameValid);
        },
      },
    });
    this.children.inputLogin = new Input({
      placeholder: 'Логин',
      name: 'login',
      className: 'input input--secondary',
      type: 'text',
      events: {
        blur: () => {
          validate('login', ERROR_LOGIN_MSG, isLoginValid);
        },
        focus: () => {
          validate('login', ERROR_LOGIN_MSG, isLoginValid);
        },
      },
    });
    this.children.inputEmail = new Input({
      placeholder: 'Почта',
      name: 'email',
      className: 'input input--secondary',
      type: 'email',
      events: {
        blur: () => {
          validate('email', ERROR_EMAIL_MSG, isEmailValid);
        },
        focus: () => {
          validate('email', ERROR_EMAIL_MSG, isEmailValid);
        },
      },
    });
    this.children.inputPassword = new Input({
      placeholder: 'Пароль',
      name: 'password',
      type: 'password',
      className: 'input input--secondary',
      events: {
        blur: () => {
          validate('password', ERROR_PASSWORD_MSG, isPasswordValid);
        },
        focus: () => {
          validate('password', ERROR_PASSWORD_MSG, isPasswordValid);
        },
      },
    });
    this.children.inputPhone = new Input({
      placeholder: 'Телефон',
      name: 'phone',
      type: 'tel',
      className: 'input input--secondary',
      events: {
        blur: () => {
          validate('phone', ERROR_PHONE_MSG, isPhoneValid);
        },
        focus: () => {
          validate('phone', ERROR_PHONE_MSG, isPhoneValid);
        },
      },
    });

    this.setProps({
      ...this.props,
      events: {
        submit: (e: SubmitEvent) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);

          const firstName = formData.get('first_name') as string;
          const secondName = formData.get('second_name') as string;
          const login = formData.get('login') as string;
          const email = formData.get('email') as string;
          const password = formData.get('password') as string;
          const phone = formData.get('phone') as string;

          const isValidFirstName = isNameValid(firstName);
          const isValidSecondName = isNameValid(secondName);
          const isValidLogin = isLoginValid(login);
          const isValidEmail = isEmailValid(email);
          const isValidPassword = isPasswordValid(password);
          const isValidPhone = isPhoneValid(phone);

          if (
            isValidFirstName &&
            isValidSecondName &&
            isValidLogin &&
            isValidEmail &&
            isValidPassword &&
            isValidPhone
          ) {
            console.log({
              firstName,
              secondName,
              login,
              email,
              password,
              phone,
            });
          } else {
            validate('first_name', ERROR_FIRST_NAME_MSG, isNameValid);
            validate('second_name', ERROR_SECOND_NAME_MSG, isNameValid);
            validate('login', ERROR_LOGIN_MSG, isLoginValid);
            validate('email', ERROR_EMAIL_MSG, isEmailValid);
            validate('password', ERROR_PASSWORD_MSG, isPasswordValid);
            validate('phone', ERROR_PHONE_MSG, isPhoneValid);
          }
        },
      },
    });
  }

  render() {
    return this.compile(context => compile(tpl(), { ...context }), {
      ...this.props,
      errorFirstNameText: '',
      errorSecondNameText: '',
      errorLoginText: '',
      errorEmailText: '',
      errorPasswordText: '',
      errorPhoneText: '',
    });
  }
}
