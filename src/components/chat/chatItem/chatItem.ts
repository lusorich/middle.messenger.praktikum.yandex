import Component from '../../../utils/component/component';
import { compile } from '../../../lib/template-engine/compile';
import tpl from './chatItem.template';

export default class ChatItem extends Component<Record<string, unknown>> {
  render() {
    return this.compile(
      (context) => compile(tpl(), { ...context }),
      this.props,
    );
  }
}
