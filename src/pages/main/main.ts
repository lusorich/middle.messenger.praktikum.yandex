import tpl from './main.template.hbs';
import Component from '../../utils/component/component';
import ChatListWithDialogs from '../../components/chat/chatListWithDialogs/chatListWithDialogs';

export default class MainPage extends Component<Record<string, unknown>> {
  init() {
    this.children.chatList = new ChatListWithDialogs() as any;
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
