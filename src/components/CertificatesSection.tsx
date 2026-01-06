import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

const certificates = [
    {
        id: 1,
        title: 'Full Stack Web Development',
        issuer: 'Rare Minds',
        date: 'April 2025',
        credentialLink: 'https://www.linkedin.com/in/arun-vignesh-v/details/certifications/1744177098980/single-media-viewer/?type=IMAGE&profileId=ACoAAFKpZ-gBAeoLDApgiBr2NWSFj2u83vntGL8',
    },
    {
        id: 2,
        title: 'PCAP: Programming Essentials in Python',
        issuer: 'Udemy',
        date: 'June 2024',
        credentialLink: 'https://udemy-certificate.s3.amazonaws.com/image/UC-8b81c966-8c1e-409e-bf77-b876fc782935.jpg',
    },
    {
        id: 3,
        title: 'Android App Development Internship',
        issuer: 'Corizo',
        date: 'March 2025',
        credentialLink: 'https://cert.diceid.com/cid/FXskkVwGxq',
    },
    {
        id: 4,
        title: 'Android App Development Course',
        issuer: 'Corizo',
        date: 'February 2025',
        credentialLink: 'https://cert.diceid.com/cid/O5RIq9K0U9',
    },
    {
        id: 5,
        title: 'Python Essentials',
        issuer: 'OpenEDG',
        date: 'June 2023',
        credentialLink: 'https://verify.openedg.org/?id=00WD.oBa1.vwGz',
    },
    {
        id: 6,
        title: 'Web Development Course',
        issuer: 'Novitech',
        date: 'May 2024',
        credentialLink: 'https://www.linkedin.com/in/arun-vignesh-v/details/certifications/',
    },
    {
        id: 7,
        title: 'Web Development Internship',
        issuer: 'Novitech',
        date: 'May 2024',
        credentialLink: 'https://www.linkedin.com/in/arun-vignesh-v/details/certifications/',
    },
];

const CertificateCard = ({ cert, index, isInView }: {
    cert: typeof certificates[0];
    index: number;
    isInView: boolean;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href={cert.credentialLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="terminal-window group cursor-pointer block flex flex-col before:hidden"
        >
            {/* Window Header */}
            <div className="px-4 py-2 text-xs font-terminal bg-border text-muted-foreground border-b border-border tracking-[0.25em]">
                ● ○ ○
            </div>

            <div className="p-6 md:p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <Award className={`w-8 h-8 md:w-10 md:h-10 ${isHovered ? 'text-primary' : 'text-muted-foreground'} transition-colors`} />
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-pixel text-xs md:text-sm text-primary group-hover:text-glow transition-all mb-3">
                    {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-2 mb-2">
                    <Building className="w-3 h-3 text-muted-foreground" />
                    <span className="font-terminal text-xs text-muted-foreground">
                        {cert.issuer}
                    </span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 mt-4">
                    <Calendar className="w-3 h-3 text-muted-foreground" />
                    <span className="font-terminal text-xs text-muted-foreground">
                        {cert.date}
                    </span>
                </div>

                {/* Hover effect line */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </motion.a>
    );
};

export const CertificatesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="certificates" className="py-12 relative bg-card/30" ref={ref}>
            <div className="container mx-auto px-4">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    className="flex items-center gap-4 mb-12"
                >
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    <h2 className="font-pixel text-base md:text-xl text-primary text-glow">
                        {'// CERTIFICATIONS'}
                    </h2>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                </motion.div>

                {/* Terminal command */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="font-terminal text-sm text-muted-foreground mb-8"
                >
                    <span className="text-primary">$</span> cat ./credentials/*.cert
                    <span className="typing-cursor" />
                </motion.div>

                {/* Certificates grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {certificates.map((cert, index) => (
                        <CertificateCard
                            key={cert.id}
                            cert={cert}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>

                {/* Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <pre className="font-terminal text-[10px] md:text-xs text-muted-foreground inline-block">
                        {`╔═══════════════════════════════════════════════════════════════╗
║  "Learning never exhausts the mind." - Leonardo da Vinci      ║
╚═══════════════════════════════════════════════════════════════╝`}
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};
