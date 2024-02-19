import ProjectCard from '../ProjectCard/ProjectCard';
import type { Projects } from '../../data';

interface ProjectsListI {
  projects: Projects;
}

const ProjectsList: React.FC<ProjectsListI> = ({ projects }) => {
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

export default ProjectsList;
