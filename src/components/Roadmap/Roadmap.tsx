import { useInView } from 'react-intersection-observer';
import { roadmap } from '../../data';

interface RoadMapPropsI {
  className?: string;
}

const Roadmap: React.FC<RoadMapPropsI> = ({ className }) => {
  const classes = className ? 'roadmap'.concat(' ', className) : 'roadmap';
  const [ref, inView] = useInView({
    delay: 200,
  });
  const roadmapItems = roadmap.map((item, index) => {
    return (
      <li key={index} className="roadmap__item">
        <strong className="roadmap__header">{item.title}</strong>
        <span className="roadmap__time">{item.date}</span>
      </li>
    );
  });

  return (
    <div
      ref={ref}
      className={inView ? classes.concat(' ', 'roadmap--in-view') : classes}
    >
      <h3 className="sub-header">RoadMap</h3>
      <ul className="roadmap__list">{roadmapItems}</ul>
    </div>
  );
};

export default Roadmap;
