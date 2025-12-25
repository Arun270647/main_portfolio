import { Layout } from '@/components/Layout';
import { SkillsSection } from '@/components/SkillsSection';
import { Helmet } from 'react-helmet-async';

const Skills = () => {
    return (
        <>
            <Helmet>
                <title>Skills | Arun Vignesh</title>
                <meta name="description" content="Explore the technical skills of Arun Vignesh - Frontend, Backend, and DevOps expertise including React, TypeScript, Node.js, and more." />
                <link rel="canonical" href="https://arunvignesh.one/skills" />
            </Helmet>

            <Layout>
                <SkillsSection />
            </Layout>
        </>
    );
};

export default Skills;
