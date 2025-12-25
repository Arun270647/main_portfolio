import { Layout } from '@/components/Layout';
import { ContactSection } from '@/components/ContactSection';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact | Arun Vignesh</title>
                <meta name="description" content="Get in touch with Arun Vignesh - Available for freelance work, collaborations, and opportunities." />
                <link rel="canonical" href="https://arunvignesh.one/contact" />
            </Helmet>

            <Layout>
                <ContactSection />
            </Layout>
        </>
    );
};

export default Contact;
