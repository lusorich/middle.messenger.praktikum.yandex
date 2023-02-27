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
  value?: string;
  events?: Record<string, (e: Event & { target: HTMLInputElement }) => void>;
};
