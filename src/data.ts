export const links = [
  {
    name: 'Home',
    hash: '#home',
    active: true,
  },
  {
    name: 'About',
    hash: '#about',
    active: false,
  },
  {
    name: 'Projects',
    hash: '#projects',
    active: false,
  },
  {
    name: 'Connect',
    hash: '#connect',
    active: false,
  },
];

export const projects = [
  {
    name: 'Herzen project',
    description: `One of my first spa projects, which was carried out to support my bachelor's thesis.`,
    date: {
      year: '2023',
      month: '06',
    },
    tags: ['JS', 'SPA', 'BEM', 'SCSS', 'HTML5'],
    image:
      'https://mypymypy.github.io/HerzenPracticeCource/4faac4a404e6011022f6.webp',
    deploy: 'https://mypymypy.github.io/HerzenPracticeCource',
    srcGit: 'https://github.com/MypyMypy/HerzenPracticeCource',
  },
  {
    name: 'Coffee House',
    description: 'Desc',
    date: {
      year: '2023',
      month: '12',
    },
    tags: ['JS', 'BEM', 'SCSS', 'HTML5'],
    deploy:
      'https://rolling-scopes-school.github.io/mypymypy-JSFE2023Q4/coffee-house/',
    srcGit:
      'https://github.com/rolling-scopes-school/mypymypy-JSFE2023Q4/tree/gh-pages/coffee-house',
    image:
      'https://rolling-scopes-school.github.io/mypymypy-JSFE2023Q4/coffee-house/assets/images/logo.webp',
  },
  {
    name: 'Hangman Game',
    tags: ['Game', 'JS', 'CSS3', 'HTML5', 'BEM'],
    description: 'A game that was completed as part of the RSSchool course',
    date: {
      year: '2023',
      month: '12',
    },
    srcGit:
      'https://github.com/rolling-scopes-school/mypymypy-JSFE2023Q4/tree/gh-pages/hangman',
    deploy:
      'https://rolling-scopes-school.github.io/mypymypy-JSFE2023Q4/hangman/',
    image: 'https://skyteach.ru/wp-content/uploads/2019/12/Hangman.jpg',
  },
  {
    name: 'Nonograms Game',
    tags: ['Game', 'JS', 'CSS3', 'HTML5', 'BEM'],
    description: 'A game that was completed as part of the RSSchool course',
    date: {
      year: '2024',
      month: '01',
    },
    deploy:
      'https://rolling-scopes-school.github.io/mypymypy-JSFE2023Q4/nonograms/',
    srcGit:
      'https://github.com/rolling-scopes-school/mypymypy-JSFE2023Q4/tree/gh-pages/nonograms',
    image:
      'https://rolling-scopes-school.github.io/mypymypy-JSFE2023Q4/nonograms/favicon.svg',
  },
];

export type Projects = typeof projects;
