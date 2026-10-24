import { Helmet } from 'react-helmet-async';

const ORIGIN = 'https://www.arunvignesh.my';

type Props = {
  title: string;
  description: string;
  /** Route path, e.g. "/about". "/" for the homepage. */
  path: string;
  noindex?: boolean;
  /** og:type, "article" for blog posts. */
  type?: 'website' | 'article';
  /** Absolute URL of the social share image; defaults to the site-wide card. */
  image?: string;
  /** JSON-LD objects to emit, one <script> each. */
  schema?: object[];
};

/** Per-page title, description, canonical, social tags and JSON-LD. */
export function SEOHead({ title, description, path, noindex = false, type = 'website', image = `${ORIGIN}/og-image.png`, schema = [] }: Props) {
  const canonical = path === '/' ? ORIGIN : `${ORIGIN}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
}
