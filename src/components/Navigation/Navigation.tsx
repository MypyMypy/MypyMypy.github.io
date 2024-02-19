import NavigationItem from './NavigationItem/NavigationItem';

import { useAppSelector } from '../../hooks/hooks';
import { Link, useLocation } from 'react-router-dom';

interface NavigationPropsI {
  className?: string;
}

const Navigation: React.FC<NavigationPropsI> = ({ className }) => {
  const links = useAppSelector((state) => state.navLinks);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const classes = ['navigation'];
  if (className) classes.push(className);

  return (
    <nav className={classes.join(' ')}>
      <ul className="navigation__list">
        {isHome ? (
          links.map((link) => {
            return (
              <NavigationItem
                key={link.hash}
                path={link.hash}
                className="navigation__item"
                active={link.active}
              >
                {link.name}
              </NavigationItem>
            );
          })
        ) : (
          <Link to={'/'}>Go home</Link>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
