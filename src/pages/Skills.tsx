import { Layout } from '@/components/Layout';
import { SkillsSection } from '@/components/SkillsSection';
import { Helmet } from 'react-helmet-async';
import { webPageSchema, breadcrumbSchema } from '@/utils/structuredData';

const Skills = () => {
    return (
        <>
            <Helmet>
                <title>Skills | Arun Vignesh</title>
                <meta name="description" content="Technical expertise in React, TypeScript, Node.js, Firebase, Tailwind CSS, and AI/ML. Full-stack development skills with focus on modern web technologies." />
                <meta name="keywords" content="React, TypeScript, Node.js, Firebase, Tailwind CSS, JavaScript, HTML, CSS, Git, Web Development Skills, Frontend, Backend" />
                <link rel="canonical" href="https://arunvignesh.my/skills" />

                <meta property="og:title" content="Skills | Arun Vignesh" />
                <meta property="og:description" content="Frontend, Backend, and DevOps expertise including React, TypeScript, Node.js." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://arunvignesh.my/skills" />
                <meta property="og:site_name" content="Arun Vignesh Portfolio" />
                <meta name="twitter:title" content="Skills | Arun Vignesh" />
                <meta name="twitter:description" content="Frontend, Backend, and DevOps expertise including React, TypeScript, Node.js." />

                <script type="application/ld+json">
                    {JSON.stringify(webPageSchema({
                        name: "Skills - Arun Vignesh",
                        description: "Technical skills including React, TypeScript, Node.js, and modern web technologies",
                        url: "https://arunvignesh.my/skills"
                    }))}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema([
                        { name: "Home", url: "https://arunvignesh.my" },
                        { name: "Skills", url: "https://arunvignesh.my/skills" }
                    ]))}
                </script>
            </Helmet>

            <Layout breadcrumbs={[{ label: 'Skills' }]}>
                <SkillsSection />
            </Layout>
        </>
    );
};

export default Skills;
