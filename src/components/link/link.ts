import Component from '../../utils/Component';
import { compile } from '../../lib/template-engine/compile';
import tpl from './link.template';

export default class Link extends Component {
  render() {
    return this.compile(context => compile(tpl(), { ...context }), this.props);
  }
}
