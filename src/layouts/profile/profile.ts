import tpl from './profile.template';
import { compile } from '../../lib/template-engine/compile';
import Component from '../../utils/component/component';
import { ProfileLayoutProps } from './profile.types';
export default class ProfileLayout extends Component<ProfileLayoutProps> {
  render() {
    return this.compile(context => compile(tpl(), { ...context }), this.props);
  }
}
