import Component from '../../utils/Component';
import { compile } from '../../lib/template-engine/compile';
import tpl from './button.template';
import { ButtonProps } from './button.types';

export default class Button extends Component<ButtonProps> {
  render() {
    return this.compile(context => compile(tpl(), { ...context }), this.props);
  }
}
