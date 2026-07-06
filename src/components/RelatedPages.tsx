import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FileCode, Briefcase, Code2, Mail, BookOpen } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface RelatedPage {
  title: string;
  description: string;
  path: string;
  icon: LucideIcon;
}

interface RelatedPagesProps {
  currentPage: string;
}

const allPages: Record<string, RelatedPage[]> = {
  about: [
    { title: 'View My Skills', description: 'Technical expertise & tools I use', path: '/skills', icon: Code2 },
    { title: 'Explore Projects', description: '15+ web applications & platforms', path: '/projects', icon: FileCode },
    { title: 'Work Experience', description: 'Professional journey & roles', path: '/experience', icon: Briefcase },
    { title: 'Get In Touch', description: 'Available for freelance work', path: '/contact', icon: Mail },
  ],
  skills: [
    { title: 'See Projects', description: 'Where I applied these skills', path: '/projects', icon: FileCode },
    { title: 'My Background', description: 'Learn more about me', path: '/about', icon: Briefcase },
    { title: 'Read Blog', description: 'Technical articles & case studies', path: '/blog', icon: BookOpen },
  ],
  projects: [
    { title: 'Technical Skills', description: 'Technologies used in projects', path: '/skills', icon: Code2 },
    { title: 'Read Case Studies', description: 'Detailed project breakdowns', path: '/blog', icon: BookOpen },
    { title: 'Hire Me', description: 'Work together on your project', path: '/contact', icon: Mail },
  ],
  blog: [
    { title: 'View All Projects', description: 'Explore live applications', path: '/projects', icon: FileCode },
    { title: 'My Tech Stack', description: 'Skills & technologies', path: '/skills', icon: Code2 },
    { title: 'Contact Me', description: 'Discuss your project', path: '/contact', icon: Mail },
  ],
  contact: [
    { title: 'View Portfolio', description: 'See my work & projects', path: '/projects', icon: FileCode },
    { title: 'Check Skills', description: 'Technologies I work with', path: '/skills', icon: Code2 },
    { title: 'Read Blog', description: 'Case studies & insights', path: '/blog', icon: BookOpen },
  ],
  experience: [
    { title: 'Project Portfolio', description: 'Applications I\'ve built', path: '/projects', icon: FileCode },
    { title: 'Technical Skills', description: 'My development expertise', path: '/skills', icon: Code2 },
    { title: 'Start a Project', description: 'Let\'s work together', path: '/contact', icon: Mail },
  ],
};

export const RelatedPages = ({ currentPage }: RelatedPagesProps) => {
  const relatedPages = allPages[currentPage] || [];

  if (relatedPages.length === 0) return null;

  return (
    <section className="py-12 border-t border-border bg-card/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h2 className="font-pixel text-sm md:text-base text-primary mb-2 flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            EXPLORE_MORE
          </h2>
          <p className="font-terminal text-xs text-muted-foreground">
            Continue exploring my portfolio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedPages.map((page, index) => (
            <motion.div
              key={page.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={page.path}
                className="block terminal-window group hover:border-primary transition-all before:hidden h-full"
              >
                <div className="px-4 py-2 text-xs font-terminal bg-border text-muted-foreground border-b border-border tracking-[0.25em]">
                  ● ○ ○
                </div>
                <div className="p-4 h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center border border-primary/30 bg-primary/5 flex-shrink-0">
                      <page.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-pixel text-xs text-primary group-hover:text-glow transition-all mb-1">
                        {page.title}
                      </h3>
                      <p className="font-terminal text-[10px] text-muted-foreground leading-relaxed">
                        {page.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 font-terminal text-[10px] text-primary group-hover:text-glow transition-all">
                    <span>VIEW</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
