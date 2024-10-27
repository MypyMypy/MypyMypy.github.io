import { useInView } from 'react-intersection-observer';

import { SectionWrapper } from '../../providers';
import { Skills } from '@/widgets/Skills';

export const HeroSection: React.FC = () => {
  const [ref, inView] = useInView();

  return (
    <SectionWrapper
      id="home"
      sectionClass={inView ? 'hero hero--in-view' : 'hero'}
      containerClass="hero__container"
    >
      <div ref={ref} className="hero__wrapper">
        <h1 className="hero__main-header">
          <span>Danil Bogdanchikov</span>
          <span>Frontend Developer 4+ years</span>
        </h1>
        <Skills />
      </div>
    </SectionWrapper>
  );
};
