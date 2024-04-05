import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionWrapper } from '../../providers';
import 'swiper/scss';

import { projects } from '@/shared/model/data';
import { ProjectCard } from '@/entities/ProjectCard';

export const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView();

  const slides = [];
  let projectsInSlide = [];
  let countProjectsInSlide = 1;
  const viewPortWidth = window.innerWidth;
  if (viewPortWidth >= 768) countProjectsInSlide = 2;
  if (viewPortWidth >= 1440) countProjectsInSlide = 3;

  for (let i = 0; i < projects.length; i++) {
    const projectData = projects[i];
    const project = (
      <ProjectCard
        key={projectData.name}
        name={projectData.name}
        imagePath={projectData.image}
        date={projectData.date}
        description={projectData.description}
        srcGit={projectData.srcGit}
        tags={projectData.tags}
        deploy={projectData.deploy}
      />
    );
    projectsInSlide.push(project);
    if (
      projectsInSlide.length === countProjectsInSlide ||
      (projectsInSlide.length && projects[i + 1] === undefined)
    ) {
      const slide = (
        <SwiperSlide key={projectData.name}>{projectsInSlide}</SwiperSlide>
      );
      slides.push(slide);
      projectsInSlide = [];
    }
  }

  return (
    <SectionWrapper
      sectionClass={inView ? 'projects projects--in-view' : 'projects'}
      id="projects"
    >
      <h2 className="section-header">Projects.</h2>
      <div ref={ref} className="projects__content-wrapper">
        <Swiper className="projects__swiper" spaceBetween={'50px'}>
          {slides}
        </Swiper>
        <p className="projects__text">
          Lets see{' '}
          <Link className="accent" to="/projects">
            all my projects.
          </Link>
        </p>
      </div>
    </SectionWrapper>
  );
};
