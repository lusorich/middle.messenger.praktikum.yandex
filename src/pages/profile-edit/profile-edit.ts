import tpl from './profile-edit.template.hbs';
import Component from '../../utils/component/component';
import ProfileForm from '../../components/forms/profile-form/profile-form';

export default class ProfileEditPage extends Component<
Record<string, unknown>
> {
  init() {
    this.children.content = new ProfileForm({}) as any;
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
