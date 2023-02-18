import Component from '../../utils/component/component';
import tpl from './avatar.template.hbs';
import { AvatarProps } from './avatar.types';

export default class Avatar extends Component<AvatarProps> {
  render() {
    return this.compile(tpl, this.props);
  }
}
