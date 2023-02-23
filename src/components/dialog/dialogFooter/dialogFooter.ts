import MessageForm from '../../forms/messageForm/messageForm';
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
