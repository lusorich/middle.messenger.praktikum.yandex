import tpl from './profile.template.hbs';
import Component from '../../utils/component/component';
import { ProfileLayoutProps } from './profile.types';

export default class ProfileLayout extends Component<ProfileLayoutProps> {
  render() {
    return this.compile(tpl, this.props);
  }
}
