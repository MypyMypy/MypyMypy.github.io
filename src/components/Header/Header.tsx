import { useEffect, useRef, useState } from "react";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const [isScrolled, setIsScrolled] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    const classes = ['header'];
    if (isScrolled) classes.push('header--scrolled');
    if (!isHome) classes.push('header--sub-page');

    useEffect(() => {
        const handleScroll = () => {
            let triggerVP = window.visualViewport ? window.visualViewport.height : 0;
            if (!isHome) triggerVP = triggerVP / 4;
            if (window.scrollY >= triggerVP) setIsScrolled(true);
            else setIsScrolled(false);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isHome]);

    return (
        <header ref={headerRef} className={classes.join(' ')}>
            <div className="container">
                <Navigation className="header__navigation" />
            </div>
        </header>
        // TODO: Backdrop on ActiveLink
        // TODO: My skills
    )
}

export default Header;