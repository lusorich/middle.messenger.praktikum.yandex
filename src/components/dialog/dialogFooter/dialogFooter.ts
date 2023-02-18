import MessageForm from '../../forms/message-form/message-form';
import Component from '../../../utils/component/component';
import tpl from './dialogFooter.template.hbs';

export default class DialogFooter extends Component<Record<string, unknown>> {
  init() {
    this.children.messageForm = new MessageForm();
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
