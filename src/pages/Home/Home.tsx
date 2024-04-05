import { HeroSection } from '@/widgets/sections';
import { AboutSection } from '@/widgets/sections';
import { ConnectSection } from '@/widgets/sections';
import { ProjectsSection } from '@/widgets/sections';

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ConnectSection />
    </>
  );
};
