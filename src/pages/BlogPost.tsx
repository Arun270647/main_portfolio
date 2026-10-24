import { Link, useParams } from 'react-router-dom';
import { Nav } from '../components/Nav';
import { Blobs } from '../components/Blobs';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { breadcrumb } from '../utils/structuredData';
import { links } from '../data/portfolio';
import { Helmet } from 'react-helmet-async';
import { findPost, formatDate, renderMarkdown, blogImage } from '../data/blog';
import NotFound from './NotFound';

const ORIGIN = 'https://www.arunvignesh.my';

export default function BlogPost() {
  const { slug = '' } = useParams();
  const post = findPost(slug);
  if (!post) return <NotFound />;
  const path = `/blog/${post.slug}`;
  const cover = post.cover ? blogImage(post.cover) : null;
  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Person', name: 'Arun Vignesh V', url: ORIGIN },
    image: post.cover ? `${ORIGIN}${post.cover}` : undefined,
    mainEntityOfPage: `${ORIGIN}${path}`,
  };
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'clip' }}>
      <SEOHead
        title={`${post.title} | Arun Vignesh`}
        description={post.excerpt}
        path={path}
        schema={[article, breadcrumb([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path }])]}
      />
      {cover && <Helmet><link rel="preload" as="image" href={cover.src} /></Helmet>}
      <Blobs a="var(--gum)" b="var(--mint)" />
      <Nav shadow="var(--mint)" />

      <main id="main" style={{ position: 'relative', zIndex: 1, maxWidth: 780, margin: '0 auto', padding: 'clamp(40px, 7vw, 90px) 20px 100px' }}>
        <Link to="/blog" className="mono" style={{ color: 'var(--mint)', textDecoration: 'none' }}>← all stories</Link>
        <h1 className="display drop" style={{ margin: '22px 0 0', fontSize: 'clamp(34px, 6vw, 68px)', lineHeight: 1, color: 'var(--cream)', textShadow: '4px 4px 0 var(--tang)' }}>{post.title}</h1>
        <div className="mono" style={{ marginTop: 20, color: 'var(--must)' }}>{formatDate(post.date)} · {post.readMins} min read</div>
        {cover && <img src={cover.src} width={cover.width} height={cover.height} alt="" style={{ width: '100%', height: 'auto', borderRadius: 26, marginTop: 30, boxShadow: '0 12px 0 var(--gum)' }} />}
        <article className="post-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }} />
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 50 }}>
          {post.linkedin && <a className="btn cream" href={post.linkedin} target="_blank" rel="noopener">discuss on linkedin →</a>}
          <Link className="btn tang" to="/blog">more stories</Link>
        </div>
      </main>

      <Footer title="say hi?" buttons={[
        { label: 'start a project →', href: links.email, bg: 'dark' },
        { label: 'follow on linkedin', href: links.linkedin, bg: 'var(--mint)', external: true },
      ]} />
    </div>
  );
}
