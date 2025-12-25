import { CRTScreen } from '@/components/CRTScreen';
import { RetroHeader } from '@/components/RetroHeader';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Arun Vignesh | Full-Stack Developer</title>
        <meta name="description" content="Arun Vignesh - Full-Stack Developer specializing in React, TypeScript, and modern web technologies. Building digital experiences with clean code and creative design." />
        <meta name="keywords" content="Arun Vignesh, Full-Stack Developer, React Developer, TypeScript, Web Developer, Chennai" />
        <meta property="og:title" content="Arun Vignesh | Full-Stack Developer" />
        <meta property="og:description" content="Building digital experiences with clean code and creative design." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://arunvignesh.one" />
      </Helmet>
      
      <CRTScreen className="min-h-screen scanlines noise-overlay crt-filter">
        <RetroHeader />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </CRTScreen>
    </>
  );
};

export default Index;
