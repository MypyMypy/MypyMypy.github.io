import './backdrop.css';

interface BackDropProps {
  clicked: () => void;
}

export const Backdrop: React.FC<BackDropProps> = ({ clicked }) => {
  return <div className="backdrop" onClick={clicked}></div>;
};
