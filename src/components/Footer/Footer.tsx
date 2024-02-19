import Socials from "../Socials/Socials";
import { useInView } from "react-intersection-observer";


const Footer: React.FC = () => {
    const [ref, inView] = useInView({
        delay: 500,
    });

    return (
        <footer className={inView ? "footer".concat(' ', 'footer--in-view'): "footer"}>
            <div ref={ref} className="footer__container container">
                <Socials />
                <p>©️ Danil Bogdanchikov</p>
            </div>
        </footer>
    )
}

export default Footer;