import { useState } from 'react';
import arrow from '../../assets/images/icons/arrow-down.svg'

interface SortDateButtonsPropsI {
    sortDateHandler?: (topDate: boolean) => void,
    activeTopDate?: boolean,
}

const SortDateButtons: React.FC<SortDateButtonsPropsI> = ({ sortDateHandler = () => { } }, activeTopDate) => {
    const [topActive, setTopActive] = useState(activeTopDate);

    const className = 'sort-date-wrapper';
    const classNameButton = className + '__button';
    const classNameActiveButtton = classNameButton + '--active';
    const classNameTopButton = topActive ? classNameButton.concat(' ', classNameActiveButtton) : classNameButton;
    const classNameDownButton = topActive ? classNameButton : classNameButton.concat(' ', classNameActiveButtton);

    const buttonHandler = (isTop: boolean) => {
        sortDateHandler(isTop);
        setTopActive(!topActive);
    }

    return (
        <div className={className}>
            <button className={classNameTopButton} onClick={() => buttonHandler(true)}>
                <img src={arrow} alt='Date top'></img>
            </button>
            <button className={classNameDownButton} onClick={() => buttonHandler(false)}>
                <img src={arrow} alt='Date down'></img>
            </button>
        </div>
    );
};

export default SortDateButtons;