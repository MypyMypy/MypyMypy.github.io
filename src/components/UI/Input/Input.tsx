import { ReactNode } from 'react';
import './input.css';

interface InputProps {
  className: string;
  label: string;
  value: string;
  placeholder: string;
  elementType: string;
  changed: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  focused?: () => void;
}

const Input: React.FC<InputProps> = (props) => {
  let inputElement = null;

  const inputTypes: Record<string, ReactNode> = {
    input: (
      <input
        className="input"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.changed}
        onFocus={props.focused}
      />
    ),
    textarea: (
      <textarea
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.changed}
      />
    ),
  };

  if (props.elementType in inputTypes) {
    inputElement = inputTypes[props.elementType];
  } else {
    inputElement = inputTypes['input'];
  }

  return (
    <label className={props.className}>
      <span>{props.label}</span>
      {inputElement}
    </label>
  );
};

export default Input;
