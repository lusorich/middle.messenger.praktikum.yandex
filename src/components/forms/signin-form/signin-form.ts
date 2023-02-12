import { compile } from '../../../lib/template-engine/compile';
import tpl from './signin-form.template';
import Button from '../../button/button';
import Input from '../../input/input';
import Component, { Props } from '../../../utils/component/component';
import { SigninFormProps } from './signin-form.types';

import {
  isLoginValid,
  isPasswordValid,
  validate,
  ERROR_LOGIN_MSG,
  ERROR_PASSWORD_MSG,
} from '../../../helpers/validation.helpers';
import { AuthController } from 'src/controllers/auth-controller';

export default class SigninForm extends Component<SigninFormProps> {
  componentDidUpdate(prevProps: Props, nextProps: Props) {
    if (prevProps.isLoginError !== nextProps.isLoginError) {
      return true;
    }
    if (prevProps.isPasswordError !== nextProps.isPasswordError) {
      return true;
    }
    return false;
  }

  init() {
    this.setState({
      isLoginError: false,
      isPasswordError: false,
    });

    this.setProps({
      ...this.props,
      events: {
        submit: (e: SubmitEvent) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const inputLoginValue = formData.get('login') as string;
          const inputPasswordValue = formData.get('password') as string;

          const isValidLoginValue = isLoginValid(inputLoginValue);
          const isValidPasswordValue = isPasswordValid(inputPasswordValue);

          if (isValidLoginValue && isValidPasswordValue) {
            const test = new AuthController();
            test.signin({
              data: JSON.stringify({
                login: inputLoginValue,
                password: inputPasswordValue,
              }),
            });
          } else {
            validate('login', ERROR_LOGIN_MSG, isLoginValid);
            validate('password', ERROR_PASSWORD_MSG, isPasswordValid);
          }
        },
      },
    });

    this.children.inputName = new Input({
      placeholder: 'Логин',
      name: 'login',
      className: 'input input--secondary',
      type: 'text',
      events: {
        blur: () => {
          validate('login', ERROR_LOGIN_MSG, isLoginValid);
        },
        focus: () => {
          validate('login', ERROR_LOGIN_MSG, isLoginValid);
        },
      },
    });
    this.children.inputPassword = new Input({
      placeholder: 'Пароль',
      name: 'password',
      type: 'password',
      className: 'input input--secondary',
      events: {
        blur: () => {
          validate('password', ERROR_PASSWORD_MSG, isPasswordValid);
        },
        focus: () => {
          validate('password', ERROR_PASSWORD_MSG, isPasswordValid);
        },
      },
    });
    this.children.signInBtn = new Button({
      name: 'signin',
      text: 'Войти',
      className: 'btn btn--contained',
      type: 'submit',
    });
  }

  render() {
    return this.compile((context) => compile(tpl(), { ...context }), {
      ...this.props,
      errorLoginText: '',
      errorPasswordText: '',
    });
  }
}
