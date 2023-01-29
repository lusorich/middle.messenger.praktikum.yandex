import { compile } from '../../../lib/template-engine/compile';
import tpl from './profile-password-form.template';
import Component from '../../../utils/component/component';
import InputWithLabel from '../../inputWithLabel/inputWithLabel';
import Button from '../../button/button';

export default class ProfilePasswordForm extends Component {
  init() {
    this.children.inputOldPassword = new InputWithLabel({
      labelText: 'Старый пароль',
      placeholder: 'Пароль',
      name: 'oldPassword',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
      type: 'password',
    });
    this.children.inputNewPassword = new InputWithLabel({
      labelText: 'Новый пароль',
      placeholder: 'Пароль',
      name: 'newPassword',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
      type: 'password',
    });
    this.children.inputNewPasswordRepeat = new InputWithLabel({
      labelText: 'Повторите новый пароль',
      placeholder: 'Пароль',
      name: 'newPasswordRepeat',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
      type: 'password',
    });
    this.children.saveBtn = new Button({
      name: 'save',
      text: 'Сохранить',
      className: 'btn btn--contained',
      type: 'submit',
    });
  }

  render() {
    return this.compile(context => compile(tpl(), { ...context }), this.props);
  }
}
