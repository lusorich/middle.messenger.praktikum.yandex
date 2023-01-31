export const isInRange = (value: number, min: number, max: number): boolean =>
  value >= min && value <= max;
export const isContainsSpaceChar = (str: string): boolean => str.includes(' ');
export const isContainsOnlyNumbers = (str: string): boolean => !!Number(str);
export const isContainsOnlyAllowedChars = (str: string, reg: RegExp): boolean =>
  reg.test(str);

const NAME_LATINIC_REGEXP = /^[A-Z]{1}[A-Za-z-]+$/;
const NAME_CYRILLIC_REGEXP = /^[А-Я]{1}[А-Яа-я-]+$/;
const EMAIL_REGEXP = /[\w]*[@]{1}[\w{1}]*[.{1}][\w]+$/;
const LOGIN_REGEXP = /^[a-zA-Z\/-]+$/;
const PHONE_REGEXP = /^[+|\d]{1,1}?[\d]+$/;
const ONLY_UPPERCASE_REGEXP = /[A-ZА-Я]+/;
const ONLY_NUMBER_REGEXP = /[1-9]+/;

export const ERROR_LOGIN_MSG = 'Ошибка ввода логина';
export const ERROR_PASSWORD_MSG = 'Ошибка ввода пароля';
export const ERROR_FIRST_NAME_MSG = 'Ошибка ввода имени';
export const ERROR_SECOND_NAME_MSG = 'Ошибка ввода фамилии';
export const ERROR_EMAIL_MSG = 'Ошибка ввода почты';
export const ERROR_PHONE_MSG = 'Ошибка ввода телефона';

export const isLoginValid = (str: string): boolean =>
  isInRange(str.length, 3, 20) &&
  isContainsOnlyAllowedChars(str, LOGIN_REGEXP) &&
  !isContainsOnlyNumbers(str) &&
  !isContainsSpaceChar(str);

export const isNameValid = (str: string): boolean =>
  (isContainsOnlyAllowedChars(str, NAME_LATINIC_REGEXP) ||
    isContainsOnlyAllowedChars(str, NAME_CYRILLIC_REGEXP)) &&
  !isContainsSpaceChar(str) &&
  !isContainsOnlyAllowedChars(str, ONLY_NUMBER_REGEXP);

export const isPasswordValid = (str: string): boolean =>
  isInRange(str.length, 8, 40) &&
  isContainsOnlyAllowedChars(str, ONLY_UPPERCASE_REGEXP) &&
  isContainsOnlyAllowedChars(str, ONLY_NUMBER_REGEXP);

export const isEmailValid = (str: string): boolean =>
  isContainsOnlyAllowedChars(str, EMAIL_REGEXP);

export const isPhoneValid = (str: string): boolean =>
  isInRange(str.length, 10, 15) &&
  isContainsOnlyAllowedChars(str, PHONE_REGEXP);

export const validate = (
  inputElementId: string,
  errorText: string,
  validateFn: (value: string) => boolean,
) => {
  const inputElement: HTMLInputElement | null = document.getElementById(
    inputElementId,
  ) as HTMLInputElement;

  if (inputElement) {
    const { parentElement, value } = inputElement;
    const errorEl = parentElement?.querySelector('span');
    errorEl!.className = '';

    if (!validateFn(value)) {
      errorEl?.classList.add('input__error');
      errorEl!.textContent = errorText;
    } else {
      errorEl?.classList.add('input__error', 'visually-hidden');
      errorEl!.textContent = '';
    }
  }
};
