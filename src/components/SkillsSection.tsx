import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'FRONTEND',
    skills: [
      { name: 'HTML', level: 98 },
      { name: 'CSS', level: 95 },
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'Tailwind', level: 92 },
      { name: 'Bootstrap', level: 88 },
    ],
  },
  {
    title: 'BACKEND',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 82 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    title: 'TOOLS',
    skills: [
      { name: 'GitHub', level: 95 },
      { name: 'Git', level: 92 },
      { name: 'Canva', level: 90 },
      { name: 'Vercel', level: 88 },
      { name: 'Render', level: 86 },
      { name: 'Google Cloud', level: 85 },
    ],
  },
];

const SkillBar = ({ skill, delay, isInView }: {
  skill: { name: string; level: number };
  delay: number;
  isInView: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="mb-4"
    >
      <div className="flex justify-between mb-1 font-terminal text-sm">
        <span className={isHovered ? 'text-primary' : 'text-foreground'}>
          {skill.name}
        </span>
        <span className="text-muted-foreground">
          [{skill.level}%]
        </span>
      </div>
      <div className="h-3 bg-muted border border-border relative overflow-hidden">
        {/* Segment markers */}
        <div className="absolute inset-0 flex">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="flex-1 border-r border-background/30 last:border-r-0"
            />
          ))}
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
          className="h-full bg-primary relative"
        >
          {/* Scanline effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-12 relative bg-card/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="font-pixel text-base md:text-xl text-primary text-glow">
            {'// SKILL_MATRIX'}
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.15 }}
              className="terminal-window flex flex-col before:hidden"
            >
              {/* Window Header */}
              <div className="px-4 py-2 text-xs font-terminal bg-border text-muted-foreground border-b border-border tracking-[0.25em]">
                ● ○ ○
              </div>

              <div className="p-6 md:p-8">
                <h3 className="font-pixel text-xs md:text-sm mb-6 text-primary text-glow">
                  {'> '}{category.title}
                </h3>

                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={catIndex * 0.15 + skillIndex * 0.08}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <pre className="font-terminal text-[10px] md:text-xs text-muted-foreground inline-block">
            {`╔═══════════════════════════════════════════════════════════════╗
║  "First, solve the problem. Then, write the code."            ║
╚═══════════════════════════════════════════════════════════════╝`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
};
