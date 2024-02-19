import SectionWrapper from "../../hoc/SectionWrapper/SectionWrapper";
import myPhoto from '../../assets/images/my_photo.jpg';
import smothScrollLink from "../../features/smothScrollLink";

import Roadmap from "../Roadmap/Roadmap";

const AboutSection: React.FC = () => {
    return (
        <SectionWrapper sectionClass="about" id="about">
            <h2 className="section-header">
                About me.
            </h2>
            <div className="about__content-wrapper">
                <div className="about__content-info">
                    <div className="about__image-wrapper">
                        <img
                            src={myPhoto}
                            alt="Its me - try to see me later!" />
                    </div>
                    <p>Welcome to my portfolio page. Here you can see many of <a className="accent" href='#projects' onClick={smothScrollLink}>the projects</a> I have completed and get to know me a little better. I&nbsp;would&nbsp;be&nbsp;glad if you <a className="accent" href="#connect" onClick={smothScrollLink}>contact me</a> and share your opinions and recommendations for improvement.</p>
                    {/* Get Info from resume */}
                </div>
                <Roadmap className="about__roadmap" />
            </div>
        </SectionWrapper>
    )
}

export default AboutSection;