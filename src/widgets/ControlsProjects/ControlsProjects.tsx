import arrow from '@/shared/assets/images/icons/arrow-down.svg';
import { Skills } from '@/widgets/Skills';

import { useAppSelector, useAppDispatch } from '@/shared/hooks';
import { filterByTags, sortByDate } from '@/shared/reducers';

interface ConrolsProjectsPropsI {
  className?: string;
}

export const ControlsProjects: React.FC<ConrolsProjectsPropsI> = ({
  className,
}) => {
  const isTop = useAppSelector((state) => state.projects.isTop);
  const dispatch = useAppDispatch();

  const handleFilterByTags = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    const tag = target.textContent;
    dispatch(filterByTags(tag));
  };

  const handleSortByDate = () => {
    dispatch(sortByDate());
  };

  return (
    <div className={`${className ? className : ''} controls`}>
      <button
        type="button"
        className={
          isTop
            ? 'sort-date-button sort-date-button--top'
            : 'sort-date-button sort-date-button--down'
        }
        onClick={() => handleSortByDate()}
      >
        <img
          className="sort-date-button__image"
          src={arrow}
          alt="Date top"
        ></img>
        <img
          className="sort-date-button__image"
          src={arrow}
          alt="Date down"
        ></img>
      </button>
      <Skills filterTags={handleFilterByTags} />
    </div>
  );
};
