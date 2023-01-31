import tpl from './profile-edit.template';
import { compile } from '../../lib/template-engine/compile';
import Component from '../../utils/component/component';
import ProfileForm from '../../components/forms/profile-form/profile-form';

export default class ProfileEditPage extends Component {
  init() {
    this.children.content = new ProfileForm({});
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
