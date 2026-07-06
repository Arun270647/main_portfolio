import { Layout } from '@/components/Layout';
import { SkillsSection } from '@/components/SkillsSection';
import { Helmet } from 'react-helmet-async';
import { webPageSchema, breadcrumbSchema } from '@/utils/structuredData';

const Skills = () => {
    return (
        <>
            <Helmet>
                <title>Technical Skills | React, TypeScript, Node.js Expert | Arun Vignesh</title>
                <meta name="description" content="Comprehensive technical expertise in React, TypeScript, Node.js, Firebase, Tailwind CSS, AI/ML, and TensorFlow.js. Full-stack development skills covering frontend, backend, databases, and modern web technologies. Experienced in building scalable web applications and e-commerce platforms." />
                <meta name="keywords" content="React Developer Skills, TypeScript Expert, Node.js Developer, Firebase Integration, Tailwind CSS, JavaScript ES6+, HTML5 CSS3, Git GitHub, Full-Stack Skills, Frontend Development, Backend Development, REST API, GraphQL, MongoDB, PostgreSQL, AI ML Developer" />
                <link rel="canonical" href="https://www.arunvignesh.my/skills" />

                <meta property="og:title" content="Skills | Arun Vignesh" />
                <meta property="og:description" content="Frontend, Backend, and DevOps expertise including React, TypeScript, Node.js." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.arunvignesh.my/skills" />
                <meta property="og:site_name" content="Arun Vignesh Portfolio" />
                <meta name="twitter:title" content="Skills | Arun Vignesh" />
                <meta name="twitter:description" content="Frontend, Backend, and DevOps expertise including React, TypeScript, Node.js." />

                <script type="application/ld+json">
                    {JSON.stringify(webPageSchema({
                        name: "Skills - Arun Vignesh",
                        description: "Technical skills including React, TypeScript, Node.js, and modern web technologies",
                        url: "https://www.arunvignesh.my/skills"
                    }))}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema([
                        { name: "Home", url: "https://www.arunvignesh.my" },
                        { name: "Skills", url: "https://www.arunvignesh.my/skills" }
                    ]))}
                </script>
            </Helmet>

            <Layout breadcrumbs={[{ label: 'Skills' }]} currentPage="skills">
                <SkillsSection />
            </Layout>
        </>
    );
};

export default Skills;
