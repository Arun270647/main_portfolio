import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Clock, Tag, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

// Blog posts will be added here
const blogPosts = [
  // Template structure - will be populated with actual project blogs
  {
    id: 'track-my-academy',
    title: 'Building Track My Academy: A Comprehensive Management Platform',
    slug: 'track-my-academy',
    excerpt: 'How I built a full-stack academy management platform with React, Node.js, and Firebase.',
    content: '', // Will be populated
    date: '2026-01-15',
    readTime: '8 min read',
    tags: ['React', 'Node.js', 'Firebase', 'Full-Stack'],
    category: 'Case Study',
    featured: true,
    image: '/blog/track-my-academy.jpg',
  },
  {
    id: 'marina-digitals',
    title: 'Marina Digitals: Digital Marketing Agency Website',
    slug: 'marina-digitals',
    excerpt: 'Creating a modern, high-performance website for a digital marketing agency.',
    content: '',
    date: '2025-12-20',
    readTime: '6 min read',
    tags: ['React', 'Tailwind', 'Vite', 'Web Design'],
    category: 'Case Study',
    featured: true,
    image: '/blog/marina-digitals.jpg',
  },
  {
    id: 'fufies',
    title: 'Fufies: E-commerce Brand Website Development',
    slug: 'fufies',
    excerpt: 'Developing a warm and inviting e-commerce website for a comfort-focused brand.',
    content: '',
    date: '2025-11-10',
    readTime: '5 min read',
    tags: ['React', 'Tailwind', 'E-commerce'],
    category: 'Case Study',
    featured: true,
    image: '/blog/fufies.jpg',
  },
  {
    id: 'kyra-elite',
    title: 'Kyra Elite: Premium E-commerce Platform with Admin Dashboard',
    slug: 'kyra-elite',
    excerpt: 'Building a feature-rich e-commerce platform for a premium clothing brand.',
    content: '',
    date: '2025-10-25',
    readTime: '10 min read',
    tags: ['React', 'TypeScript', 'E-commerce', 'Admin Dashboard'],
    category: 'Case Study',
    featured: true,
    image: '/blog/kyra-elite.jpg',
  },
  {
    id: 'hand-cricket-ai',
    title: 'Hand Cricket AI: Building a Gesture Recognition Game',
    slug: 'hand-cricket-ai',
    excerpt: 'Creating an AI-powered game using TensorFlow.js and MediaPipe for real-time gesture recognition.',
    content: '',
    date: '2025-09-15',
    readTime: '12 min read',
    tags: ['TensorFlow.js', 'MediaPipe', 'AI/ML', 'React'],
    category: 'Technical Deep Dive',
    featured: true,
    image: '/blog/hand-cricket-ai.jpg',
  },
];

const BlogCard = ({ post, index, isInView }: {
  post: typeof blogPosts[0];
  index: number;
  isInView: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="terminal-window group cursor-pointer flex flex-col before:hidden"
    >
      {/* Window Header */}
      <div className="px-4 py-2 text-xs font-terminal bg-border text-muted-foreground border-b border-border tracking-[0.25em]">
        ● ○ ○
      </div>

      <div className="p-6 md:p-8 h-full flex flex-col">
        {/* Category & Date */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-2 py-1 text-[10px] md:text-xs font-terminal text-primary border border-primary/30 bg-primary/5">
            {post.category}
          </span>
          <div className="flex items-center gap-2 text-muted-foreground text-xs font-terminal">
            <Calendar className="w-3 h-3" />
            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-pixel text-xs md:text-sm text-primary group-hover:text-glow transition-all mb-3 leading-relaxed" role="heading" aria-level="3">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="font-terminal text-xs md:text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-[10px] font-terminal text-muted-foreground"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-muted-foreground text-xs font-terminal">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="flex items-center gap-2 text-primary hover:text-glow transition-all text-xs font-terminal"
          >
            READ MORE
            <ArrowRight className={`w-4 h-4 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
          </Link>
        </div>

        {/* Hover effect line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.article>
  );
};

export const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Case Study', 'Technical Deep Dive', 'Tutorial'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" className="py-12 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="font-pixel text-base md:text-xl text-primary text-glow" role="heading" aria-level="2">
            {'// BLOG_ARCHIVE'}
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </motion.div>

        {/* Terminal command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="font-terminal text-sm text-muted-foreground mb-8"
        >
          <span className="text-primary">$</span> ls -la ./blog/
          <span className="typing-cursor" />
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-muted border border-border focus:border-primary pl-12 pr-4 py-3 font-terminal text-foreground text-sm outline-none transition-colors"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter posts by category">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-terminal border transition-colors ${
                  selectedCategory === category
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                }`}
                aria-label={`Filter by ${category}`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                post={post}
                index={index}
                isInView={isInView}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-12"
            >
              <p className="font-terminal text-muted-foreground">
                No posts found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="font-terminal text-sm text-muted-foreground">
            Showing {filteredPosts.length} of {blogPosts.length} posts
          </p>
        </motion.div>
      </div>
    </section>
  );
};
