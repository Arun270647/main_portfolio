import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Cpu, Database, Globe } from 'lucide-react';

const stats = [
  { icon: Code, value: '15+', label: 'Projects' },
  { icon: Globe, value: '2+', label: 'Years' },
  { icon: Cpu, value: '∞', label: 'Coffee' },
  { icon: Database, value: '99%', label: 'Uptime' },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-12 relative" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="container mx-auto px-4"
      >
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="font-pixel text-base md:text-xl text-primary text-glow">
            {'// ABOUT_ME'}
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Box with Image and Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="terminal-window"
          >
            <div className="pt-16 p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* Left Side - Profile Text */}
                <div className="font-terminal text-sm text-muted-foreground">
                  <div className="text-primary mb-3">$ cat profile.txt</div>
                  <div className="pl-4 border-l border-primary/30 space-y-2">
                    <p>
                      <span className="text-primary">NAME:</span>
                      <span className="text-foreground ml-2">Arun Vignesh</span>
                    </p>
                    <p>
                      <span className="text-primary">ROLE:</span>
                      <span className="text-foreground ml-2">Full-Stack Developer</span>
                    </p>
                    <p>
                      <span className="text-primary">LOCATION:</span>
                      <span className="text-foreground ml-2">Chennai, India</span>
                    </p>
                    <p>
                      <span className="text-primary">STATUS:</span>
                      <span className="text-foreground ml-2 animate-pulse">Available for hire</span>
                    </p>
                  </div>
                </div>

                {/* Right Side - Profile Image */}
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-[200px] aspect-square">
                    <img
                      src="/1773160520413.jpg"
                      alt="Arun Vignesh Profile"
                      className="w-full h-full object-cover border-2 border-primary/30 shadow-lg hover:border-primary transition-colors duration-300"
                      loading="lazy"
                    />
                    <div className="absolute -inset-1 bg-primary/10 -z-10 blur-md" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="font-terminal text-foreground leading-relaxed mb-8 space-y-4 text-sm md:text-base">
              <p>
                <span className="text-primary mr-2">{'>'}</span>
                I’m Arun Vignesh, a Full Stack Web Developer and BCA student, passionate about exploring the depths of technology.
              </p>
              <p>
                <span className="text-primary mr-2">{'>'}</span>
                I love challenging myself by building real-world applications and continuously pushing my technical limits.
              </p>
              <p>
                <span className="text-primary mr-2">{'>'}</span>
                With a strong curiosity and hands-on mindset, I’m always eager to learn new tools, frameworks, and ideas to grow as a developer.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="terminal-window group"
                >
                  <div className="pt-12 pb-6 px-6 text-center">
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="font-pixel text-sm md:text-lg text-primary text-glow">
                      {stat.value}
                    </div>
                    <div className="font-terminal text-[10px] md:text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
