import { Layout } from '@/components/Layout';
import { ContactSection } from '@/components/ContactSection';
import { Helmet } from 'react-helmet-async';
import { webPageSchema, breadcrumbSchema } from '@/utils/structuredData';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact | Arun Vignesh</title>
                <meta name="description" content="Hire Arun Vignesh for freelance web development projects. Available for React, Node.js, and full-stack collaborations. Based in Chennai, India." />
                <meta name="keywords" content="Contact, Hire Developer, Freelance Web Developer, React Developer for Hire, Chennai Developer, Web Development Services" />
                <link rel="canonical" href="https://arunvignesh.my/contact" />

                <meta property="og:title" content="Contact | Arun Vignesh" />
                <meta property="og:description" content="Available for freelance work, collaborations, and opportunities." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://arunvignesh.my/contact" />
                <meta property="og:site_name" content="Arun Vignesh Portfolio" />
                <meta name="twitter:title" content="Contact | Arun Vignesh" />
                <meta name="twitter:description" content="Available for freelance work, collaborations, and opportunities." />

                <script type="application/ld+json">
                    {JSON.stringify(webPageSchema({
                        name: "Contact Arun Vignesh",
                        description: "Get in touch for freelance work, collaborations, and opportunities",
                        url: "https://arunvignesh.my/contact"
                    }))}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema([
                        { name: "Home", url: "https://arunvignesh.my" },
                        { name: "Contact", url: "https://arunvignesh.my/contact" }
                    ]))}
                </script>
            </Helmet>

            <Layout breadcrumbs={[{ label: 'Contact' }]}>
                <ContactSection />
            </Layout>
        </>
    );
};

export default Contact;
