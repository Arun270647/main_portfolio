import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, Terminal } from "lucide-react";
import { CRTScreen } from "@/components/CRTScreen";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [location.pathname, navigate]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Arun Vignesh</title>
        <meta name="description" content="The page you're looking for doesn't exist. Navigate back to the homepage or explore other sections." />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="404 - Page Not Found" />
        <meta property="og:description" content="This page doesn't exist." />
      </Helmet>

      <CRTScreen className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 retro-grid opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            {/* Terminal Window */}
            <div className="terminal-window">
              <div className="p-8 md:p-12">
                {/* ASCII Art 404 */}
                <pre className="font-terminal text-primary text-[10px] md:text-xs mb-8 overflow-x-auto text-glow">
                  {`
  ██╗  ██╗ ██████╗ ██╗  ██╗
  ██║  ██║██╔═████╗██║  ██║
  ███████║██║██╔██║███████║
  ╚════██║████╔╝██║╚════██║
       ██║╚██████╔╝     ██║
       ╚═╝ ╚═════╝      ╚═╝
`}
                </pre>

                {/* Error Message */}
                <div className="space-y-4 font-terminal text-sm md:text-base">
                  <div className="flex items-start gap-2">
                    <span className="text-primary">$</span>
                    <div className="flex-1">
                      <p className="text-foreground">ERROR: PAGE_NOT_FOUND</p>
                      <p className="text-muted-foreground mt-2">
                        Requested path: <span className="text-red-500">"{location.pathname}"</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mt-6">
                    <span className="text-primary">{'>'}</span>
                    <p className="text-muted-foreground">
                      The page you're looking for doesn't exist in this dimension.
                      It may have been moved, deleted, or never existed at all.
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-primary">{'>'}</span>
                    <p className="text-muted-foreground">
                      Auto-redirecting to home in <span className="text-primary text-glow">{countdown}</span> seconds...
                    </p>
                  </div>
                </div>

                {/* Navigation Options */}
                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  <Link
                    to="/"
                    className="retro-btn flex items-center justify-center gap-2 font-terminal text-xs md:text-sm"
                  >
                    <Home className="w-4 h-4" />
                    HOME
                  </Link>
                  <button
                    onClick={() => navigate(-1)}
                    className="retro-btn flex items-center justify-center gap-2 font-terminal text-xs md:text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    GO BACK
                  </button>
                  <Link
                    to="/projects"
                    className="retro-btn flex items-center justify-center gap-2 font-terminal text-xs md:text-sm"
                  >
                    <Search className="w-4 h-4" />
                    PROJECTS
                  </Link>
                </div>

                {/* Quick Links */}
                <div className="mt-8 border-t border-border pt-6">
                  <p className="font-terminal text-xs text-muted-foreground mb-4 flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    QUICK NAVIGATION:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-terminal text-xs">
                    <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                      {'>'} About
                    </Link>
                    <Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">
                      {'>'} Skills
                    </Link>
                    <Link to="/experience" className="text-muted-foreground hover:text-primary transition-colors">
                      {'>'} Experience
                    </Link>
                    <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                      {'>'} Contact
                    </Link>
                  </div>
                </div>

                {/* System Log */}
                <div className="mt-8 p-4 bg-muted/30 border border-border font-terminal text-[10px] text-muted-foreground">
                  <p>[SYSTEM] Error code: 404</p>
                  <p>[SYSTEM] Timestamp: {new Date().toLocaleString()}</p>
                  <p>[SYSTEM] Status: NOT_FOUND</p>
                  <p>[SYSTEM] Action: REDIRECT_INITIATED</p>
                </div>
              </div>
            </div>

            {/* Footer ASCII */}
            <pre className="mt-6 font-terminal text-[8px] text-primary/30 text-center hidden md:block">
              {`
╔═══════════════════════════════════════════════════════════╗
║  "The only real mistake is the one from which we learn    ║
║   nothing." - Henry Ford                                   ║
╚═══════════════════════════════════════════════════════════╝
`}
            </pre>
          </motion.div>
        </div>
      </CRTScreen>
    </>
  );
};

export default NotFound;
