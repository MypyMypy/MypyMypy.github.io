import scrollToUp from "./scrollToUp";

const smothScrollLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const target = event.target as HTMLAnchorElement;

  const href = target.getAttribute('href');
  const id = href && href[0] === '#' ? href.slice(1) : null;
  const section = id ? document.getElementById(id) : null;

  if (id && document.getElementById(id))
    section?.scrollIntoView({ behavior: 'smooth' });
  else scrollToUp('smooth');
};

export default smothScrollLink;
