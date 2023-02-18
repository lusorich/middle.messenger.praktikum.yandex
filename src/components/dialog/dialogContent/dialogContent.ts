import Component from '../../../utils/component/component';
import tpl from './dialogContent.template.hbs';

export default class DialogContent extends Component<Record<string, unknown>> {
  render() {
    return this.compile(tpl, this.props);
  }
}
