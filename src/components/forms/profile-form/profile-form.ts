import { compile } from '../../../lib/template-engine/compile';
import tpl from './profile-form.template';
import Component from '../../../utils/Component';
import InputWithLabel from '../../inputWithLabel/inputWithLabel';
import Button from '../../button/button';

export default class ProfileForm extends Component {
  init() {
    this.children.inputFirstName = new InputWithLabel({
      labelText: 'Имя',
      placeholder: 'Бэтмен',
      name: 'first_name',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
      type: 'text',
    });
    this.children.inputSecondName = new InputWithLabel({
      labelText: 'Фамилия',
      placeholder: 'Бэтменюк',
      name: 'second_name',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
      type: 'text',
    });
    this.children.inputDisplayName = new InputWithLabel({
      labelText: 'Отображаемое имя',
      placeholder: 'Бэтмен',
      name: 'display_name',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
      type: 'text',
    });
    this.children.inputLogin = new InputWithLabel({
      labelText: 'Логин',
      placeholder: 'Batman',
      name: 'login',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
      type: 'text',
    });
    this.children.inputEmail = new InputWithLabel({
      labelText: 'Почта',
      placeholder: 'batman@hero.com',
      name: 'email',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
      type: 'email',
    });
    this.children.inputPhone = new InputWithLabel({
      labelText: 'Телефон',
      placeholder: '8-777-777-77-77',
      name: 'phone',
      type: 'tel',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
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
