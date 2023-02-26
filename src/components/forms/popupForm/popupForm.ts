import tpl from './popupForm.template.hbs';
import Component from '../../../utils/component/component';
import Input from 'src/components/input/input';
import Button from 'src/components/button/button';
import { validate } from 'src/helpers/validation.helpers';
import ChatsController from 'src/controllers/chatsController';

type Props = {
  name: string;
  placeholder: string;
  inputValidator: (str: string) => boolean;
  errorMsg: string;
  successMsg: string;
  btnText: string;
  activeChatId?: number | string;
  formType: 'addChat' | 'addUser' | 'removeUser';
};

export default class PopupForm extends Component<Props> {
  init() {
    this.children.inputChatName = new Input({
      name: this.props.name,
      placeholder: this.props.placeholder,
      type: 'text',
      className: 'input input--secondary',
      events: {
        blur: () => {
          validate(
            this.props.name,
            this.props.errorMsg,
            this.props.inputValidator,
          );
        },
        focus: () => {
          validate(
            this.props.name,
            this.props.errorMsg,
            this.props.inputValidator,
          );
        },
      },
    });
    this.children.saveBtn = new Button({
      name: 'save',
      text: this.props.btnText,
      className: 'btn btn--contained',
      type: 'submit',
    });

    this.setProps({
      ...this.props,
      events: {
        submit: async (e: SubmitEvent) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);

          const value = formData.get(this.props.name) as string;
          const isValueValid = this.props.inputValidator(value);

          if (isValueValid) {
            switch (this.props.formType) {
              case 'addChat': {
                ChatsController.createChat({
                  data: { title: value },
                });

                break;
              }
              case 'addUser': {
                try {
                  await ChatsController.addUserToChat({
                    data: {
                      users: [Number(value)],
                      chatId: this.props.activeChatId,
                    },
                  });
                } catch (error) {
                  validate(
                    this.props.name,
                    'Не удалось добавить пользователя',
                    () => false,
                    this.props.successMsg,
                  );
                  return;
                }
                break;
              }
              case 'removeUser': {
                ChatsController.removeUserFromChat({
                  data: {
                    users: [Number(value)],
                    chatId: this.props.activeChatId,
                  },
                });
                break;
              }
              default:
                '';
            }

            validate(
              this.props.name,
              this.props.errorMsg,
              this.props.inputValidator,
              this.props.successMsg,
            );
          } else {
            validate(
              this.props.name,
              this.props.errorMsg,
              this.props.inputValidator,
            );
          }
        },
      },
    });
  }

  render() {
    return this.compile(tpl, {
      errorText: '',
      ...this.props,
    });
  }
}
