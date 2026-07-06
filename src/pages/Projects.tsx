import { Layout } from '@/components/Layout';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Helmet } from 'react-helmet-async';
import { webPageSchema, breadcrumbSchema, portfolioSchema } from '@/utils/structuredData';

const Projects = () => {
    const featuredProjects = [
        {
            name: "Track My Academy",
            description: "Comprehensive academy management platform with React, Node.js, and Firebase",
            url: "https://www.trackmyacademy.com/",
            technologies: ["React", "Node.js", "Firebase", "Tailwind"]
        },
        {
            name: "Marina Digitals",
            description: "Digital marketing agency website with modern design",
            url: "https://marinadigi.com",
            technologies: ["React", "Tailwind", "Vite"]
        },
        {
            name: "Kyra Elite",
            description: "Premium e-commerce platform with admin dashboard",
            url: "https://kyraelite.com",
            technologies: ["React", "TypeScript", "Tailwind CSS"]
        }
    ];

    return (
        <>
            <Helmet>
                <title>Web Development Projects Portfolio | React & Node.js | Arun Vignesh</title>
                <meta name="description" content="Explore 15+ professional web development projects by Arun Vignesh including Track My Academy (education management), Marina Digitals (marketing website), Kyra Elite & Fufies (e-commerce platforms), Hand Cricket AI (ML game). View live demos, case studies & source code on GitHub. Full-stack React, TypeScript, Node.js applications." />
                <meta name="keywords" content="Web Development Projects, React Projects Portfolio, Full-Stack Applications, E-commerce Development, Education Management System, AI ML Projects, Hand Cricket Game, TypeScript Projects, Node.js Applications, Firebase Projects, GitHub Portfolio, Live Project Demos, Web App Development Chennai" />
                <link rel="canonical" href="https://www.arunvignesh.my/projects" />

                <meta property="og:title" content="Projects | Arun Vignesh" />
                <meta property="og:description" content="Portfolio of web applications, games, and creative projects." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.arunvignesh.my/projects" />
                <meta property="og:site_name" content="Arun Vignesh Portfolio" />
                <meta name="twitter:title" content="Projects | Arun Vignesh" />
                <meta name="twitter:description" content="Portfolio of web applications, games, and creative projects." />

                <script type="application/ld+json">
                    {JSON.stringify(webPageSchema({
                        name: "Projects - Arun Vignesh",
                        description: "Portfolio of web applications, games, and creative projects",
                        url: "https://www.arunvignesh.my/projects"
                    }))}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema([
                        { name: "Home", url: "https://www.arunvignesh.my" },
                        { name: "Projects", url: "https://www.arunvignesh.my/projects" }
                    ]))}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(portfolioSchema(featuredProjects))}
                </script>
            </Helmet>

            <Layout breadcrumbs={[{ label: 'Projects' }]} currentPage="projects">
                <ProjectsSection />
            </Layout>
        </>
    );
};

export default Projects;
