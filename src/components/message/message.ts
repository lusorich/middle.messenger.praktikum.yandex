import Component from '../../utils/component/component';
import tpl from './message.template.hbs';

export default class Message extends Component<Record<string, unknown>> {
  render() {
    return this.compile(tpl, this.props);
  }
}
