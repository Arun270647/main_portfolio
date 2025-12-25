import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, User, Terminal, FileCode, Send, Award } from 'lucide-react';

const GLITCH_CHARS = '▓▒░█▄▀■□●○';

export const HeroSection = () => {
  const [glitchName, setGlitchName] = useState('ARUN VIGNESH');

  useEffect(() => {
    const name = 'ARUN VIGNESH';
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.97) {
        const newName = name.split('').map(char =>
          Math.random() > 0.85 ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)] : char
        ).join('');
        setGlitchName(newName);
        setTimeout(() => setGlitchName(name), 80);
      }
    }, 100);
    return () => clearInterval(glitchInterval);
  }, []);

  const navLinks = [
    { label: 'ABOUT', icon: User, href: '/about', description: 'Learn about me' },
    { label: 'SKILLS', icon: Terminal, href: '/skills', description: 'My tech stack' },
    { label: 'PROJECTS', icon: FileCode, href: '/projects', description: 'View my work' },
    { label: 'CERTS', icon: Award, href: '/certificates', description: 'Certifications' },
    { label: 'CONTACT', icon: Send, href: '/contact', description: 'Get in touch' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center retro-grid overflow-hidden pt-24">
      {/* Decorative scan lines in background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-primary/30"
            style={{ top: `${i * 3.33}%`, left: 0, right: 0 }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: i * 0.03, duration: 0.4 }}
          />
        ))}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-28 left-4 md:left-8 text-muted-foreground/40 font-terminal text-[10px] md:text-xs">
        <pre className="leading-tight">{`┌──────────────┐
│ SEC://01     │
│ ACTIVE       │
└──────────────┘`}</pre>
      </div>

      <div className="absolute bottom-12 right-4 md:right-8 text-muted-foreground/40 font-terminal text-[10px] md:text-xs text-right">
        <pre className="leading-tight">{`┌──────────────┐
│ 13.0827° N   │
│ 80.2707° E   │
│ CHENNAI, IN  │
└──────────────┘`}</pre>
      </div>

      <div className="container relative z-10 px-4">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1
            className="font-pixel text-xl md:text-3xl lg:text-4xl text-primary text-glow mb-4"
            data-text={glitchName}
          >
            {glitchName}
          </motion.h1>

          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-6 font-terminal text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-muted-foreground">{'<'}</span>
            <span className="text-foreground">WEB FULL STACK DEVELOPER</span>
            <span className="text-muted-foreground">{'>'}</span>
          </motion.div>

          <motion.p
            className="font-terminal text-muted-foreground max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Building digital experiences with clean code and creative design.
            Passionate about crafting interfaces that feel alive.
          </motion.p>

          {/* Social links */}
          <motion.div
            className="flex justify-center gap-3 md:gap-4 mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { icon: Github, href: 'https://github.com/Arun270647', label: 'GITHUB' },
              { icon: Linkedin, href: 'https://linkedin.com/in/arun-vignesh-v-ab4545328', label: 'LINKEDIN' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="retro-btn flex items-center gap-2 text-xs md:text-sm"
              >
                <social.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{social.label}</span>
              </motion.a>
            ))}

            <Link
              to="/contact"
              className="retro-btn flex items-center gap-2 text-xs md:text-sm"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">EMAIL</span>
            </Link>
          </motion.div>

          {/* Navigation cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <Link
                  to={link.href}
                  className="terminal-window group block hover:border-primary transition-colors"
                >
                  <div className="pt-12 p-6 text-center">
                    <link.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="font-pixel text-xs md:text-sm text-primary group-hover:text-glow transition-all">
                      {link.label}
                    </div>
                    <div className="font-terminal text-[10px] md:text-xs text-muted-foreground mt-1">
                      {link.description}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
