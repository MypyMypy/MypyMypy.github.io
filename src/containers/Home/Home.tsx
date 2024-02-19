import About from '../../components/AboutSection/AboutSection';
import Connect from '../../components/ConnectSection/ConnectSection';
import Hero from '../../components/HeroSection/HeroSection';
import Projects from '../../components/ProjectsSection/ProjectsSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Connect />
    </>
  );
};

export default HomePage;
