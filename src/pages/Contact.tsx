import { Layout } from '@/components/Layout';
import { ContactSection } from '@/components/ContactSection';
import { Helmet } from 'react-helmet-async';
import { webPageSchema, breadcrumbSchema } from '@/utils/structuredData';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact & Hire | Freelance Full-Stack Developer Chennai | Arun Vignesh</title>
                <meta name="description" content="Hire Arun Vignesh for professional freelance web development projects. Available for React, TypeScript, Node.js, and full-stack development collaborations. Experienced in building e-commerce platforms, web applications, and custom solutions. Based in Chennai, India. Contact via email or social media for project inquiries and opportunities." />
                <meta name="keywords" content="Hire Web Developer, Contact Developer, Freelance Full-Stack Developer Chennai, Hire React Developer India, Web Development Services Chennai, Freelance TypeScript Developer, Node.js Developer for Hire, E-commerce Developer Chennai, Project Collaboration, Web Development Freelancer, Contact Arun Vignesh" />
                <link rel="canonical" href="https://www.arunvignesh.my/contact" />

                <meta property="og:title" content="Contact | Arun Vignesh" />
                <meta property="og:description" content="Available for freelance work, collaborations, and opportunities." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.arunvignesh.my/contact" />
                <meta property="og:site_name" content="Arun Vignesh Portfolio" />
                <meta name="twitter:title" content="Contact | Arun Vignesh" />
                <meta name="twitter:description" content="Available for freelance work, collaborations, and opportunities." />

                <script type="application/ld+json">
                    {JSON.stringify(webPageSchema({
                        name: "Contact Arun Vignesh",
                        description: "Get in touch for freelance work, collaborations, and opportunities",
                        url: "https://www.arunvignesh.my/contact"
                    }))}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema([
                        { name: "Home", url: "https://www.arunvignesh.my" },
                        { name: "Contact", url: "https://www.arunvignesh.my/contact" }
                    ]))}
                </script>
            </Helmet>

            <Layout breadcrumbs={[{ label: 'Contact' }]} currentPage="contact">
                <ContactSection />
            </Layout>
        </>
    );
};

export default Contact;
