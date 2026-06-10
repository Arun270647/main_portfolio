import { Layout } from '@/components/Layout';
import { CertificatesSection } from '@/components/CertificatesSection';
import { Helmet } from 'react-helmet-async';
import { webPageSchema, breadcrumbSchema } from '@/utils/structuredData';

const Certificates = () => {
    return (
        <>
            <Helmet>
                <title>Certificates | Arun Vignesh</title>
                <meta name="description" content="7+ professional certifications in Full-Stack Development, Python, Android, React, and modern web technologies. View verified credentials and achievements." />
                <meta name="keywords" content="Certifications, Professional Certificates, React Certification, Python Certificate, Web Development Credentials, Developer Achievements" />
                <link rel="canonical" href="https://arunvignesh.my/certificates" />

                <meta property="og:title" content="Certificates | Arun Vignesh" />
                <meta property="og:description" content="Professional certifications in Full Stack, Python, Android Development." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://arunvignesh.my/certificates" />
                <meta property="og:site_name" content="Arun Vignesh Portfolio" />
                <meta name="twitter:title" content="Certificates | Arun Vignesh" />
                <meta name="twitter:description" content="Professional certifications in Full Stack, Python, Android Development." />

                <script type="application/ld+json">
                    {JSON.stringify(webPageSchema({
                        name: "Certificates - Arun Vignesh",
                        description: "Professional certifications and credentials in web development",
                        url: "https://arunvignesh.my/certificates"
                    }))}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema([
                        { name: "Home", url: "https://arunvignesh.my" },
                        { name: "Certificates", url: "https://arunvignesh.my/certificates" }
                    ]))}
                </script>
            </Helmet>

            <Layout breadcrumbs={[{ label: 'Certificates' }]}>
                <CertificatesSection />
            </Layout>
        </>
    );
};

export default Certificates;
