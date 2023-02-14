import Component from '../../utils/component/component';
import { compile } from '../../lib/template-engine/compile';
import tpl from './avatar.template';
import { AvatarProps } from './avatar.types';

export default class Avatar extends Component<AvatarProps> {
  render() {
    return this.compile(
      (context) => compile(tpl(), { ...context }),
      this.props,
    );
  }
}
