import DialogHeader from '../../components/dialog/dialogHeader/dialogHeader';
import ChatList from '../../components/chat/chatList/chatList';
import tpl from './main.template.hbs';
import Component from '../../utils/component/component';
import DialogContent from '../../components/dialog/dialogContent/dialogContent';
import DialogFooter from '../../components/dialog/dialogFooter/dialogFooter';
import Button from 'src/components/button/button';
import Popup from 'src/components/popup/popup';
import AddChatForm from 'src/components/forms/add-chat-form/addChatForm';

export default class MainPage extends Component<Record<string, unknown>> {
  init() {
    this.children.chatList = new ChatList() as any;
    this.children.dialogHeader = new DialogHeader();
    this.children.dialogContent = new DialogContent();
    this.children.dialogFooter = new DialogFooter();

    this.children.addChatPopup = new Popup({
      content: new AddChatForm(),
    });

    this.children.addChatPopup.hide();

    this.children.addChatBtn = new Button({
      name: 'addChat',
      className: '',
      type: 'button',
      text: 'Add chat',
      events: {
        click: () => {
          this.children.addChatPopup.show();
        },
      },
    });
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
