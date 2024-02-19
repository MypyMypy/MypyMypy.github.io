import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import { useAppDispatch } from '../../hooks/hooks';
import { switchActiveSection } from '../../store/activeSection/activeSection';

interface SectionWrapperI {
  children: React.ReactNode;
  sectionClass?: string;
  containerClass?: string;
  id: string;
}

const SectionWrapper: React.FC<SectionWrapperI> = (props) => {
  const containerClasses = ['container', props.containerClass].join(' ').trim();
  const sectionId = props.id;

  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(switchActiveSection({ inView, sectionId }));
  }, [inView, dispatch, sectionId]);

  return (
    <section ref={ref} className={props.sectionClass} id={props.id}>
      <div className={containerClasses}>{props.children}</div>
    </section>
  );
};

export default SectionWrapper;
