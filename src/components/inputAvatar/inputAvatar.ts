import Component from '../../utils/component/component';
import tpl from './inputAvatar.template.hbs';
import { InputAvatarProps } from './inputAvatar.types';

export default class InputAvatar extends Component<InputAvatarProps> {
  render() {
    console.log('this.props input avatar', this.props);
    return this.compile(tpl, this.props);
  }
}
