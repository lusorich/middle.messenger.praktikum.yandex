import Component from '../../utils/component/component';
import { compile } from '../../lib/template-engine/compile';
import tpl from './inputAvatar.template';
import { InputAvatarProps } from './inputAvatar.types';

export default class InputAvatar extends Component<InputAvatarProps> {
  render() {
    console.log('this.props input avatar', this.props);
    return this.compile(
      (context) => compile(tpl(), { ...context }),
      this.props,
    );
  }
}
