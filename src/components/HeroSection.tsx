import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const BOOT_SEQUENCE = [
  'BIOS CHECK... OK',
  'LOADING KERNEL...',
  'INITIALIZING MEMORY... 8192KB OK',
  'MOUNTING FILESYSTEM...',
  'LOADING USER PROFILE...',
  'WELCOME TO ARUN_OS',
  '',
];

const GLITCH_CHARS = '▓▒░█▄▀■□●○';

export const HeroSection = () => {
  const [bootIndex, setBootIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [glitchName, setGlitchName] = useState('ARUN VIGNESH');

  useEffect(() => {
    if (bootIndex < BOOT_SEQUENCE.length) {
      const timer = setTimeout(() => {
        setBootIndex(prev => prev + 1);
      }, 350);
      return () => clearTimeout(timer);
    } else {
      setShowContent(true);
    }
  }, [bootIndex]);

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
└──────────────┘`}</pre>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Boot sequence terminal */}
        <motion.div 
          className="terminal-window max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="pt-10 p-4 md:p-6 font-terminal text-sm md:text-base">
            {BOOT_SEQUENCE.slice(0, bootIndex).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`${i === bootIndex - 1 ? 'text-primary' : 'text-muted-foreground'}`}
              >
                <span className="text-primary mr-2">{'>'}</span>
                {line}
              </motion.div>
            ))}
            {bootIndex < BOOT_SEQUENCE.length && (
              <span className="typing-cursor text-primary" />
            )}
          </div>
        </motion.div>

        {/* Main content */}
        {showContent && (
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
              <span className="text-foreground">DEVELOPER</span>
              <span className="text-primary">/</span>
              <span className="text-foreground">DESIGNER</span>
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
                { icon: Github, href: 'https://github.com/arunvignesh', label: 'GITHUB' },
                { icon: Linkedin, href: 'https://linkedin.com/in/arunvignesh', label: 'LINKEDIN' },
                { icon: Mail, href: 'mailto:hello@arunvignesh.one', label: 'EMAIL' },
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
            </motion.div>

            {/* Scroll indicator */}
            <motion.a
              href="#about"
              className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-terminal text-xs mb-2">SCROLL</span>
              <ChevronDown className="w-5 h-5" />
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};
