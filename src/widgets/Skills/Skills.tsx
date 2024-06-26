import { projects } from '@/shared/model/data';

interface SkillsPropsI {
  filterTags?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Skills: React.FC<SkillsPropsI> = ({ filterTags = () => {} }) => {
  const tags = new Set(['React', 'TS', 'Redux', 'SCSS', 'HTML5', 'CSS3', 'JS']);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    filterTags(event);
    const target = event.target as HTMLButtonElement;
    target.classList.toggle('tag-button--active');
  };

  projects.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });
  const tagsElements = Array.from(tags).map((tag) => {
    return (
      <li key={tag} className="skills__item">
        <button className="tag-button" onClick={buttonHandler}>
          {tag}
        </button>
      </li>
    );
  });

  return <ul className="skills">{tagsElements}</ul>;
};
