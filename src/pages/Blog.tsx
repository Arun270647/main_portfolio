import { Layout } from '@/components/Layout';
import { BlogSection } from '@/components/BlogSection';
import { Helmet } from 'react-helmet-async';
import { webPageSchema, breadcrumbSchema } from '@/utils/structuredData';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Arun Vignesh</title>
        <meta name="description" content="Web development insights, project case studies, and technical deep dives. Learn from real-world React, TypeScript, and full-stack implementations." />
        <meta name="keywords" content="Web Development Blog, React Tutorials, TypeScript Tips, Case Studies, Technical Articles, Developer Blog" />
        <link rel="canonical" href="https://www.arunvignesh.my/blog" />

        <meta property="og:title" content="Blog | Arun Vignesh" />
        <meta property="og:description" content="Technical blog covering web development, projects, and insights." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arunvignesh.my/blog" />
        <meta property="og:site_name" content="Arun Vignesh Portfolio" />
        <meta name="twitter:title" content="Blog | Arun Vignesh" />
        <meta name="twitter:description" content="Technical blog covering web development, projects, and insights." />

        <script type="application/ld+json">
          {JSON.stringify(webPageSchema({
            name: "Blog - Arun Vignesh",
            description: "Technical blog covering web development, projects, and insights",
            url: "https://www.arunvignesh.my/blog"
          }))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema([
            { name: "Home", url: "https://www.arunvignesh.my" },
            { name: "Blog", url: "https://www.arunvignesh.my/blog" }
          ]))}
        </script>
      </Helmet>

      <Layout breadcrumbs={[{ label: 'Blog' }]}>
        <BlogSection />
      </Layout>
    </>
  );
};

export default Blog;
