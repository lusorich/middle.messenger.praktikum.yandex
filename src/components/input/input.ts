import Component from '../../utils/component/component';
import tpl from './input.template.hbs';
import { InputProps } from './input.types';

export default class Input extends Component<InputProps> {
  render() {
    return this.compile(tpl, this.props);
  }
}
