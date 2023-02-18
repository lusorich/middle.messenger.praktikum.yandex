import tpl from './addChatForm.template.hbs';
import Component from '../../../utils/component/component';
import Input from 'src/components/input/input';
import Button from 'src/components/button/button';
import {
  ERROR_CHAT_NAME_MSG,
  isChatNameValid,
  validate,
} from 'src/helpers/validation.helpers';
import ChatsController from 'src/controllers/chats-controller';

export default class AddChatForm extends Component<Record<string, unknown>> {
  init() {
    this.children.inputChatName = new Input({
      name: 'chatName',
      placeholder: 'Введите наименование чата',
      type: 'text',
      className: 'input input--secondary',
      events: {
        blur: () => {
          validate('chatName', ERROR_CHAT_NAME_MSG, isChatNameValid);
        },
        focus: () => {
          validate('chatName', ERROR_CHAT_NAME_MSG, isChatNameValid);
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

          const chatName = formData.get('chatName') as string;
          const isValidChatName = isChatNameValid(chatName);

          if (isValidChatName) {
            ChatsController.createChat({
              data: JSON.stringify({ title: chatName }),
            });

            validate(
              'chatName',
              ERROR_CHAT_NAME_MSG,
              isChatNameValid,
              'Чат успешно добавлен',
            );
          } else {
            validate('chatName', ERROR_CHAT_NAME_MSG, isChatNameValid);
          }
        },
      },
    });
  }

  render() {
    return this.compile(tpl, {
      ...this.props,
      errorText: '',
    });
  }
}
