import { Layout } from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { articleSchema, breadcrumbSchema } from '@/utils/structuredData';

// This should match the blogPosts array from BlogSection
const blogPosts = [
  {
    id: 'track-my-academy',
    title: 'Building Track My Academy: A Comprehensive Management Platform',
    slug: 'track-my-academy',
    excerpt: 'How I built a full-stack academy management platform with React, Node.js, and Firebase.',
    content: `
      <h2>Overview</h2>
      <p>Track My Academy is a comprehensive management platform built to streamline operations for educational institutions.</p>

      <h2>Tech Stack</h2>
      <ul>
        <li>Frontend: React, TypeScript, Tailwind CSS</li>
        <li>Backend: Node.js, Express</li>
        <li>Database: Firebase</li>
        <li>Authentication: Firebase Auth</li>
      </ul>

      <h2>Key Features</h2>
      <p>The platform includes student management, attendance tracking, fee management, and real-time notifications.</p>

      <h2>Challenges & Solutions</h2>
      <p>Building a scalable architecture that handles real-time updates while maintaining performance was a key challenge.</p>
    `,
    date: '2026-01-15',
    readTime: '8 min read',
    tags: ['React', 'Node.js', 'Firebase', 'Full-Stack'],
    category: 'Case Study',
    featured: true,
  },
  {
    id: 'marina-digitals',
    title: 'Marina Digitals: Digital Marketing Agency Website',
    slug: 'marina-digitals',
    excerpt: 'Creating a modern, high-performance website for a digital marketing agency.',
    content: `
      <h2>Project Brief</h2>
      <p>Marina Digitals needed a modern, professional website to showcase their digital marketing services.</p>

      <h2>Design Approach</h2>
      <p>Clean, minimalist design with focus on conversion optimization and user experience.</p>

      <h2>Technical Implementation</h2>
      <p>Built with React and Vite for optimal performance, with lazy loading and code splitting.</p>
    `,
    date: '2025-12-20',
    readTime: '6 min read',
    tags: ['React', 'Tailwind', 'Vite', 'Web Design'],
    category: 'Case Study',
    featured: true,
  },
  {
    id: 'fufies',
    title: 'Fufies: E-commerce Brand Website Development',
    slug: 'fufies',
    excerpt: 'Developing a warm and inviting e-commerce website for a comfort-focused brand.',
    content: `
      <h2>Brand Identity</h2>
      <p>Fufies is all about comfort and warmth. The website needed to reflect these values.</p>

      <h2>E-commerce Features</h2>
      <p>Product catalog, shopping cart, checkout integration, and order management.</p>

      <h2>Performance</h2>
      <p>Optimized images, lazy loading, and efficient code to ensure fast load times.</p>
    `,
    date: '2025-11-10',
    readTime: '5 min read',
    tags: ['React', 'Tailwind', 'E-commerce'],
    category: 'Case Study',
    featured: true,
  },
  {
    id: 'kyra-elite',
    title: 'Kyra Elite: Premium E-commerce Platform with Admin Dashboard',
    slug: 'kyra-elite',
    excerpt: 'Building a feature-rich e-commerce platform for a premium clothing brand.',
    content: `
      <h2>Premium E-commerce Experience</h2>
      <p>Kyra Elite required a sophisticated platform that matched their premium brand positioning.</p>

      <h2>Admin Dashboard</h2>
      <p>Comprehensive admin panel for inventory management, orders, and analytics.</p>

      <h2>Technical Highlights</h2>
      <p>TypeScript for type safety, optimized database queries, and real-time inventory updates.</p>
    `,
    date: '2025-10-25',
    readTime: '10 min read',
    tags: ['React', 'TypeScript', 'E-commerce', 'Admin Dashboard'],
    category: 'Case Study',
    featured: true,
  },
  {
    id: 'hand-cricket-ai',
    title: 'Hand Cricket AI: Building a Gesture Recognition Game',
    slug: 'hand-cricket-ai',
    excerpt: 'Creating an AI-powered game using TensorFlow.js and MediaPipe for real-time gesture recognition.',
    content: `
      <h2>AI-Powered Gaming</h2>
      <p>Hand Cricket AI brings the classic hand cricket game to the web using computer vision.</p>

      <h2>Technology Stack</h2>
      <p>TensorFlow.js for machine learning, MediaPipe for hand tracking, React for UI.</p>

      <h2>Real-time Processing</h2>
      <p>Optimizing ML models for browser performance was a key technical challenge.</p>

      <h2>Future Enhancements</h2>
      <p>Multiplayer mode, improved gesture recognition, and mobile support are planned.</p>
    `,
    date: '2025-09-15',
    readTime: '12 min read',
    tags: ['TensorFlow.js', 'MediaPipe', 'AI/ML', 'React'],
    category: 'Technical Deep Dive',
    featured: true,
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Arun Vignesh</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <link rel="canonical" href={`https://www.arunvignesh.my/blog/${post.slug}`} />

        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.arunvignesh.my/blog/${post.slug}`} />
        <meta property="og:site_name" content="Arun Vignesh Portfolio" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="Arun Vignesh" />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />

        <script type="application/ld+json">
          {JSON.stringify(articleSchema({
            title: post.title,
            description: post.excerpt,
            url: `https://www.arunvignesh.my/blog/${post.slug}`,
            datePublished: post.date,
            dateModified: post.date,
            keywords: post.tags,
          }))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema([
            { name: "Home", url: "https://www.arunvignesh.my" },
            { name: "Blog", url: "https://www.arunvignesh.my/blog" },
            { name: post.title, url: `https://www.arunvignesh.my/blog/${post.slug}` }
          ]))}
        </script>
      </Helmet>

      <Layout breadcrumbs={[
        { label: 'Blog', href: '/blog' },
        { label: post.title }
      ]}>
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-glow transition-all text-sm font-terminal mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO BLOG
          </Link>

          {/* Article Header */}
          <header className="mb-8 terminal-window before:hidden">
            <div className="px-4 py-2 text-xs font-terminal bg-border text-muted-foreground border-b border-border tracking-[0.25em]">
              ● ○ ○
            </div>
            <div className="p-8">
              {/* Category */}
              <span className="px-2 py-1 text-xs font-terminal text-primary border border-primary/30 bg-primary/5 mb-4 inline-block">
                {post.category}
              </span>

              {/* Title */}
              <h1 className="font-pixel text-lg md:text-2xl text-primary mb-6 leading-relaxed">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm font-terminal mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 text-xs font-terminal text-muted-foreground px-2 py-1 border border-border"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="terminal-window before:hidden mb-8">
            <div className="px-4 py-2 text-xs font-terminal bg-border text-muted-foreground border-b border-border tracking-[0.25em]">
              ● ○ ○
            </div>
            <div
              className="p-8 prose prose-invert max-w-none font-terminal text-sm leading-relaxed
                prose-headings:font-pixel prose-headings:text-primary prose-headings:mb-4 prose-headings:mt-8
                prose-h2:text-base prose-h3:text-sm
                prose-p:text-muted-foreground prose-p:mb-4
                prose-ul:text-muted-foreground prose-ul:mb-4
                prose-li:mb-2
                prose-strong:text-primary
                prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:py-0.5
                prose-a:text-primary prose-a:no-underline hover:prose-a:text-glow"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Navigation */}
          <div className="flex justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-glow transition-all text-sm font-terminal border border-primary px-6 py-3"
            >
              <ArrowLeft className="w-4 h-4" />
              VIEW ALL POSTS
            </Link>
          </div>
        </motion.article>
      </Layout>
    </>
  );
};

export default BlogPost;
