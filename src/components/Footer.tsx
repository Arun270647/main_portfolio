import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/arunvignesh', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/arunvignesh', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/arunvignesh', label: 'Twitter' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t-2 border-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 retro-grid opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* ASCII Art Logo */}
          <pre className="font-terminal text-[6px] text-primary text-glow-green leading-none">
{`
 █████╗ ██╗   ██╗
██╔══██╗██║   ██║
███████║██║   ██║
██╔══██║╚██╗ ██╔╝
██║  ██║ ╚████╔╝ 
╚═╝  ╚═╝  ╚═══╝  
`}
          </pre>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center border border-muted-foreground/30 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="font-terminal text-xs text-muted-foreground text-center md:text-right">
            <p className="flex items-center gap-1 justify-center md:justify-end">
              © {currentYear} ARUN VIGNESH
            </p>
            <p className="flex items-center gap-1 justify-center md:justify-end mt-1">
              BUILT WITH <Heart className="w-3 h-3 text-destructive animate-pulse" /> & CODE
            </p>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-8 pt-6 border-t border-muted">
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
