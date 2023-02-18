import tpl from './message-form.template.hbs';
import Button from '../../button/button';
import Input from '../../input/input';
import Component from '../../../utils/component/component';

import {
  isMessageValid,
  validate,
  ERROR_MSG_MSG,
} from '../../../helpers/validation.helpers';

export default class MessageForm extends Component<Record<string, unknown>> {
  init() {
    this.setProps({
      ...this.props,
      events: {
        submit: (e: SubmitEvent) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const inputMessageValue = formData.get('message') as string;

          const isValidMessageValue = isMessageValid(inputMessageValue);

          if (isValidMessageValue) {
            validate('message', ERROR_MSG_MSG, isMessageValid);
            console.log({
              message: inputMessageValue,
            });
          } else {
            validate('message', ERROR_MSG_MSG, isMessageValid);
          }
        },
      },
    });

    this.children.inputMsg = new Input({
      placeholder: 'Сообщение',
      name: 'message',
      className: 'input input-msg',
      type: 'text',
    });
    this.children.sendMsgBtn = new Button({
      name: 'send',
      text: 'Отправить',
      className: 'btn btn--contained',
      type: 'submit',
    });
  }

  render() {
    return this.compile(tpl, {
      ...this.props,
      errorMsgText: '',
    });
  }
}
