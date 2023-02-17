export type ButtonType = 'submit' | 'button' | 'reset';
export type ButtonProps = {
  className: string;
  name: string;
  text: string;
  type: ButtonType;
  events?: Record<string, () => void>;
};
