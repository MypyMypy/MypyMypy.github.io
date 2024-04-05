import type { ProjectsT } from '@/shared/model/data';
import { ProjectCard } from '@/entities/ProjectCard';

interface ProjectListI {
  projects: ProjectsT;
}

export const ProjectList: React.FC<ProjectListI> = ({ projects }) => {
  const projectCards = projects.map((projectData) => {
    return (
      <li className="projects-list__item" key={projectData.name}>
        <ProjectCard
          name={projectData.name}
          imagePath={projectData.image}
          date={projectData.date}
          description={projectData.description}
          srcGit={projectData.srcGit}
          tags={projectData.tags}
          deploy={projectData.deploy}
          details={true}
        />
      </li>
    );
  });
  return <ul className="projects-list">{projectCards}</ul>;
};
