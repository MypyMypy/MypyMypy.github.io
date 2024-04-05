import { useInView } from 'react-intersection-observer';
import { Socials } from '@/widgets/Socials';

export const Footer: React.FC = () => {
  const [ref, inView] = useInView({
    delay: 500,
  });

  return (
    <footer className={inView ? 'footer footer--in-view' : 'footer'}>
      <div ref={ref} className="footer__container container">
        <Socials />
        <p>©️ Danil Bogdanchikov</p>
      </div>
    </footer>
  );
};
