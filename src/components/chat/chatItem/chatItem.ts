import Avatar from 'src/components/avatar/avatar';
import Button from 'src/components/button/button';
import ChatsController from 'src/controllers/chatsController';
import Component from '../../../utils/component/component';
import tpl from './chatItem.template.hbs';
import defaultuserImg from 'src/assets/images/user.png';
import { BASE_URL } from 'src/app/app.constants';

export default class ChatItem extends Component<Record<string, unknown>> {
  init() {
    this.children.deleteChatBtn = new Button({
      className: 'btn',
      name: 'chat-delete-btn',
      text: 'Delete',
      type: 'button',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          e.stopPropagation();

          ChatsController.deleteChat({
            data: {
              chatId: this.props.id,
            },
          });
        },
      },
    });

    this.children.chatAvatar = new Avatar({
      size: 's',
      alt: 'Аватар чата',
      src: this.props.avatar
        ? `${BASE_URL}/resources/${this.props.avatar}`
        : defaultuserImg,
    });
  }

  render() {
    return this.compile(tpl, {
      ...this.props,
      active: this.props.id === this.props.activeChatId ? 'active' : '',
    });
  }
}
