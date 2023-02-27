import tpl from './profileEdit.template.hbs';
import Component from '../../utils/component/component';
import ProfileForm from '../../components/forms/profileForm/profileForm';

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
