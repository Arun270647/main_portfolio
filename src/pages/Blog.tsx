import { Layout } from '@/components/Layout';
import { BlogSection } from '@/components/BlogSection';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Arun Vignesh</title>
        <meta name="description" content="Read about my projects, development journey, and technical insights. Case studies and project breakdowns." />
        <link rel="canonical" href="https://arunvignesh.one/blog" />
      </Helmet>

      <Layout>
        <BlogSection />
      </Layout>
    </>
  );
};

export default Blog;
