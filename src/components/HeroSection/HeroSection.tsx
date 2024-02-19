import SectionWrapper from '../../hoc/SectionWrapper/SectionWrapper';
import Skills from '../Skills/Skills';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const [ref, inView] = useInView();

  return (
    <SectionWrapper
      id="home"
      sectionClass={inView ? 'hero'.concat(' ', 'hero--in-view') : 'hero'}
      containerClass="hero__container"
    >
      <div ref={ref} className="hero__wrapper">
        <h1 className="hero__main-header">
          <span>Danil Bogdanchikov</span>
          <span>Frontend Developer</span>
        </h1>
        <Skills />
      </div>
      {/* TODO: Animation skills Buttons */}
    </SectionWrapper>
  );
};

export default Hero;
