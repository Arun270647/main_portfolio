import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiTypescript,
  SiMui,
  SiNodedotjs,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiTensorflow,
  SiNetlify
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  level: number;
  icon: IconType;
  color?: string;
}

const skillCategories = [
  {
    title: 'FRONTEND',
    skills: [
      { name: 'React', level: 92, icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', level: 90, icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', level: 88, icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Vite', level: 85, icon: SiVite, color: '#646CFF' },
      { name: 'TypeScript', level: 78, icon: SiTypescript, color: '#3178C6' },
      { name: 'Material UI', level: 72, icon: SiMui, color: '#007FFF' },
    ] as Skill[],
  },
  {
    title: 'BACKEND',
    skills: [
      { name: 'Node.js', level: 82, icon: SiNodedotjs, color: '#339933' },
      { name: 'Firebase', level: 80, icon: SiFirebase, color: '#FFCA28' },
      { name: 'REST APIs', level: 78, icon: SiNodedotjs, color: '#339933' },
    ] as Skill[],
  },
  {
    title: 'TOOLS & AI',
    skills: [
      { name: 'Git & GitHub', level: 90, icon: SiGithub, color: '#181717' },
      { name: 'Vercel', level: 86, icon: SiVercel, color: '#000000' },
      { name: 'TensorFlow.js', level: 75, icon: SiTensorflow, color: '#FF6F00' },
      { name: 'MediaPipe', level: 74, icon: SiTensorflow, color: '#4285F4' },
      { name: 'Netlify', level: 72, icon: SiNetlify, color: '#00C7B7' },
    ] as Skill[],
  },
];

const SkillBar = ({ skill, delay, isInView }: {
  skill: Skill;
  delay: number;
  isInView: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-1 font-terminal text-sm">
        <div className="flex items-center gap-2">
          <IconComponent
            className={`w-4 h-4 transition-colors ${isHovered ? 'text-primary' : 'text-muted-foreground'}`}
            style={isHovered && skill.color ? { color: skill.color } : {}}
          />
          <span className={isHovered ? 'text-primary' : 'text-foreground'}>
            {skill.name}
          </span>
        </div>
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
