import tpl from './registration.template.hbs';
import RegistrationForm from '../../components/forms/registration-form/registration-form';
import Component from '../../utils/component/component';

export default class RegistrationPage extends Component<
Record<string, unknown>
> {
  init() {
    this.children.form = new RegistrationForm({ formTitle: 'Регистрация' });
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
