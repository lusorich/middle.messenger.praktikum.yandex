import { compile } from '../../../lib/template-engine/compile';
import Component from '../../../utils/component/component';
import tpl from './dialogHeader.template';

export default class DialogHeader extends Component<Record<string, unknown>> {
  render() {
    return this.compile((context) => compile(tpl(), { ...context }), {
      ...this.props,
    });
  }
}
