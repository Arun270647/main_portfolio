import { useState } from 'react';
import { CRTScreen } from '@/components/CRTScreen';
import { RetroHeader } from '@/components/RetroHeader';
import { HeroSection } from '@/components/HeroSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';
import { Preloader } from '@/components/Preloader';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import { organizationSchema, websiteSchema, profilePageSchema } from '@/utils/structuredData';

const PRELOADER_SEEN_KEY = 'preloader-seen';

// Checked at module load, before React replaces the build-time prerendered markup.
const hasPrerenderedContent = typeof document !== 'undefined' && Boolean(document.getElementById('root')?.hasChildNodes());

/**
 * The boot screen only plays once per session, and never when the page arrived
 * prerendered (it would hide content that was already on screen) or when the
 * visitor prefers reduced motion.
 */
const shouldShowPreloader = () => {
  if (hasPrerenderedContent) return false;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false;
  try {
    return sessionStorage.getItem(PRELOADER_SEEN_KEY) === null;
  } catch {
    return true;
  }
};

const markPreloaderSeen = () => {
  try {
    sessionStorage.setItem(PRELOADER_SEEN_KEY, '1');
  } catch {
    // Storage unavailable (private mode, blocked cookies); the boot screen just replays.
  }
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(shouldShowPreloader);
  const [playedPreloader] = useState(isLoading);

  return (
    <>
      <Helmet>
        <title>Arun Vignesh | Full-Stack Developer</title>
        <meta name="description" content="Arun Vignesh - Full-Stack Developer specializing in React, TypeScript, and modern web technologies. Building digital experiences with clean code and creative design." />
        <meta name="keywords" content="Arun Vignesh, Full-Stack Developer, React Developer, TypeScript, Web Developer, Chennai" />
        <meta property="og:title" content="Arun Vignesh | Full-Stack Developer" />
        <meta property="og:description" content="Building digital experiences with clean code and creative design." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arunvignesh.my" />
        <meta property="og:site_name" content="Arun Vignesh Portfolio" />
        <meta name="twitter:title" content="Arun Vignesh | Full-Stack Developer" />
        <meta name="twitter:description" content="Building digital experiences with clean code and creative design." />
        <link rel="canonical" href="https://www.arunvignesh.my" />

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(profilePageSchema)}
        </script>
      </Helmet>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader
            key="preloader"
            onComplete={() => {
              markPreloaderSeen();
              setIsLoading(false);
            }}
          />
        ) : (
          <motion.div
            key="main-content"
            initial={playedPreloader ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CRTScreen className="min-h-screen">
              <RetroHeader />
              <main>
                <HeroSection />
                <TestimonialsSection />
              </main>
              <Footer />
            </CRTScreen>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
