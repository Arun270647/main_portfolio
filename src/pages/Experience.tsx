import { Layout } from '../components/Layout';
import { ExperienceSection } from '../components/ExperienceSection';
import { Helmet } from 'react-helmet-async';

const Experience = () => {
    return (
        <Layout>
            <Helmet>
                <title>Experience | Arun Vignesh</title>
                <meta name="description" content="My professional experience and career journey" />
            </Helmet>
            <ExperienceSection />
        </Layout>
    );
};

export default Experience;
