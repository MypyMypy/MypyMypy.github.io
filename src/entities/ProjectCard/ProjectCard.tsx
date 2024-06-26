import gitPagesIcon from '@/shared/assets/images/github-pages.webp';
import gitHubIcon from '@/shared/assets/images/icons/github-icon.svg';

interface ProjectCardPropsI {
  name: string;
  description: string;
  date: {
    year: string;
    month: string;
  };
  tags: string[];
  deploy: string;
  srcGit: string;
  imagePath: string;
  details?: boolean;
}

export const ProjectCard: React.FC<ProjectCardPropsI> = (props) => {
  const className = 'project-card';

  const details = props.details ? (
    <div className={className + '__details'}>
      <a
        className={className + '__details-link'}
        href={props.deploy}
        target="_blank"
        rel="noreferrer"
      >
        <img src={gitPagesIcon} alt="GitHub Pages" />
      </a>
      <a
        className={className + '__details-link'}
        href={props.srcGit}
        target="_blank"
        rel="noreferrer"
      >
        <img src={gitHubIcon} alt="GitHub" />
      </a>
    </div>
  ) : null;

  return (
    <article className={className}>
      {details ? (
        <span className={className + '__date'}>
          {props.date.year + ' / ' + props.date.month}
        </span>
      ) : null}
      <div className={className + '__top'}>
        <a
          className={className + '__deploy-link'}
          href={props.deploy}
          target="_blank"
          rel="noreferrer"
        ></a>
        <img
          className={className + '__image'}
          src={props.imagePath}
          alt="name"
        />
        <ul className={className + '__filters-list'}>
          {props.tags.map((tag) => {
            return (
              <li key={tag} className={className + '__filters-item'}>
                <button className="tag-button">{tag}</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={className + '__bottom'}>
        <h3 className={className + '__title'}>{props.name}</h3>
        <p className={className + '__description'}>{props.description}</p>
      </div>
      {details}
    </article>
  );
};
