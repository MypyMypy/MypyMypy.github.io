import { projects as projectsData } from '../../data';
import type { Projects } from '../../data';

import ControlsProjects from '../../components/ControlsProjects/ControlsProjects';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import SectionWrapper from '../../hoc/SectionWrapper/SectionWrapper';
import { useEffect, useState } from 'react';
import scrollToUp from '../../features/scrollToUp';

const initialState = [...projectsData].sort((a, b) => {
  const aDate = new Date(Number(a.date.year), Number(a.date.month) - 1);
  const bDate = new Date(Number(b.date.year), Number(b.date.month) - 1);
  return bDate.getTime() - aDate.getTime();
});

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Projects>(initialState);
  const [activeTopDate, setActiveTopDate] = useState(true);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  useEffect(()=> {
    scrollToUp('instant');
  }, [])

  const updateProjectsByFilter = (activeFilters: string[]) => {
    if (activeFilters.length > 0) {
      setProjects(
        projects.filter((project) => {
          if (activeFilters.every((tag) => project.tags.includes(tag)))
            return project;
        })
      );
    } else setProjects(initialState);
  };

  const updateProjectsBySorting = (topDate: boolean) => {
    const updatedProjects = [...projects];
    updatedProjects.sort((a, b) => {
      const aDate = new Date(Number(a.date.year), Number(a.date.month) - 1);
      const bDate = new Date(Number(b.date.year), Number(b.date.month) - 1);
      if (topDate) return bDate.getTime() - aDate.getTime();
      else return aDate.getTime() - bDate.getTime();
    });
    setProjects(updatedProjects);
  };

  const handleFilterByTags = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const target = event.target as HTMLButtonElement;
    const tag = target.textContent;
    if (tag) {
      const isTagInFilters = activeFilters.includes(tag);

      setActiveFilters((prevState) => {
        const updatedActiveFilters = isTagInFilters
          ? prevState.filter((a) => a !== tag)
          : [...prevState, tag];
        updateProjectsByFilter(updatedActiveFilters);
        return updatedActiveFilters;
      });
    }
  };

  const handleSortByDate = (topDate: boolean) => {
    if (activeTopDate && topDate) return;
    if (!activeTopDate && !topDate) return;
    setActiveTopDate((prevState) => {
      const updatedState = !prevState;
      updateProjectsBySorting(updatedState);
      return updatedState;
    });
  };

  return (
    <SectionWrapper sectionClass="projects-page" id="projects-page">
      <h1 className="section-header projects-page__header">Projects Page.</h1>
      <ControlsProjects
        filterTagsHandler={handleFilterByTags}
        sortDateHandler={handleSortByDate}
        activeTopDate={activeTopDate}
        className="projects-page__controls"
      />
      <ProjectsList projects={projects} />
    </SectionWrapper>
  );
};

export default ProjectsPage;
