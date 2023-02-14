import Component from '../../utils/component/component';
import { compile } from '../../lib/template-engine/compile';
import tpl from './inputAvatar.template';
import { InputAvatarProps } from './inputAvatar.types';

export default class InputAvatar extends Component<InputAvatarProps> {
  render() {
    return this.compile(
      (context) => compile(tpl(), { ...context }),
      this.props,
    );
  }
}
