import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
    {
        role: 'Software Product Manager',
        company: 'Track My Academy',
        period: 'Aug 2025 - Present',
        description: [
            'Managed end-to-end product lifecycle for a sports academy management platform',
            'Defined product requirements, user stories, and feature roadmaps',
            'Collaborated with engineering, design, and QA teams to deliver features on time',
            'Improved platform usability for academies, coaches, and players',
            'Oversaw releases, enhancements, and issue resolution to ensure product stability.'
        ]
    },
    {
        role: 'Senior Web Developer',
        company: 'Track My Academy',
        period: 'Nov 2024 - Mar 2025',
        description: [
            'Led end-to-end development of TrackMyAcademy\'s main website using modern web technologies',
            'Developed responsive, high-performance web applications using HTML, CSS, JavaScript, React',
            'Implemented SEO best practices, performance optimization, and cross-browser compatibility',
            'Collaborated with product managers, designers, and backend developers in agile workflows',
            'Delivered multiple freelance websites, handling full-stack development, deployment, and maintenance'
        ]
    },
    {
        role: 'Senior Web Developer',
        company: 'Marina Digitals',
        period: 'Jan 2025 - Present',
        description: [
            'Developed and delivered client websites and digital solutions aligned with Marina Digitals\' branding and business goals',
            'Built responsive, performance-optimized, and SEO-friendly web interfaces for diverse client projects',
            'Collaborated with designers and project teams to implement frontend features, enhancements, and bug fixes'
        ]
    },
    {
        role: 'Android App Developer Intern',
        company: 'Corizo',
        period: 'Jan 2025 - Mar 2025',
        description: [
            'Assisted in developing Android applications using Java/Kotlin and Android Studio',
            'Implemented UI components, basic features, and bug fixes following Android best practices',
            'Collaborated with mentors to test, debug, and improve app functionality and performance'
        ]
    },
    {
        role: 'Web Developer Intern',
        company: 'Track My Academy',
        period: 'Sep 2024 - Oct 2024',
        description: [
            'Trained in vibe coding and modern frontend development practices',
            'Assisted in debugging, bug fixing, and frontend UI updates',
            'Collaborated with developers to support feature enhancements and code optimization'
        ]
    },
    {
        role: 'Intern',
        company: 'Novitech R&D Pvt LTD',
        period: 'Sep 2024 - Oct 2024',
        description: [
            'Gained hands-on experience in artificial intelligence and machine learning concepts',
            'Assisted in data preprocessing, model training, and basic AI experimentation',
            'Collaborated with the R&D team to support AI-driven solutions and research tasks'
        ]
    }
];

export const ExperienceSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="py-20 relative bg-card/30" ref={ref}>
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

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            className="terminal-window group"
                        >
                            <div className="pt-10 p-6 md:p-8">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 border-b border-border/50 pb-4">
                                    <div>
                                        <h3 className="font-pixel text-sm md:text-lg text-primary text-glow mb-1">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-2 text-muted-foreground font-terminal text-sm">
                                            <Briefcase className="w-4 h-4" />
                                            <span className="text-foreground">{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary font-terminal text-xs md:text-sm bg-primary/10 px-3 py-1 rounded">
                                        <Calendar className="w-4 h-4" />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <div className="space-y-3 font-terminal text-sm text-foreground/80">
                                    {exp.description.map((item, i) => (
                                        <div key={i} className="flex gap-3">
                                            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <p>{item}</p>
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
