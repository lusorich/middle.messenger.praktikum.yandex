import { compile } from '../../../lib/template-engine/compile';
import tpl from './profile-form.template';
import Component from '../../../utils/component/component';
import InputWithLabel from '../../inputWithLabel/inputWithLabel';
import Button from '../../button/button';
import {
  ERROR_EMAIL_MSG,
  ERROR_FIRST_NAME_MSG,
  ERROR_LOGIN_MSG,
  ERROR_PHONE_MSG,
  ERROR_SECOND_NAME_MSG,
  isEmailValid,
  isLoginValid,
  isNameValid,
  isPhoneValid,
  validate,
} from '../../../helpers/validation.helpers';
import UserController from 'src/controllers/user-controller';
import InputAvatar from 'src/components/inputAvatar/inputAvatar';

export default class ProfileForm extends Component<Record<string, unknown>> {
  init() {
    this.children.inputFirstName = new InputWithLabel({
      labelText: 'Имя',
      placeholder: 'Бэтмен',
      name: 'first_name',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
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
    this.children.inputSecondName = new InputWithLabel({
      labelText: 'Фамилия',
      placeholder: 'Бэтменюк',
      name: 'second_name',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
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
    this.children.inputDisplayName = new InputWithLabel({
      labelText: 'Отображаемое имя',
      placeholder: 'Бэтмен',
      name: 'display_name',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
      type: 'text',
      events: {
        blur: () => {
          validate('display_name', ERROR_FIRST_NAME_MSG, isNameValid);
        },
        focus: () => {
          validate('display_name', ERROR_FIRST_NAME_MSG, isNameValid);
        },
      },
    });
    this.children.inputLogin = new InputWithLabel({
      labelText: 'Логин',
      placeholder: 'Batman',
      name: 'login',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
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
    this.children.inputEmail = new InputWithLabel({
      labelText: 'Почта',
      placeholder: 'batman@hero.com',
      name: 'email',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
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
    this.children.inputPhone = new InputWithLabel({
      labelText: 'Телефон',
      placeholder: '8-777-777-77-77',
      name: 'phone',
      type: 'tel',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
      events: {
        blur: () => {
          validate('phone', ERROR_PHONE_MSG, isPhoneValid);
        },
        focus: () => {
          validate('phone', ERROR_PHONE_MSG, isPhoneValid);
        },
      },
    });
    this.children.saveBtn = new Button({
      name: 'save',
      text: 'Сохранить',
      className: 'btn btn--contained',
      type: 'submit',
    });

    this.children.inputAvatar = new InputAvatar();

    this.setProps({
      ...this.props,
      events: {
        submit: (e: SubmitEvent) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);

          const firstName = formData.get('first_name') as string;
          const secondName = formData.get('second_name') as string;
          const displayName = formData.get('display_name') as string;
          const login = formData.get('login') as string;
          const email = formData.get('email') as string;
          const phone = formData.get('phone') as string;

          const isValidFirstName = isNameValid(firstName);
          const isValidSecondName = isNameValid(secondName);
          const isValidDisplayName = isNameValid(displayName);
          const isValidLogin = isLoginValid(login);
          const isValidEmail = isEmailValid(email);
          const isValidPhone = isPhoneValid(phone);

          if (
            isValidFirstName &&
            isValidSecondName &&
            isValidLogin &&
            isValidEmail &&
            isValidDisplayName &&
            isValidPhone
          ) {
            UserController.changeProfile({
              data: JSON.stringify({
                first_name: firstName,
                second_name: secondName,
                display_name: displayName,
                login,
                email,
                phone,
              }),
            });
          } else {
            validate('first_name', ERROR_FIRST_NAME_MSG, isNameValid);
            validate('second_name', ERROR_SECOND_NAME_MSG, isNameValid);
            validate('display_name', ERROR_FIRST_NAME_MSG, isNameValid);
            validate('login', ERROR_LOGIN_MSG, isLoginValid);
            validate('email', ERROR_EMAIL_MSG, isEmailValid);
            validate('phone', ERROR_PHONE_MSG, isPhoneValid);
          }
        },
      },
    });
  }

  render() {
    return this.compile(
      (context) => compile(tpl(), { ...context }),
      this.props,
    );
  }
}
