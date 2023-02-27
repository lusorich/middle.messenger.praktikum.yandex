import Component from '../../utils/component/component';
import tpl from './button.template.hbs';
import { ButtonProps } from './button.types';

export default class Button extends Component<ButtonProps> {
  render() {
    return this.compile(tpl, this.props);
  }
}
