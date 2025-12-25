import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, Folder, Star } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'TRACK_MY_ACADEMY',
    description: 'Streamline operations, track performance, and scale your academy with our comprehensive management platform. Everything you need in one place.',
    tech: ['React', 'Node.js', 'Firebase', 'Tailwind'],
    live: 'https://www.trackmyacademy.com/',
    featured: true,
  },
  {
    id: 2,
    title: 'HAND_CRICKET_AI',
    description: 'A browser-based AI-powered Hand Cricket game using real-time gesture recognition with MediaPipe and TensorFlow.js',
    tech: ['TensorFlow.js', 'MediaPipe', 'React', 'Canvas'],
    live: 'https://handcricket.arunvignesh.one/',
    featured: true,
  },
  {
    id: 3,
    title: 'MARINA_DIGITALS',
    description: 'One of the lead web developer in the creation of the working of the website for Marina Digital, a digital marketing company.',
    tech: ['React', 'Tailwind', 'Vite', 'Node.js'],
    live: 'https://marinadigi.com',
    featured: true,
  },
  {
    id: 4,
    title: 'CP_SPORTS_ACADEMY',
    description: 'Assisted in creating the website for CP Sports Academy, a sports academy for children in Chennai.',
    tech: ['React', 'Material UI', 'Firebase'],
    live: 'https://www.cpsports.in',
    featured: false,
  },
  {
    id: 5,
    title: 'SELVAS_ART_HAUS',
    description: 'Exquisite mehndi artistry, elegant makeup designs, and intricate aari embroidery work that brings fashion dreams to life.',
    tech: ['React', 'Tailwind', 'Netlify'],
    live: 'https://selvasarthaus.netlify.app/',
    featured: false,
  },
  {
    id: 6,
    title: 'KANIKA_TRAVELS',
    description: 'Your trusted partner for cab services across Tamil Nadu. Making travel simple, affordable, and convenient across major cities.',
    tech: ['React', 'Vite', 'Tailwind'],
    live: 'https://kanikatravels.com/',
    featured: false,
  },
  {
    id: 7,
    title: 'ENDLESS_GAMER',
    description: 'A retro-style endless runner game. Jump to avoid obstacles, collect points, and challenge your reflexes in this browser-based arcade game.',
    tech: ['React', 'Vite', 'Tailwind'],
    live: 'https://endless-gamer.vercel.app/',
    featured: false,
  },
];

const ProjectCard = ({ project, index, isInView }: {
  project: typeof projects[0];
  index: number;
  isInView: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="terminal-window group cursor-pointer"
    >
      <div className="pt-16 p-6 md:p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <Folder className={`w-8 h-8 md:w-10 md:h-10 ${isHovered ? 'text-primary' : 'text-muted-foreground'} transition-colors`} />
          <div className="flex gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-pixel text-xs md:text-sm text-primary group-hover:text-glow transition-all mb-3 flex items-center gap-2">
          {project.title}
          {project.featured && <Star className="w-3 h-3 md:w-4 md:h-4 text-accent" />}
        </h3>

        {/* Description */}
        <p className="font-terminal text-xs md:text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-[10px] md:text-xs font-terminal text-primary border border-primary/30 bg-primary/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Hover effect line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="font-pixel text-base md:text-xl text-primary text-glow">
            {'// PROJECT_ARCHIVE'}
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </motion.div>

        {/* Terminal command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="font-terminal text-sm text-muted-foreground mb-8"
        >
          <span className="text-primary">$</span> ls -la ./projects/
          <span className="typing-cursor" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Arun270647"
            target="_blank"
            rel="noopener noreferrer"
            className="retro-btn inline-flex items-center gap-2 font-terminal text-sm"
          >
            <Github className="w-4 h-4" />
            VIEW ALL ON GITHUB
          </a>
        </motion.div>
      </div>
    </section>
  );
};
