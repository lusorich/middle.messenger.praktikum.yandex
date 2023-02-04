import Component from '../../utils/component/component';
import { compile } from '../../lib/template-engine/compile';
import tpl from './link.template';

export default class Link extends Component<Record<string, unknown>> {
  render() {
    return this.compile(
      (context) => compile(tpl(), { ...context }),
      this.props,
    );
  }
}
