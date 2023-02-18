import Component from '../../../utils/component/component';
import tpl from './chatList.template.hbs';
import { Indexed } from 'src/helpers/custom-utility-types';
import { connect } from 'src/utils/connect';
import { store } from 'src/utils/store';

class ChatList extends Component<Record<string, unknown>> {
  render() {
    console.log(store.getState());
    return this.compile(tpl, {
      ...this.props,
      chatList: ['1', '2', '3'],
    });
  }
}

export default connect((state) => {
  return state.auth as Indexed;
})(ChatList);
