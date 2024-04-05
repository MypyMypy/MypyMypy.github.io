import { Route, Routes } from 'react-router-dom';
import { HomePage } from '@/pages/Home';
import { ProjectsPage } from '@/pages/Projects';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={<h1>There are no Pokemon here. Lets go to Main Page!</h1>}
      />
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
};
