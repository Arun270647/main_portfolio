import { Layout } from '@/components/Layout';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Helmet } from 'react-helmet-async';

const Projects = () => {
    return (
        <>
            <Helmet>
                <title>Projects | Arun Vignesh</title>
                <meta name="description" content="Browse the project portfolio of Arun Vignesh - Web applications, games, and creative coding experiments." />
                <link rel="canonical" href="https://arunvignesh.one/projects" />
            </Helmet>

            <Layout>
                <ProjectsSection />
            </Layout>
        </>
    );
};

export default Projects;
