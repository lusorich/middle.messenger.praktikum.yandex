import Component from '../../utils/component/component';
import tpl from './link.template.hbs';

export default class Link extends Component<Record<string, unknown>> {
  render() {
    return this.compile(tpl, this.props);
  }
}
