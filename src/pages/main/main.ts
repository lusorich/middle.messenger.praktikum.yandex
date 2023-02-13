import DialogHeader from '../../components/dialog/dialogHeader/dialogHeader';
import ChatItem from '../../components/chat/chatItem/chatItem';
import tpl from './main.template';
import { compile } from '../../lib/template-engine/compile';
import Component from '../../utils/component/component';
import DialogContent from '../../components/dialog/dialogContent/dialogContent';
import DialogFooter from '../../components/dialog/dialogFooter/dialogFooter';
import { store } from 'src/utils/store';

export default class MainPage extends Component<Record<string, unknown>> {
  init() {
    this.children.chatItem = new ChatItem();
    this.children.dialogHeader = new DialogHeader();
    this.children.dialogContent = new DialogContent();
    this.children.dialogFooter = new DialogFooter();

    console.log(store.getState());
  }

  render() {
    return this.compile(
      (context) =>
        compile(tpl(), {
          ...context,
        }),
      this.props,
    );
  }
}
