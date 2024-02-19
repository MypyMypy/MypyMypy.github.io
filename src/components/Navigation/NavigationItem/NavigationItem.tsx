import smothScrollLink from '../../../features/smothScrollLink';

interface NavigationItemProps {
  className?: string;
  path: string;
  children: React.ReactNode;
  active: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  className,
  path,
  children,
  active,
}) => {
  return (
    <li className={className}>
      <a
        href={path}
        className={
          active
            ? 'navigation__link navigation__link--active'
            : 'navigation__link'
        }
        onClick={smothScrollLink}
      >
        {children}
      </a>
    </li>
  );
};

export default NavigationItem;
