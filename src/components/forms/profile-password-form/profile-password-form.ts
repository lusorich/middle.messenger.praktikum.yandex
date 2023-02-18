import tpl from './profile-password-form.template.hbs';
import Component from '../../../utils/component/component';
import InputWithLabel from '../../inputWithLabel/inputWithLabel';
import Button from '../../button/button';
import {
  ERROR_PASSWORD_MSG,
  isPasswordValid,
  validate,
} from '../../../helpers/validation.helpers';
import UserController from 'src/controllers/user-controller';

export default class ProfilePasswordForm extends Component<Record<string, unknown>> {
  init() {
    this.children.inputOldPassword = new InputWithLabel({
      labelText: 'Старый пароль',
      placeholder: 'Пароль',
      name: 'oldPassword',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
      type: 'password',
      events: {
        blur: () => {
          validate('oldPassword', ERROR_PASSWORD_MSG, isPasswordValid);
        },
        focus: () => {
          validate('oldPassword', ERROR_PASSWORD_MSG, isPasswordValid);
        },
      },
    });
    this.children.inputNewPassword = new InputWithLabel({
      labelText: 'Новый пароль',
      placeholder: 'Пароль',
      name: 'newPassword',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
      type: 'password',
      events: {
        blur: () => {
          validate('newPassword', ERROR_PASSWORD_MSG, isPasswordValid);
        },
        focus: () => {
          validate('newPassword', ERROR_PASSWORD_MSG, isPasswordValid);
        },
      },
    });
    this.children.inputNewPasswordRepeat = new InputWithLabel({
      labelText: 'Повторите новый пароль',
      placeholder: 'Пароль',
      name: 'newPasswordRepeat',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
      type: 'password',
      events: {
        blur: () => {
          validate('newPasswordRepeat', ERROR_PASSWORD_MSG, isPasswordValid);
        },
        focus: () => {
          validate('newPasswordRepeat', ERROR_PASSWORD_MSG, isPasswordValid);
        },
      },
    });
    this.children.saveBtn = new Button({
      name: 'save',
      text: 'Сохранить',
      className: 'btn btn--contained',
      type: 'submit',
    });

    this.setProps({
      ...this.props,
      events: {
        submit: (e: SubmitEvent) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);

          const oldPassword = formData.get('oldPassword') as string;
          const newPassword = formData.get('newPassword') as string;
          const newPasswordRepeat = formData.get('newPasswordRepeat') as string;

          const isValidOldPassword = isPasswordValid(oldPassword);
          const isValidNewPassword = isPasswordValid(newPassword);
          const isValidNewPasswordRepeat = isPasswordValid(newPasswordRepeat);

          if (
            isValidOldPassword &&
            isValidNewPassword &&
            isValidNewPasswordRepeat
          ) {
            UserController.changePassword({
              data: JSON.stringify({
                oldPassword,
                newPassword,
              }),
            });
          } else {
            validate('oldPassword', ERROR_PASSWORD_MSG, isPasswordValid);
            validate('newPassword', ERROR_PASSWORD_MSG, isPasswordValid);
            validate('newPasswordRepeat', ERROR_PASSWORD_MSG, isPasswordValid);
          }
        },
      },
    });
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
