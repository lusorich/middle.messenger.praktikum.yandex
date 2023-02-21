import Component from '../../../utils/component/component';
import tpl from './dialogContent.template.hbs';

export default class DialogContent extends Component<Record<string, unknown>> {
  init() {
    console.log('this.props', this.props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
