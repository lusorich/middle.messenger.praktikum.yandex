import tpl from './inputWithLabel.template.hbs';
import Input from '../input/input';
import Component from '../../utils/component/component';
import { InputWithLabelProps } from './inputWithLabel.types';

export default class InputWithLabel extends Component<InputWithLabelProps> {
  init() {
    this.children.input = new Input({
      placeholder: this.props.placeholder,
      name: this.props.name,
      className: this.props.inputClassName,
      type: this.props.type,
      events: this.props.events,
    });
  }

  render() {
    return this.compile(tpl, {
      ...this.props,
      errorText: '',
    });
  }
}
