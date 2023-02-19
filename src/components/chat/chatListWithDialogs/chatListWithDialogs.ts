import Component, { Props } from '../../../utils/component/component';
import tpl from './chatListWithDialogs.template.hbs';
import { Indexed } from 'src/helpers/custom-utility-types';
import { connect } from 'src/utils/connect';
import ChatsController from 'src/controllers/chats-controller';
import ChatItem from '../chatItem/chatItem';
import { mainRouter } from 'src/app/app';
import DialogBlock from 'src/components/dialog/dialogBlock/dialogBlock';
import Button from 'src/components/button/button';
import Link from 'src/components/link/link';
import Popup from 'src/components/popup/popup';
import AddChatForm from 'src/components/forms/add-chat-form/addChatForm';

class ChatListWithDialogs extends Component<Record<string, unknown>> {
  init() {
    ChatsController.getChats({
      data: '',
    });

    this.children.addChatPopup = new Popup({
      content: new AddChatForm(),
    });

    this.children.dialogBlock = new DialogBlock();

    this.children.chats = this.generateChatList(this.props.list ?? []);

    this.children.addChatBtn = new Button({
      name: 'addChat',
      className: 'btn btn--outline',
      type: 'button',
      text: 'Add chat',
      events: {
        click: () => {
          this.children.addChatPopup.show();
        },
      },
    });

    this.children.linkProfile = new Link({
      id: 'link-profile',
      href: '/profile',
      text: 'Профиль',
      className: 'link-profile',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          mainRouter.go('/profile');
        },
      },
    });

    this.children.addChatPopup.hide();

    this.children.addChatBtn = new Button({
      name: 'addChat',
      className: 'btn btn--outline',
      type: 'button',
      text: 'Add chat',
      events: {
        click: () => {
          this.children.addChatPopup.show();
        },
      },
    });
  }

  protected componentDidUpdate(_prevProps: Props, _nextProps: Props): boolean {
    this.children.chats = this.generateChatList(this.props.list ?? []);

    return true;
  }

  generateChatList(chatList: any) {
    return chatList.map(
      (chat: any) =>
        new ChatItem({
          ...chat,
          activeChatId: this.props.activeChatId,
          events: {
            click: () => {
              this.children.dialogBlock.setProps({
                title: chat.title,
                activeChatId: chat?.id || '',
              });
              this.setProps({ ...this.props, activeChatId: chat?.id || '' });
            },
          },
        }),
    );
  }

  render() {
    return this.compile(tpl, this.props);
  }
}

export default connect((state) => {
  return state.chats as Indexed;
})(ChatListWithDialogs);
