import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, User, Terminal, FileCode, Send, Award, Download } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import resumePdf from '@/resume/Arun Resume.pdf';

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

  const [showAdvice, setShowAdvice] = useState(false);
  const [currentAdvice, setCurrentAdvice] = useState('');
  const [resumeOpen, setResumeOpen] = useState(false);

  const ADVICES = [
    "My code works, I don’t know why. My code breaks, I don’t know why.",
    "I didn’t break the code. I just exposed its weakness.",
    "If the code runs, submission deadline is near.",
    "Debugging: removing the bugs you added while fixing previous bugs.",
    "Every error teaches something — mostly patience and anger.",
    "My program works perfectly… in my imagination.",
    "Coding at 2 AM turns bad ideas into confident ones.",
    "I don’t need sleep, I need this code to pass.",
    "If it compiles without errors, be very suspicious.",
    "One more small change before submission = disaster.",
    "The syllabus is temporary, backlogs are forever.",
    "My logic is correct, the output is wrong.",
    "When nothing works, restart the laptop for emotional support.",
    "Code runs faster when the teacher is watching.",
    "I trust my code until I see the output.",
    "Programming exams test how well you can panic calmly.",
    "If the output matches once, immediately submit.",
    "Bugs appear exactly when confidence increases.",
    "I wrote this code yesterday. Today it’s black magic.",
    "Real programmers measure time in deadlines, not hours."
  ];

  const [location, setLocation] = useState<{
    lat: string;
    lng: string;
    text: string;
  }>({
    lat: '13.0827° N',
    lng: '80.2707° E',
    text: 'CHENNAI, IN'
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        const latDir = latitude >= 0 ? 'N' : 'S';
        const lngDir = longitude >= 0 ? 'E' : 'W';
        const latStr = `${Math.abs(latitude).toFixed(4)}° ${latDir}`;
        const lngStr = `${Math.abs(longitude).toFixed(4)}° ${lngDir}`;

        try {
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await response.json();
          const city = data.city || data.locality || 'UNKNOWN';
          const country = data.countryCode || 'LOC';
          const locationText = `${city.toUpperCase()}, ${country}`;

          setLocation({
            lat: latStr,
            lng: lngStr,
            text: locationText.substring(0, 12) // Truncate to fit
          });
        } catch (error) {
          setLocation(prev => ({ ...prev, lat: latStr, lng: lngStr, text: 'DETECTED' }));
        }
      }, (error) => {
        console.error("Geolocation error:", error);
      });
    }
  }, []);

  const navLinks = [
    { label: 'ABOUT', icon: User, href: '/about', description: 'Learn about me' },
    { label: 'SKILLS', icon: Terminal, href: '/skills', description: 'My tech stack' },
    { label: 'PROJECTS', icon: FileCode, href: '/projects', description: 'View my work' },
    { label: 'CERTS', icon: Award, href: '/certificates', description: 'Certifications' },
    { label: 'CONTACT', icon: Send, href: '/contact', description: 'Get in touch' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center retro-grid overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
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
│ ${location.lat.padEnd(12)} │
│ ${location.lng.padEnd(12)} │
│ ${location.text.padEnd(12)} │
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
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
            Full Stack Web Developer & BCA student. Passionate about exploring technology,
            challenging myself through development, and constantly learning new tools to create meaningful digital experiences.
          </motion.p>

          {/* Advice Button */}
          <motion.button
            onClick={() => {
              const randomAdvice = ADVICES[Math.floor(Math.random() * ADVICES.length)];
              setCurrentAdvice(randomAdvice);
              setShowAdvice(true);
            }}
            className="retro-btn mb-12 text-xs md:text-sm px-6 py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Get random developer advice"
          >
            Click for a piece of advice
          </motion.button>

          {/* Social links */}
          <motion.div
            className="flex justify-center gap-3 md:gap-4 mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { icon: Github, href: 'https://github.com/Arun270647', label: 'GITHUB', ariaLabel: 'Visit GitHub profile' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/arun-vignesh-v/', label: 'LINKEDIN', ariaLabel: 'Visit LinkedIn profile' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="retro-btn flex items-center gap-2 text-xs md:text-sm"
                aria-label={social.ariaLabel}
              >
                <social.icon className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">{social.label}</span>
              </motion.a>
            ))}

            <Link
              to="/contact"
              className="retro-btn flex items-center gap-2 text-xs md:text-sm"
              aria-label="Go to contact page"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">EMAIL</span>
            </Link>

            <Dialog open={resumeOpen} onOpenChange={setResumeOpen}>
              <DialogTrigger asChild>
                <button className="retro-btn flex items-center gap-2 text-xs md:text-sm" aria-label="View resume">
                  <FileCode className="w-4 h-4" aria-hidden="true" />
                  <span className="hidden sm:inline">VIEW RESUME/CV</span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 gap-0 overflow-hidden">
                <div className="relative w-full h-full">
                  <iframe src={`${resumePdf}#zoom=65`} title="Resume" className="w-full h-full block" />
                  <div className="absolute top-4 right-4 flex gap-2 z-10">
                    <a
                      href={resumePdf}
                      download="Arun_Vignesh_Resume.pdf"
                      className="retro-btn flex items-center gap-2 text-xs font-terminal bg-background/95 backdrop-blur-sm"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Download resume as PDF"
                    >
                      <Download className="w-4 h-4" aria-hidden="true" />
                      PDF
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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
                  <div className="pt-16 p-6 text-center">
                    <link.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="font-pixel text-sm md:text-base text-primary group-hover:text-glow transition-all">
                      {link.label}
                    </div>
                    <div className="font-terminal text-xs md:text-sm text-muted-foreground mt-1">
                      {link.description}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-12 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {[
              { label: 'PROJECTS', value: '15+', sub: '(Freelance + Personal)' },
              { label: 'EXPERIENCE', value: '2+', sub: 'Years of Experience' },
              { label: 'CERTIFICATIONS', value: '7+', sub: 'Professional Certs' },
            ].map((stat, index) => (
              <div key={index} className="terminal-window pt-16 p-4 text-center">
                <div className="font-pixel text-2xl md:text-3xl text-primary text-glow mb-1">
                  {stat.value}
                </div>
                <div className="font-terminal text-base md:text-lg text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="font-terminal text-xs md:text-sm text-muted-foreground">
                  {stat.sub}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {/* Advice Modal */}
      <AnimatePresence>
        {showAdvice && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAdvice(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="terminal-window max-w-lg w-full relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-card/50">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-primary" />
                  <span className="font-pixel text-xs text-primary">ADVICE.EXE</span>
                </div>
                <button
                  onClick={() => setShowAdvice(false)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="font-mono">[X]</span>
                </button>
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <div className="mb-6">
                  <span className="font-terminal text-primary text-xl md:text-2xl leading-relaxed text-glow">
                    "{currentAdvice}"
                  </span>
                </div>
                <button
                  onClick={() => {
                    const randomAdvice = ADVICES[Math.floor(Math.random() * ADVICES.length)];
                    setCurrentAdvice(randomAdvice);
                  }}
                  className="retro-btn text-xs px-4 py-1 mr-4"
                  aria-label="Get another advice"
                >
                  ANOTHER ONE
                </button>
                <button
                  onClick={() => setShowAdvice(false)}
                  className="text-muted-foreground hover:text-primary font-terminal text-xs transition-colors"
                  aria-label="Close advice modal"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
