import { Layout } from '@/components/Layout';
import { AboutSection } from '@/components/AboutSection';
import { Helmet } from 'react-helmet-async';
import { webPageSchema, breadcrumbSchema } from '@/utils/structuredData';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Arun Vignesh | BCA Student & Full-Stack Web Developer Chennai</title>
                <meta name="description" content="Meet Arun Vignesh - BCA student & experienced Full-Stack Web Developer from Chennai with 2+ years of experience. Specializing in React, TypeScript, Node.js, Firebase, and modern web development. Passionate about building scalable applications and learning new technologies." />
                <meta name="keywords" content="Arun Vignesh About, Full-Stack Developer Biography, BCA Student Chennai, Web Developer Profile, React Developer Experience, Chennai Developer Story, Professional Web Developer, Freelance Developer Chennai" />
                <link rel="canonical" href="https://www.arunvignesh.my/about" />

                <meta property="og:title" content="About | Arun Vignesh" />
                <meta property="og:description" content="Learn more about Arun Vignesh - Full-Stack Developer based in Chennai, India." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.arunvignesh.my/about" />
                <meta property="og:site_name" content="Arun Vignesh Portfolio" />
                <meta name="twitter:title" content="About | Arun Vignesh" />
                <meta name="twitter:description" content="Learn more about Arun Vignesh - Full-Stack Developer based in Chennai, India." />

                <script type="application/ld+json">
                    {JSON.stringify(webPageSchema({
                        name: "About Arun Vignesh",
                        description: "Learn more about Arun Vignesh - Full-Stack Developer based in Chennai, India",
                        url: "https://www.arunvignesh.my/about"
                    }))}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema([
                        { name: "Home", url: "https://www.arunvignesh.my" },
                        { name: "About", url: "https://www.arunvignesh.my/about" }
                    ]))}
                </script>
            </Helmet>

            <Layout breadcrumbs={[{ label: 'About' }]} currentPage="about">
                <AboutSection />
            </Layout>
        </>
    );
};

export default About;
