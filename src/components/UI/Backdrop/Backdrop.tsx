import './backdrop.css';

interface BackDropProps {
  clicked: () => void;
}

const backdrop: React.FC<BackDropProps> = ({ clicked }) => {
  return <div className="backdrop" onClick={clicked}></div>;
};

export default backdrop;
