import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

export const Layout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
