import { Layout } from '@/components/Layout';
import { AboutSection } from '@/components/AboutSection';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About | Arun Vignesh</title>
                <meta name="description" content="Learn more about Arun Vignesh - Full-Stack Developer based in Chennai, India. Passionate about building digital experiences with clean code." />
                <link rel="canonical" href="https://arunvignesh.one/about" />
            </Helmet>

            <Layout>
                <AboutSection />
            </Layout>
        </>
    );
};

export default About;
