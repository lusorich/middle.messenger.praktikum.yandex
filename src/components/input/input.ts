import Component from '../../utils/component/component';
import { compile } from '../../lib/template-engine/compile';
import tpl from './input.template';
import { InputProps } from './input.types';

export default class Input extends Component<InputProps> {
  render() {
    return this.compile(
      (context) => compile(tpl(), { ...context }),
      this.props,
    );
  }
}
