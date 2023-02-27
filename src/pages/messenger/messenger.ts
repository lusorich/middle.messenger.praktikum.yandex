import tpl from './messenger.template.hbs';
import Component from '../../utils/component/component';
import ChatListWithDialogs from '../../components/chat/chatListWithDialogs/chatListWithDialogs';

export default class MessengerPage extends Component<Record<string, unknown>> {
  init() {
    this.children.chatList = new ChatListWithDialogs() as any;
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
