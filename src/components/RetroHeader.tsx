import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, User, Briefcase, Mail, FileCode } from 'lucide-react';

const ASCII_LOGO = `
 █████╗ ██████╗ ██╗   ██╗███╗   ██╗
██╔══██╗██╔══██╗██║   ██║████╗  ██║
███████║██████╔╝██║   ██║██╔██╗ ██║
██╔══██║██╔══██╗██║   ██║██║╚██╗██║
██║  ██║██║  ██║╚██████╔╝██║ ╚████║
╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
`;

const navItems = [
  { label: 'ABOUT', icon: User, href: '#about' },
  { label: 'SKILLS', icon: Terminal, href: '#skills' },
  { label: 'PROJECTS', icon: FileCode, href: '#projects' },
  { label: 'CONTACT', icon: Mail, href: '#contact' },
];

export const RetroHeader = () => {
  const [time, setTime] = useState(new Date());
  const [activeNav, setActiveNav] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b-2 border-primary backdrop-blur-sm">
      {/* Top bar with system info */}
      <div className="border-b border-muted px-4 py-1 flex justify-between items-center text-xs font-terminal text-muted-foreground">
        <div className="flex gap-4">
          <span>▸ SYSTEM.PORTFOLIO v2.0.25</span>
          <span className="text-primary">● ONLINE</span>
        </div>
        <div className="flex gap-4">
          <span>MEM: 640KB</span>
          <span>CPU: 100%</span>
          <span className="text-primary">
            {time.toLocaleTimeString('en-US', { hour12: false })}
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <pre className="hidden lg:block text-[6px] leading-none text-primary font-terminal text-glow-green">
            {ASCII_LOGO}
          </pre>
          <div className="lg:hidden font-pixel text-primary text-glow-green text-sm">
            ARUN
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-1"
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setActiveNav(item.label)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`
                group relative px-3 py-2 flex items-center gap-2 font-terminal text-sm
                transition-all duration-200
                ${activeNav === item.label 
                  ? 'text-primary text-glow-green bg-primary/10' 
                  : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }
              `}
            >
              <item.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{item.label}</span>
              
              {/* Hover effect */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform" />
            </motion.a>
          ))}
        </motion.div>
      </nav>
    </header>
  );
};
