import tpl from './registration.template';
import RegistrationForm from '../../components/forms/registration-form/registration-form';
import { compile } from '../../lib/template-engine/compile';
import Component from '../../utils/component/component';

export default class RegistrationPage extends Component {
  init() {
    this.children.form = new RegistrationForm({ formTitle: 'Регистрация' });
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
