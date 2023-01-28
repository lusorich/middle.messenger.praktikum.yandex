import tpl from './unauthorized.template';
import { compile } from '../../lib/template-engine/compile';
import Component from '../../utils/Component';
import { UnauthorizedLayoutProps } from './unauthorized.types';

export default class UnauthorizedLayout extends Component<UnauthorizedLayoutProps> {
  render() {
    return this.compile(context => compile(tpl(), { ...context }), this.props);
  }
}
