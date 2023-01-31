import tpl from './profile-edit-password.template';
import { compile } from '../../lib/template-engine/compile';
import Component from '../../utils/component/component';
import ProfilePasswordForm from '../../components/forms/profile-password-form/profile-password-form';

export default class ProfileEditPasswordPage extends Component {
  init() {
    this.children.content = new ProfilePasswordForm({});
  }

  render() {
    return this.compile(
      (context) =>
        compile(tpl(), {
          ...context,
        }),
      this.props,
    );
  }
}
