import tpl from './profileForm.template.hbs';
import Component from '../../../utils/component/component';
import InputWithLabel from '../../inputWithLabel/inputWithLabel';
import Button from '../../button/button';
import {
  ERROR_EMAIL_MSG,
  ERROR_FIRST_NAME_MSG,
  ERROR_LOGIN_MSG,
  ERROR_PHONE_MSG,
  ERROR_SECOND_NAME_MSG,
  isEmailValid,
  isLoginValid,
  isNameValid,
  isPhoneValid,
  validate,
} from '../../../helpers/validation.helpers';
import UserController from 'src/controllers/userController';
import InputAvatar from 'src/components/inputAvatar/inputAvatar';
import { connect } from 'src/utils/connect';
import { Indexed } from 'src/helpers/custom-utility-types';

const fieldUpdate = {
  inputAvatar: {
    componentProp: 'src',
    dataProp: 'avatar',
  },
  inputFirstName: {
    componentProp: 'value',
    dataProp: 'first_name',
  },
  inputSecondName: {
    componentProp: 'value',
    dataProp: 'second_name',
  },
  inputDisplayName: {
    componentProp: 'value',
    dataProp: 'display_name',
  },
  inputLogin: {
    componentProp: 'value',
    dataProp: 'login',
  },
  inputEmail: {
    componentProp: 'value',
    dataProp: 'email',
  },
  inputPhone: {
    componentProp: 'value',
    dataProp: 'phone',
  },
};

class ProfileForm extends Component<Record<string, unknown>> {
  componentDidUpdate(
    oldProps: Record<string, unknown>,
    newProps: Record<string, unknown>,
  ): boolean {
    if (!this.children) return false;

    for (const [key, component] of Object.entries(this.children)) {
      if (
        oldProps[fieldUpdate[key as keyof typeof fieldUpdate]?.dataProp] !==
        newProps[fieldUpdate[key as keyof typeof fieldUpdate]?.dataProp]
      ) {
        component.setProps({
          ...component.props,
          [fieldUpdate[key as keyof typeof fieldUpdate]?.componentProp]:
            this.props[fieldUpdate[key as keyof typeof fieldUpdate]?.dataProp],
        });
      }
    }

    return true;
  }

  init() {
    this.children.inputFirstName = new InputWithLabel({
      labelText: 'Имя',
      value: this.props.first_name ?? '',
      name: 'first_name',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
      type: 'text',
      placeholder: 'Введите имя',
      events: {
        blur: () => {
          validate('first_name', ERROR_FIRST_NAME_MSG, isNameValid);
        },
        focus: () => {
          validate('first_name', ERROR_FIRST_NAME_MSG, isNameValid);
        },
      },
    });
    this.children.inputSecondName = new InputWithLabel({
      labelText: 'Фамилия',
      value: this.props.second_name ?? '',
      placeholder: 'Введите фамилию',
      name: 'second_name',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
      type: 'text',
      events: {
        blur: () => {
          validate('second_name', ERROR_SECOND_NAME_MSG, isNameValid);
        },
        focus: () => {
          validate('second_name', ERROR_SECOND_NAME_MSG, isNameValid);
        },
      },
    });
    this.children.inputDisplayName = new InputWithLabel({
      labelText: 'Отображаемое имя',
      value: this.props.display_name ?? '',
      placeholder: 'Введите отображаемое имя',
      name: 'display_name',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
      type: 'text',
      events: {
        blur: () => {
          validate('display_name', ERROR_FIRST_NAME_MSG, isNameValid);
        },
        focus: () => {
          validate('display_name', ERROR_FIRST_NAME_MSG, isNameValid);
        },
      },
    });
    this.children.inputLogin = new InputWithLabel({
      labelText: 'Логин',
      value: this.props.login ?? '',
      placeholder: 'Введите логин',
      name: 'login',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
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
    this.children.inputEmail = new InputWithLabel({
      labelText: 'Почта',
      value: this.props.email ?? '',
      placeholder: 'Введите почту',
      name: 'email',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
      type: 'email',
      events: {
        blur: () => {
          validate('email', ERROR_EMAIL_MSG, isEmailValid);
        },
        focus: () => {
          validate('email', ERROR_EMAIL_MSG, isEmailValid);
        },
      },
    });
    this.children.inputPhone = new InputWithLabel({
      labelText: 'Телефон',
      value: this.props.phone ?? '',
      placeholder: 'Введите телефон',
      name: 'phone',
      type: 'tel',
      wrapperClassName: 'wrapper-profile-form',
      inputClassName: 'input input-form',
      events: {
        blur: () => {
          validate('phone', ERROR_PHONE_MSG, isPhoneValid);
        },
        focus: () => {
          validate('phone', ERROR_PHONE_MSG, isPhoneValid);
        },
      },
    });
    this.children.saveBtn = new Button({
      name: 'save',
      text: 'Сохранить',
      className: 'btn btn--contained',
      type: 'submit',
    });

    this.children.inputAvatar = new InputAvatar({
      events: {
        change: (e: Event) => {
          const formData = new FormData();
          const file = (<HTMLInputElement>e.target).files?.[0] ?? '';

          formData.append('avatar', file);

          UserController.changeAvatar(formData);
        },
      },
      src: this.props.avatar ?? '',
    });

    this.setProps({
      ...this.props,
      events: {
        submit: (e: SubmitEvent) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);

          const firstName = formData.get('first_name') as string;
          const secondName = formData.get('second_name') as string;
          const displayName = formData.get('display_name') as string;
          const login = formData.get('login') as string;
          const email = formData.get('email') as string;
          const phone = formData.get('phone') as string;

          const isValidFirstName = isNameValid(firstName);
          const isValidSecondName = isNameValid(secondName);
          const isValidDisplayName = isNameValid(displayName);
          const isValidLogin = isLoginValid(login);
          const isValidEmail = isEmailValid(email);
          const isValidPhone = isPhoneValid(phone);

          if (
            isValidFirstName &&
            isValidSecondName &&
            isValidLogin &&
            isValidEmail &&
            isValidDisplayName &&
            isValidPhone
          ) {
            UserController.changeProfile({
              data: JSON.stringify({
                first_name: firstName,
                second_name: secondName,
                display_name: displayName,
                login,
                email,
                phone,
              }),
            });
          } else {
            validate('first_name', ERROR_FIRST_NAME_MSG, isNameValid);
            validate('second_name', ERROR_SECOND_NAME_MSG, isNameValid);
            validate('display_name', ERROR_FIRST_NAME_MSG, isNameValid);
            validate('login', ERROR_LOGIN_MSG, isLoginValid);
            validate('email', ERROR_EMAIL_MSG, isEmailValid);
            validate('phone', ERROR_PHONE_MSG, isPhoneValid);
          }
        },
      },
    });
  }

  render() {
    return this.compile(tpl, this.props);
  }
}

export default connect((state) => {
  return state.auth as Indexed;
})(ProfileForm);
