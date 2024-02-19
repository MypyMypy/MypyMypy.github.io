import { BrowserRouter, Route, Routes } from 'react-router-dom';;

import Layout from './hoc/Layout/Layout';
import HomePage from './containers/Home/Home';
import ProjectsPage from './containers/Projects/Projects';

// TODO: Styling => Change Theme
// TODO: create gh-pages branch for every projects that is needing 
// TODO: Create Projects Data

export const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route
          path="*"
          element={<h1>There are no Pokemon here. Lets go to Main Page!</h1>}
        />
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path='/projects'
          element={<ProjectsPage />} />
      </Routes>
    </Layout>
  );
};

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
