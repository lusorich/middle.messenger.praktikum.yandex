import tpl from './profile-edit-password.template.hbs';
import Component from '../../utils/component/component';
import ProfilePasswordForm from '../../components/forms/profile-password-form/profile-password-form';

export default class ProfileEditPasswordPage extends Component<
Record<string, unknown>
> {
  init() {
    this.children.content = new ProfilePasswordForm({});
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
