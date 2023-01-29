import { compile } from '../../../lib/template-engine/compile';
import tpl from './signin-form.template';
import Button from '../../button/button';
import Input from '../../input/input';
import Component from '../../../utils/component/component';
import { SigninFormProps } from './signin-form.types';
import { Props } from 'src/utils/component/component.types';
import { isLoginValid, isPasswordValid } from './signin-form.helpers';

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
            this.setState({
              isLoginError: false,
              isPasswordError: false,
            });
            console.log('login, password', inputLoginValue, inputPasswordValue);
          } else {
            this.setState({
              isLoginError: !isValidLoginValue,
              isPasswordError: !isValidPasswordValue,
            });
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
        blur: (e: Event & { target: HTMLInputElement }) => {
          e.preventDefault();
          this.setState({
            isLoginError: !isLoginValid(e.target.value ?? ''),
          });
        },
      },
    });
    this.children.inputPassword = new Input({
      placeholder: 'Пароль',
      name: 'password',
      type: 'password',
      className: 'input input--secondary',
      events: {
        blur: (e: Event & { target: HTMLInputElement }) => {
          e.preventDefault();
          this.setState({
            isPasswordError: !isPasswordValid(e.target.value ?? ''),
          });
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
    return this.compile(context => compile(tpl(), { ...context }), {
      ...this.props,
      inputLoginErrorClassName: this.state.isLoginError
        ? 'input__error'
        : 'input__error visually-hidden',
      inputPasswordErrorClassName: this.state.isPasswordError
        ? 'input__error'
        : 'input__error visually-hidden',
      errorLoginText: this.state.isLoginError && 'Ошибка ввода логина',
      errorPasswordText: this.state.isPasswordError && 'Ошибка ввода пароля',
    });
  }
}
