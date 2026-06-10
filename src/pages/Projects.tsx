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
                <title>Projects | Arun Vignesh</title>
                <meta name="description" content="15+ projects including Track My Academy, Marina Digitals, Kyra Elite e-commerce platform & Hand Cricket AI. View live demos & source code on GitHub." />
                <meta name="keywords" content="Web Projects, React Projects, Portfolio, Track My Academy, Marina Digitals, Kyra Elite, E-commerce, GitHub Projects" />
                <link rel="canonical" href="https://arunvignesh.my/projects" />

                <meta property="og:title" content="Projects | Arun Vignesh" />
                <meta property="og:description" content="Portfolio of web applications, games, and creative projects." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://arunvignesh.my/projects" />
                <meta property="og:site_name" content="Arun Vignesh Portfolio" />
                <meta name="twitter:title" content="Projects | Arun Vignesh" />
                <meta name="twitter:description" content="Portfolio of web applications, games, and creative projects." />

                <script type="application/ld+json">
                    {JSON.stringify(webPageSchema({
                        name: "Projects - Arun Vignesh",
                        description: "Portfolio of web applications, games, and creative projects",
                        url: "https://arunvignesh.my/projects"
                    }))}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema([
                        { name: "Home", url: "https://arunvignesh.my" },
                        { name: "Projects", url: "https://arunvignesh.my/projects" }
                    ]))}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(portfolioSchema(featuredProjects))}
                </script>
            </Helmet>

            <Layout breadcrumbs={[{ label: 'Projects' }]}>
                <ProjectsSection />
            </Layout>
        </>
    );
};

export default Projects;
