import Component from '../../utils/component/component';
import tpl from './inputAvatar.template.hbs';
import { InputAvatarProps } from './inputAvatar.types';

export default class InputAvatar extends Component<InputAvatarProps> {
  render() {
    return this.compile(tpl, this.props);
  }
}
