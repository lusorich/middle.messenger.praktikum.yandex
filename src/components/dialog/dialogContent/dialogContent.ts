import Message from 'src/components/message/message';
import { Indexed } from 'src/helpers/custom-utility-types';
import { connect } from 'src/utils/connect';
import Component from '../../../utils/component/component';
import tpl from './dialogContent.template.hbs';

class DialogContent extends Component<Record<string, unknown>> {
  init() {
    if (this.props.activeChatId) {
      if (!this.props.messages?.[this.props.activeChatId]) {
        this.props.messages[this.props.activeChatId] = [];
      }

      this.children.messageList = this.generateMessageList(
        this.props.messages[this.props.activeChatId],
      );
    }
  }

  protected componentDidUpdate(): boolean {
    if (this.props.activeChatId) {
      if (!this.props.messages?.[this.props.activeChatId]) {
        this.props.messages[this.props.activeChatId] = [];
      }

      this.children.messageList = this.generateMessageList(
        this.props.messages[this.props.activeChatId],
      );
    }

    return true;
  }

  render() {
    return this.compile(tpl, this.props);
  }

  generateMessageList(messages: Record<string, unknown>[]) {
    return messages.map((message) => {
      return new Message({
        message,
        isActiveUserMsg: message.user_id === this.props.userId,
      });
    });
  }
}

export default connect((state) => {
  const { id } = state.auth as any;
  const { messages, activeChatId } = state.chats as any;

  return { messages: messages ?? {}, activeChatId, userId: id } as Indexed;
})(DialogContent);
