import { useInView } from 'react-intersection-observer';

interface RoadMapPropsI {
  className?: string;
}

const Roadmap: React.FC<RoadMapPropsI> = ({ className }) => {
  const classes = className ? 'roadmap'.concat(' ', className) : 'roadmap';
  const [ref, inView] = useInView({
    delay: 200,
  });

  return (
    <div
      ref={ref}
      className={inView ? classes.concat(' ', 'roadmap--in-view') : classes}
    >
      <h3 className="sub-header">RoadMap</h3>
      <ul className="roadmap__list">
        <li className="roadmap__item">
          <strong className="roadmap__header">
            Bachelor&apos;s degree in Computer Science and Information
            Technologies in Education
          </strong>
          <span className="roadmap__time">2023</span>
        </li>
        <li className="roadmap__item">
          <strong className="roadmap__header">
            Master&apos;s degree in Web Technologies
          </strong>
          <span className="roadmap__time">2023 - 2025</span>
        </li>
      </ul>
    </div>
  );
};

export default Roadmap;
