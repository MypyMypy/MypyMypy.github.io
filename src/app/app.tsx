import { BrowserRouter } from 'react-router-dom';
import { Layout } from './providers';
import { AppRouter } from './router';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
};
