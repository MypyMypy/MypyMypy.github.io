import telegramIcon from '../../assets/images/icons/telegram-icon.svg';
import googleMapIcon from '../../assets/images/icons/google-maps-icon.svg';
import googleMailIcon from '../../assets/images/icons/google-mail-icon.svg';
import hhIcon from '../../assets/images/icons/hh-icon.svg';
import gitHubIcon from '../../assets/images/icons/github-icon.svg';

const Socials: React.FC = () => {
    return (
        <ul className="socials">
            <li className="socials__item">
                <a className="socials__link" target="_blank" rel="noreferrer" href="https://t.me/d_bogdanchikov">
                    <img src={telegramIcon} alt="Telegram" />
                </a>
            </li>
            <li className="socials__item">
                <a className="socials__link" target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/jeuk8YWUhyV4uqXJ6">
                    <img src={googleMapIcon} alt="Google maps" />
                </a>
            </li>
            <li className="socials__item">
                <a className="socials__link" target="_blank" rel="noreferrer" href="mailto:danich282@gmail.com">
                    <img src={googleMailIcon} alt="Google maps" />
                </a>
            </li>
            <li className="socials__item">
                <a className="socials__link" target="_blank" rel="noreferrer" href="https://spb.hh.ru/resume/264a11e1ff0c15fc110039ed1f72676e384165">
                    <img src={hhIcon} alt="HH.ru" />
                </a>
            </li>
            <li className="socials__item">
                <a className="socials__link" target="_blank" rel="noreferrer" href="https://github.com/MypyMypy">
                    <img src={gitHubIcon} alt="GitGub" />
                </a>
            </li>
        </ul>
    )
}

export default Socials;