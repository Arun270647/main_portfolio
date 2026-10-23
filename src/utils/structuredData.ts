// Schema.org JSON-LD builders. Keep every URL absolute and on the www host.
import { projects, roles, links } from '../data/portfolio';

const ORIGIN = 'https://www.arunvignesh.my';

export const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${ORIGIN}/#person`,
  name: 'Arun Vignesh',
  alternateName: 'Arun Vignesh V',
  url: ORIGIN,
  image: `${ORIGIN}/me.jpg`,
  jobTitle: 'Full-Stack Web Developer',
  description: 'Full-stack web developer and BCA student in Chennai building React apps for academies, e-commerce brands and agencies.',
  address: { '@type': 'PostalAddress', addressLocality: 'Chennai', addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
  sameAs: [links.github, links.linkedin, links.instagram],
  knowsAbout: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Firebase', 'Tailwind CSS', 'TensorFlow.js', 'MediaPipe', 'Vite'],
  hasOccupation: roles
    .filter(r => r.current)
    .map(r => ({ '@type': 'Occupation', name: r.role, description: `${r.role} at ${r.company}` })),
};

export const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Arun Vignesh',
  url: ORIGIN,
  publisher: { '@id': `${ORIGIN}/#person` },
};

export const profilePage = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: ORIGIN,
  mainEntity: { '@id': `${ORIGIN}/#person` },
};

export const webPage = (name: string, description: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name,
  description,
  url: `${ORIGIN}${path}`,
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', url: ORIGIN },
  author: { '@id': `${ORIGIN}/#person` },
});

export const projectList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Projects by Arun Vignesh',
  itemListElement: projects.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'CreativeWork',
      name: p.title,
      description: p.blurb,
      url: p.live,
      keywords: p.tech.join(', '),
      author: { '@id': `${ORIGIN}/#person` },
    },
  })),
};

export const breadcrumb = (items: Array<{ name: string; path: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: `${ORIGIN}${it.path}`,
  })),
});
