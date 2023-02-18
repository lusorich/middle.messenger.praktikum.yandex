import Component from '../../../utils/component/component';
import tpl from './chatList.template.hbs';
import { Indexed } from 'src/helpers/custom-utility-types';
import { connect } from 'src/utils/connect';
import { store } from 'src/utils/store';
import ChatsController from 'src/controllers/chats-controller';

class ChatList extends Component<Record<string, unknown>> {
  init() {
    ChatsController.getChats({
      data: '',
    });
  }

  render() {
    console.log(store.getState());
    console.log(this.props);
    return this.compile(tpl, {
      ...this.props,
      chats: ['1', '2', '3'],
    });
  }
}

export default connect((state) => {
  return state.chats as Indexed;
})(ChatList);
