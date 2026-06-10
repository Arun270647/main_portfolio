import { Layout } from '../components/Layout';
import { ExperienceSection } from '../components/ExperienceSection';
import { Helmet } from 'react-helmet-async';
import { webPageSchema, breadcrumbSchema } from '@/utils/structuredData';

const Experience = () => {
    return (
        <Layout breadcrumbs={[{ label: 'Experience' }]}>
            <Helmet>
                <title>Experience | Arun Vignesh</title>
                <meta name="description" content="2+ years professional experience in full-stack development. Track record of successful client projects across e-commerce, SaaS, and web applications." />
                <meta name="keywords" content="Work Experience, Professional Experience, Full-Stack Developer Experience, Client Projects, Web Development Career" />
                <link rel="canonical" href="https://arunvignesh.my/experience" />

                <meta property="og:title" content="Experience | Arun Vignesh" />
                <meta property="og:description" content="Professional experience and career journey in web development." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://arunvignesh.my/experience" />
                <meta property="og:site_name" content="Arun Vignesh Portfolio" />
                <meta name="twitter:title" content="Experience | Arun Vignesh" />
                <meta name="twitter:description" content="Professional experience and career journey in web development." />

                <script type="application/ld+json">
                    {JSON.stringify(webPageSchema({
                        name: "Experience - Arun Vignesh",
                        description: "Professional experience and career journey",
                        url: "https://arunvignesh.my/experience"
                    }))}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema([
                        { name: "Home", url: "https://arunvignesh.my" },
                        { name: "Experience", url: "https://arunvignesh.my/experience" }
                    ]))}
                </script>
            </Helmet>
            <ExperienceSection />
        </Layout>
    );
};

export default Experience;
