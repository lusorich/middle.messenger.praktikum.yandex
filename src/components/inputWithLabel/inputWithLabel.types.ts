export type InputWithLabelProps = {
  wrapperClassName: string;
  name: string;
  labelText: string;
  placeholder: string;
  inputClassName: string;
  type: string;
  value?: string;
  events: Record<string, () => void>;
};
