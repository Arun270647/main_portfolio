import { Layout } from '@/components/Layout';
import { AboutSection } from '@/components/AboutSection';
import { Helmet } from 'react-helmet-async';
import { webPageSchema, breadcrumbSchema } from '@/utils/structuredData';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About | Arun Vignesh</title>
                <meta name="description" content="Meet Arun Vignesh - BCA student & Full-Stack Developer from Chennai with 2+ years experience. Specializing in React, Node.js & modern web development." />
                <meta name="keywords" content="Arun Vignesh, About, Full-Stack Developer, BCA Student, Chennai Developer, Web Developer Profile" />
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

            <Layout breadcrumbs={[{ label: 'About' }]}>
                <AboutSection />
            </Layout>
        </>
    );
};

export default About;
