import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, MapPin, Code2, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Arun270647', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/arun-vignesh-v/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/_arun._.06/', label: 'Instagram' },
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/30">
      {/* Background pattern */}
      <div className="absolute inset-0 retro-grid opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <pre className="font-terminal text-[8px] text-primary text-glow leading-none">
              {`
 █████╗ ██╗   ██╗
██╔══██╗██║   ██║
███████║██║   ██║
██╔══██║╚██╗ ██╔╝
██║  ██║ ╚████╔╝
╚═╝  ╚═╝  ╚═══╝
`}
            </pre>
            <p className="font-terminal text-xs text-muted-foreground max-w-xs">
              Full-stack developer crafting modern web experiences with React, Node.js, and AI/ML technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-pixel text-sm text-primary mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              QUICK_LINKS
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-terminal text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">{'>'}</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-pixel text-sm text-primary mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              CONTACT_INFO
            </h3>
            <ul className="space-y-3">
              <li className="font-terminal text-xs text-muted-foreground flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:arunvigneshviju@gmail.com" className="hover:text-primary transition-colors">
                  arunvigneshviju@gmail.com
                </a>
              </li>
              <li className="font-terminal text-xs text-muted-foreground flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-pixel text-sm text-primary mb-4">
              CONNECT
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center border border-muted-foreground/30 text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="font-terminal text-[10px] text-muted-foreground mt-4">
              Open to freelance projects and collaboration opportunities.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-terminal text-xs text-muted-foreground">
              © {currentYear} ARUN VIGNESH. All rights reserved.
            </p>
            <p className="font-terminal text-xs text-muted-foreground flex items-center gap-2">
              Built with
              <span className="text-primary">React</span>
              <span>+</span>
              <span className="text-primary">TypeScript</span>
              <span>+</span>
              <span className="text-primary">Vite</span>
            </p>
          </div>
        </div>

        {/* Terminal Shutdown Message */}
        <div className="pb-6">
          <pre className="font-terminal text-[8px] text-muted-foreground/50 text-center overflow-x-auto">
            {`
╔═══════════════════════════════════════════════════════════════════════════════════╗
║  SYSTEM.SHUTDOWN INITIATED... THANK YOU FOR VISITING. SEE YOU IN THE NEXT SESSION ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
`}
          </pre>
        </div>
      </div>
    </footer>
  );
};
