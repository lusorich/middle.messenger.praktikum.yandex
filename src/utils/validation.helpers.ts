export const isInRange = (value: number, min: number, max: number): boolean =>
  value >= min && value <= max;
export const isContainsSpaceChar = (str: string): boolean => str.includes(' ');
export const isContainsOnlyNumbers = (str: string): boolean => !!Number(str);
export const isContainsOnlyAllowedChars = (str: string, reg: RegExp): boolean =>
  reg.test(str);
