import MessageForm from '../../forms/message-form/message-form';
import { compile } from '../../../lib/template-engine/compile';
import Component from '../../../utils/component/component';
import tpl from './dialogFooter.template';

export default class DialogFooter extends Component<Record<string, unknown>> {
  init() {
    this.children.messageForm = new MessageForm();
  }

  render() {
    return this.compile((context) => compile(tpl(), { ...context }), {
      ...this.props,
    });
  }
}
