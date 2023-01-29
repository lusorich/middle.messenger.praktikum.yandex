import {
  isContainsOnlyNumbers,
  isContainsSpaceChar,
  isInRange,
  isContainsOnlyAllowedChars,
} from '../../../utils/validation.helpers';

const LOGIN_REGEXP = /^[a-zA-Z\/-]+$/;
const ONLY_UPPERCASE_REGEXP = /[A-ZА-Я]+/;
const ONLY_NUMBER_REGEXP = /[1-9]+/;

export const isLoginValid = (str: string): boolean =>
  isInRange(str.length, 3, 20) &&
  isContainsOnlyAllowedChars(str, LOGIN_REGEXP) &&
  !isContainsOnlyNumbers(str) &&
  !isContainsSpaceChar(str);

export const isPasswordValid = (str: string): boolean =>
  isInRange(str.length, 8, 40) &&
  isContainsOnlyAllowedChars(str, ONLY_UPPERCASE_REGEXP) &&
  isContainsOnlyAllowedChars(str, ONLY_NUMBER_REGEXP);
