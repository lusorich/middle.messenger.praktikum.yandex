import Component from '../../../utils/component/component';
import tpl from './dialogHeader.template.hbs';

export default class DialogHeader extends Component<Record<string, unknown>> {
  render() {
    return this.compile(tpl, {
      ...this.props,
    });
  }
}
