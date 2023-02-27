import tpl from './unauthorized.template.hbs';
import Component from '../../utils/component/component';
import { UnauthorizedLayoutProps } from './unauthorized.types';

export default class UnauthorizedLayout extends Component<UnauthorizedLayoutProps> {
  render() {
    return this.compile(tpl, this.props);
  }
}
