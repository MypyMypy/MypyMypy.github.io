import { ReactNode } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './modal.css';

interface ModalProps {
  children: ReactNode;
  show: boolean;
  clicked: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, show, clicked }) => {
  let modal = null;
  if (show) {
    modal = (
      <>
        <Backdrop clicked={clicked} />
        <div className="modal">{children}</div>
      </>
    );
  }
  return <>{modal}</>;
};

export default Modal;
