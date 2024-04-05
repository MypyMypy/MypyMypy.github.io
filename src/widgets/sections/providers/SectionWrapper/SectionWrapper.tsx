import { useInView } from 'react-intersection-observer';

import { useAppDispatch } from '@/shared/hooks';
import { switchActiveSection } from '@/shared/reducers/activeSectionSlice';

interface SectionWrapperI {
  children: React.ReactNode;
  sectionClass?: string;
  containerClass?: string;
  id: string;
}

export const SectionWrapper: React.FC<SectionWrapperI> = (props) => {
  const containerClasses = ['container', props.containerClass].join(' ').trim();
  const sectionId = props.id;
  const dispatch = useAppDispatch();

  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView) => dispatch(switchActiveSection({ inView, sectionId })),
  });

  return (
    <section ref={ref} className={props.sectionClass} id={props.id}>
      <div className={containerClasses}>{props.children}</div>
    </section>
  );
};
