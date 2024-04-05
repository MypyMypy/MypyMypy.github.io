import { useEffect } from 'react';

import { scrollToUp } from '@/features/scrollToUp';
import { ProjectsDemoSection } from '@/widgets/sections';

export const ProjectsPage: React.FC = () => {
  useEffect(() => scrollToUp('instant'), []);

  return (
    <>
      <ProjectsDemoSection />
    </>
  );
};
