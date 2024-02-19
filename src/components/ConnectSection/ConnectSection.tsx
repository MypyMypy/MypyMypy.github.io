import SectionWrapper from "../../hoc/SectionWrapper/SectionWrapper";

const ConnectSection: React.FC = () => {
    const scrollDownHandler = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <SectionWrapper sectionClass="connect" containerClass="connect__container" id="connect">
                <h2 className="connect__header section-header">Let&apos;s Connect</h2>
                <p className="connect__note">Don’t be shy, say hi! I would love to hear from you. I’m always open to discussing commercial work or partnership opportunities.</p>
                <button className="connect__button" onClick={scrollDownHandler}>Contact me</button>
                <div className="connect__image"></div>
            </SectionWrapper>
        </>
    )
}

export default ConnectSection;