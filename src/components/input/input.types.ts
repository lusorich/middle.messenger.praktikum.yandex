export type InputType =
  | 'text'
  | 'password'
  | 'file'
  | 'tel'
  | 'email'
  | 'date'
  | 'range'
  | 'number';

export type InputProps = {
  name: string;
  placeholder: string;
  type: InputType;
  className: string;
};
