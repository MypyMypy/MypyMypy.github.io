import { useAppSelector } from '@/shared/hooks';

import { SectionWrapper } from '@/widgets/sections/providers';
import { ControlsProjects } from '@/widgets/ControlsProjects';
import { ProjectList } from '@/widgets/ProjectList';

export const ProjectsDemoSection: React.FC = () => {
  const projects = useAppSelector((state) => state.projects);

  return (
    <SectionWrapper sectionClass="projects-page" id="projects-page">
      <h1 className="section-header projects-page__header">Projects Page.</h1>
      <ControlsProjects className="projects-page__controls" />
      <ProjectList projects={projects.projects} />
    </SectionWrapper>
  );
};
