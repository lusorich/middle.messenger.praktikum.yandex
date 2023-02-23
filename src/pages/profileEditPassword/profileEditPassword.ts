import tpl from './profileEditPassword.template.hbs';
import Component from '../../utils/component/component';
import ProfilePasswordForm from '../../components/forms/profilePasswordForm/profilePasswordForm';
import Avatar from 'src/components/avatar/avatar';
import { connect } from 'src/utils/connect';
import { Indexed } from 'src/helpers/custom-utility-types';

class ProfileEditPasswordPage extends Component<Record<string, unknown>> {
  init() {
    this.children.content = new ProfilePasswordForm({});

    this.children.avatar = new Avatar({
      alt: 'Аватар пользователя',
      size: 'xl',
      src:
        `https://ya-praktikum.tech/api/v2/resources/${this.props.avatar}` ?? '',
    });
  }

  render() {
    return this.compile(tpl, this.props);
  }
}

export default connect((state) => {
  return state.auth as Indexed;
})(ProfileEditPasswordPage);
