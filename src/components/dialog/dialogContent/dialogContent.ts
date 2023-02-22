import { Indexed } from 'src/helpers/custom-utility-types';
import { connect } from 'src/utils/connect';
import Component, { Props } from '../../../utils/component/component';
import tpl from './dialogContent.template.hbs';

class DialogContent extends Component<Record<string, unknown>> {
  init() {}

  protected componentDidUpdate(prevProps: Props, nextProps: Props): boolean {
    console.log('prevProps, nextProps', prevProps, nextProps);

    return true;
  }

  render() {
    return this.compile(tpl, this.props);
  }
}

export default connect((state) => {
  const { messages, activeChatId } = state.chats as any;

  return { messages, activeChatId } as Indexed;
})(DialogContent);
