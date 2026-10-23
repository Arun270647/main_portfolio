import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
    {
        role: 'Chief Technology Officer',
        company: 'TrackMy Tech Pvt. Ltd.',
        period: 'Mar 2026 - Present',
        description: [
            'Lead technology strategy and system architecture decisions for scalable web and mobile products',
            'Own the product development roadmap, coordinating engineering, product and design functions from specification through release',
            'Established engineering standards for code review, deployment and release management across the team'
        ]
    },
    {
        role: 'Software Product Manager',
        company: 'Track My Academy',
        period: 'Aug 2025 - Feb 2026',
        description: [
            'Owned the end-to-end product lifecycle for a sports academy management SaaS platform used by 500+ sports academies and their coaches and players',
            'Defined PRDs, user stories, sprint goals and feature roadmaps with engineering and design teams using Agile and Scrum practices',
            'Ran iterative UX research and usability testing, translating findings into prioritised backlog items that drove engineering execution',
            'Managed production releases, QA cycles and issue resolution to maintain platform stability'
        ]
    },
    {
        role: 'Senior Software Associate',
        company: 'Marina Digital',
        period: 'Jan 2025 - Present',
        description: [
            'Developed responsive production interfaces using Next.js, React and Tailwind CSS for e-commerce, healthcare and IT-services clients, aligning frontend implementation with branding, performance and SEO requirements',
            'Delivered client-facing websites end to end, from build through production launch',
            'Managed deployment, domain configuration and post-launch maintenance across client production environments'
        ]
    },
    {
        role: 'Senior Web Developer',
        company: 'Track My Academy',
        period: 'Nov 2024 - Mar 2025',
        description: [
            'Led end-to-end development of the Track My Academy website using React, JavaScript and HTML/CSS',
            'Implemented on-page SEO, Lighthouse performance optimisation and cross-browser compatibility fixes'
        ]
    },
    {
        role: 'Android App Developer Intern',
        company: 'Corizo',
        period: 'Jan 2025 - Mar 2025',
        description: [
            'Built Android application features using Java, Kotlin and Android Studio'
        ]
    },
    {
        role: 'AI/ML Research Intern',
        company: 'Novitech R&D Pvt Ltd',
        period: 'Sep 2024 - Oct 2024',
        description: [
            'Supported data preprocessing, model training and AI-driven research tasks'
        ]
    }
];

export const ExperienceSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="py-12 relative bg-card/30" ref={ref}>
            <div className="container mx-auto px-4">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    className="flex items-center gap-4 mb-12"
                >
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    <h2 className="font-pixel text-base md:text-xl text-primary text-glow">
                        {'// EXPERIENCE_LOG'}
                    </h2>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                </motion.div>

                {/* Grid Layout - 3 cards per row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            className="terminal-window group flex flex-col before:hidden h-full"
                        >
                            {/* Window Header */}
                            <div className="px-4 py-2 text-xs font-terminal bg-border text-muted-foreground border-b border-border tracking-[0.25em]">
                                ● ○ ○
                            </div>

                            <div className="p-6 h-full flex flex-col">
                                <div className="flex flex-col justify-between mb-4 gap-3 border-b border-border/50 pb-4">
                                    <div>
                                        <h3 className="font-pixel text-xs md:text-sm text-primary text-glow mb-2">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-2 text-muted-foreground font-terminal text-xs mb-2">
                                            <Briefcase className="w-3 h-3" />
                                            <span className="text-foreground">{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary font-terminal text-[10px] md:text-xs bg-primary/10 px-2 py-1 self-start">
                                        <Calendar className="w-3 h-3" />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <div className="space-y-2 font-terminal text-xs text-foreground/80 flex-1">
                                    {exp.description.map((item, i) => (
                                        <div key={i} className="flex gap-2">
                                            <ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                                            <p className="leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
