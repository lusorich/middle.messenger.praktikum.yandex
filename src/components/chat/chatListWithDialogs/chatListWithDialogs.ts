import Component, { Props } from '../../../utils/component/component';
import tpl from './chatListWithDialogs.template.hbs';
import { Indexed } from 'src/helpers/custom-utility-types';
import { connect } from 'src/utils/connect';
import ChatsController from 'src/controllers/chatsController';
import ChatItem from '../chatItem/chatItem';
import { mainRouter } from 'src/app/app';
import DialogBlock from 'src/components/dialog/dialogBlock/dialogBlock';
import Button from 'src/components/button/button';
import Link from 'src/components/link/link';
import Popup from 'src/components/popup/popup';
import PopupForm from 'src/components/forms/popupForm/popupForm';
import {
  ERROR_CHAT_NAME_MSG,
  isChatNameValid,
} from 'src/helpers/validation.helpers';
import { ACTIONS, store } from 'src/utils/store';
import MessageController from 'src/controllers/messageController';

class ChatListWithDialogs extends Component<Record<string, unknown>> {
  init() {
    store.dispatch(ACTIONS.DELETE_ACTIVE_CHAT_ID, '');

    ChatsController.getChats();

    if (
      this.props?.activeChatId &&
      this.props?.chatTokens?.[this.props.activeChatId]
    ) {
      MessageController.connect(
        store.getState()?.auth?.id ?? '',
        this.props.activeChatId,
        this.props.chatTokens[this.props.activeChatId],
      );
    }

    this.children.addChatPopup = new Popup({
      content: new PopupForm({
        name: 'chatName',
        placeholder: 'Введите наименование чата',
        errorMsg: ERROR_CHAT_NAME_MSG,
        inputValidator: isChatNameValid,
        btnText: 'Сохранить',
        successMsg: 'Чат успешно добавлен',
        formType: 'addChat',
      }),
    });

    this.children.dialogBlock = new DialogBlock();

    this.children.chats = this.generateChatList(this.props?.list ?? []);

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
      text: 'Добавить чат',
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
          lastMessage: chat?.last_message?.content || null,
          activeChatId: this.props?.activeChatId ?? '',
          events: {
            click: async () => {
              store.set('chats', {
                activeChatId: chat?.id ?? '',
                title: chat?.title ?? '',
              });

              const chatToken = await ChatsController.getChatToken(chat?.id);

              MessageController.connect(
                store.getState()?.auth?.id ?? '',
                chat?.id ?? '',
                chatToken ?? '',
              );
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
