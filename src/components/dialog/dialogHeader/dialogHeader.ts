import Button from 'src/components/button/button';
import PopupForm from 'src/components/forms/popupForm/popupForm';
import Popup from 'src/components/popup/popup';
import {
  ERROR_ADD_REMOVE_MSG,
  isUserIdValid,
} from 'src/helpers/validation.helpers';
import Component from '../../../utils/component/component';
import tpl from './dialogHeader.template.hbs';

export default class DialogHeader extends Component<Record<string, unknown>> {
  init() {
    this.children.addUserPopup = new Popup({
      content: new PopupForm({
        name: 'addUserPopup',
        placeholder: 'Введите id пользователя',
        errorMsg: ERROR_ADD_REMOVE_MSG,
        inputValidator: isUserIdValid,
        btnText: 'Добавить пользователя',
        successMsg: 'Пользователь успешно добавлен',
        activeChatId: this.props.activeChatId,
        formType: 'addUser',
      }),
    });

    this.children.removeUserPopup = new Popup({
      content: new PopupForm({
        name: 'removeUserPopup',
        placeholder: 'Введите id пользователя',
        errorMsg: ERROR_ADD_REMOVE_MSG,
        inputValidator: isUserIdValid,
        btnText: 'Удалить пользователя',
        successMsg: 'Пользователь успешно удален',
        activeChatId: this.props.activeChatId,
        formType: 'removeUser',
      }),
    });

    this.children.addUserPopup.hide();
    this.children.removeUserPopup.hide();

    this.children.addUser = new Button({
      name: 'addUser',
      className: 'btn btn--outline',
      type: 'button',
      text: 'Добавить юзера',
      events: {
        click: () => {
          this.children.addUserPopup.show();
        },
      },
    });

    this.children.removeUser = new Button({
      name: 'removeUser',
      className: 'btn btn--outline',
      type: 'button',
      text: 'Удалить юзера',
      events: {
        click: () => {
          this.children.removeUserPopup.show();
        },
      },
    });
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
