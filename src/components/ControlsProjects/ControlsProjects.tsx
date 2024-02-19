import Skills from '../Skills/Skills';
import SortDateButtons from '../SortDateButtons/SortDateButtons';

interface ConrolsProjectsPropsI {
  className?: string;
  filterTagsHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  sortDateHandler?: (topDate: boolean) => void;
  activeTopDate?: boolean;
}

const ControlsProjects: React.FC<ConrolsProjectsPropsI> = ({
  className,
  filterTagsHandler,
  sortDateHandler,
  activeTopDate,
}) => {
  const classes = ['controls'];
  if (className) classes.push(className);

  return (
    <div className={classes.join(' ')}>
      <SortDateButtons
        sortDateHandler={sortDateHandler}
        activeTopDate={activeTopDate}
      />
      <Skills filterTags={filterTagsHandler} />
    </div>
  );
};

export default ControlsProjects;
