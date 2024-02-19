import { ReactNode } from 'react';
import './button.css';

interface ButtonProps {
  clicked: (event: React.MouseEvent<HTMLButtonElement>, value: string) => void;
  children?: ReactNode;
  className: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    props.clicked(event, '');
  };

  const buttonClasses = [props.className, 'button'].join(' ');

  return (
    <button className={buttonClasses} onClick={onClickHandler}>
      {props.children}
    </button>
  );
};

export default Button;
