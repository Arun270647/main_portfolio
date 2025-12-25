import { Layout } from '@/components/Layout';
import { CertificatesSection } from '@/components/CertificatesSection';
import { Helmet } from 'react-helmet-async';

const Certificates = () => {
    return (
        <>
            <Helmet>
                <title>Certificates | Arun Vignesh</title>
                <meta name="description" content="View the certifications and credentials of Arun Vignesh - Full Stack, Python, Android Development, and more." />
                <link rel="canonical" href="https://arunvignesh.one/certificates" />
            </Helmet>

            <Layout>
                <CertificatesSection />
            </Layout>
        </>
    );
};

export default Certificates;
