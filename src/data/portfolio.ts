// All site content lives here. Edit this file to add a project, a role, a cert or a quote.

export type Project = {
  id: string;
  title: string;
  blurb: string;
  tech: string[];
  live: string;
  github?: string;
  category: 'client' | 'play';
  featured: boolean;
  shot?: string; // optional screenshot path, e.g. '/projects/track-my-academy.jpg'
};

// Order = display order. The first four featured ones ride the Home strip.
export const projects: Project[] = [
  { id: 'track-my-academy', shot: '/projects/track-my-academy.jpg', title: 'Track My Academy', blurb: 'Sports-academy management SaaS used by 500+ academies: operations, performance tracking, scaling. The product I went on to manage.', tech: ['React', 'Node.js', 'Firebase', 'Tailwind'], live: 'https://www.trackmyacademy.com/', github: 'https://github.com/Arun270647/TrackMyAcademy', category: 'client', featured: true },
  { id: 'kyra-elite', shot: '/projects/kyra-elite.jpg', title: 'Kyra Elite', blurb: 'Premium clothing & accessories e-commerce with an admin dashboard for product management. Fast, responsive, sells things.', tech: ['React', 'TypeScript', 'Tailwind', 'Vite'], live: 'https://kyraelite.com', github: 'https://github.com/Arun270647/kyra-elite', category: 'client', featured: true },
  { id: 'hand-cricket-ai', shot: '/projects/hand-cricket-ai.jpg', title: 'Hand Cricket AI', blurb: 'Browser game with real-time hand-gesture recognition. Your webcam is the controller.', tech: ['TensorFlow.js', 'MediaPipe', 'React', 'Canvas'], live: 'https://handcricket.arunvignesh.my/', github: 'https://github.com/Arun270647/Hand-Cricket-AI', category: 'play', featured: true },
  { id: 'marina-digitals', shot: '/projects/marina-digitals.jpg', title: 'Marina Digitals', blurb: 'Lead web developer on the site for a digital-marketing company. Also where I now work as senior software associate.', tech: ['React', 'Tailwind', 'Vite', 'Node.js'], live: 'https://marinadigi.com', github: 'https://github.com/Arun270647/Marina-Digitals', category: 'client', featured: true },
  { id: 'adsys-infotech', shot: '/projects/adsys-infotech.jpg', title: 'Adsys Infotech Solutions', blurb: 'Corporate site for an IT solutions provider: services, case studies, and a contact flow that actually converts.', tech: ['React', 'Tailwind', 'Vite'], live: 'https://adsysinfo.com', category: 'client', featured: true },
  { id: 'saysedu', shot: '/projects/saysedu.jpg', title: 'SaysEdu', blurb: 'Education consulting and creative communications platform for institutions and learning-sector clients.', tech: ['React', 'Tailwind', 'Vite'], live: 'https://saysedu.in', category: 'client', featured: true },
  { id: 'spark-information-tech', shot: '/projects/spark-information-tech.jpg', title: 'Spark Information Tech', blurb: '"We engineer the spark behind great digital products." Site for a digital product engineering firm.', tech: ['React', 'TypeScript', 'Tailwind'], live: 'https://sparkinformationtech.com', category: 'client', featured: true },
  { id: 'madipakkam-physio', shot: '/projects/madipakkam-physio.jpg', title: 'Madipakkam Physio & HC', blurb: '"Restoring Movement, Improving Life." Physiotherapy centre with 25+ years of clinical work: services, team, bookings.', tech: ['React', 'Tailwind', 'Vite'], live: 'https://madipakkamphysioandhc.com', category: 'client', featured: true },
  { id: 'fufies', title: 'Fufies', blurb: '"Made for Hugs." Storefront for a premium plush brand: warm, cozy, and surprisingly fast.', tech: ['React', 'Tailwind', 'Vite'], live: 'https://fufies.in', github: 'https://github.com/Arun270647/fufies', category: 'client', featured: true },
  { id: 'ashwin-portfolio', shot: '/projects/ashwin-portfolio.jpg', title: 'Ashwin Portfolio', blurb: '"Not just content. Cinema." Showcase for filmmaker Prince Ashwin: moody, cinematic, story-first.', tech: ['React', 'Tailwind', 'Vite'], live: 'https://ashwin-portfolio-opal.vercel.app/', github: 'https://github.com/Arun270647/ashwin-portfolio', category: 'client', featured: true },
  { id: 'aqua-arch', shot: '/projects/aqua-arch.jpg', title: 'Aqua Arch International', blurb: 'Corporate site for a water-infrastructure firm. Clean, services-first, built to inspire trust.', tech: ['React', 'Tailwind', 'Vite'], live: 'https://abchdnfhd.vercel.app/', github: 'https://github.com/Arun270647/aqua-arch', category: 'client', featured: true },
  { id: 'cp-sports', shot: '/projects/cp-sports.jpg', title: 'CP Sports Academy', blurb: "Website for a children's sports academy in Chennai: programs, enrolment, and student management.", tech: ['React', 'Material UI', 'Firebase'], live: 'https://www.cpsports.in', github: 'https://github.com/Arun270647/cp-sports', category: 'client', featured: false },
  { id: 'selvas-art-haus', shot: '/projects/selvas-art-haus.jpg', title: 'Selvas Art Haus', blurb: 'Portfolio for mehndi artistry, makeup design and aari embroidery. Intricate work, airy site.', tech: ['React', 'Tailwind', 'Netlify'], live: 'https://selvasarthaus.netlify.app/', github: 'https://github.com/Arun270647/selvas-art-haus', category: 'client', featured: false },
  { id: 'kanika-travels', title: 'Kanika Travels', blurb: 'Cab services across Tamil Nadu. Booking made simple, affordable, and mobile-first.', tech: ['React', 'Vite', 'Tailwind'], live: 'https://kanikatravels.com/', github: 'https://github.com/Arun270647/kanika-travels', category: 'client', featured: false },
  { id: 'endless-gamer', shot: '/projects/endless-gamer.jpg', title: 'Endless Gamer', blurb: 'Retro endless runner. Jump, dodge, rack up points, lose, repeat. Built for the browser.', tech: ['React', 'Vite', 'Tailwind'], live: 'https://endless-gamer.vercel.app/', github: 'https://github.com/Arun270647/endless-gamer', category: 'play', featured: false },
];

export type Role = {
  role: string;
  company: string;
  period: string;
  year: string;
  current?: boolean;
  badge?: string;
  bullets: string[];
};

// Newest first.
export const roles: Role[] = [
  { role: 'Chief Technology Officer', company: 'TrackMy Tech Pvt. Ltd.', period: 'Mar 2026 — present', year: '2026→', current: true, badge: 'promoted ↑', bullets: ['Lead technology strategy and system architecture for scalable web and mobile products', 'Own the product development roadmap, coordinating engineering, product and design from spec through release', 'Set the engineering standards for code review, deployment and release management across the team'] },
  { role: 'Software Product Manager', company: 'Track My Academy', period: 'Aug 2025 — Feb 2026', year: '2025', bullets: ['Owned the end-to-end lifecycle of a sports-academy SaaS used by 500+ academies, their coaches and players', 'Wrote PRDs, user stories, sprint goals and roadmaps with engineering and design, running Agile/Scrum', 'Ran UX research and usability testing; turned findings into a prioritised backlog that drove execution', 'Managed production releases, QA cycles and issue resolution to keep the platform stable'] },
  { role: 'Senior Software Associate', company: 'Marina Digital', period: 'Jan 2025 — present', year: '2025→', current: true, bullets: ['Build responsive production interfaces in Next.js, React and Tailwind for e-commerce, healthcare and IT-services clients', 'Deliver client sites end to end, from build through production launch, aligned with branding, performance and SEO', 'Manage deployment, domain configuration and post-launch maintenance across client environments'] },
  { role: 'Senior Web Developer', company: 'Track My Academy', period: 'Nov 2024 — Mar 2025', year: '2024', badge: 'promoted ↑', bullets: ['Led end-to-end development of the Track My Academy website in React, JavaScript and HTML/CSS', 'On-page SEO, Lighthouse performance optimisation and cross-browser compatibility fixes', 'Delivered multiple freelance sites on the side: full-stack, deployment, maintenance'] },
  { role: 'Android App Developer Intern', company: 'Corizo', period: 'Jan 2025 — Mar 2025', year: '2025', bullets: ['Built Android app features in Java and Kotlin with Android Studio', 'Implemented UI components following Android best practices; tested, debugged and tuned with mentors'] },
  { role: 'AI / ML Research Intern', company: 'Novitech R&D Pvt Ltd', period: 'Sep 2024 — Oct 2024', year: '2024', bullets: ['Data preprocessing, model training and basic experimentation', 'Supported the R&D team on AI-driven research tasks'] },
];

export type Skill = { name: string; level: number };
export type SkillGroup = { title: string; color: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  { title: 'frontend', color: 'var(--gum)', skills: [{ name: 'React', level: 92 }, { name: 'JavaScript', level: 90 }, { name: 'Tailwind CSS', level: 88 }, { name: 'Vite', level: 85 }, { name: 'TypeScript', level: 78 }, { name: 'Material UI', level: 72 }] },
  { title: 'backend', color: 'var(--mint)', skills: [{ name: 'Node.js', level: 82 }, { name: 'Firebase', level: 80 }, { name: 'REST APIs', level: 78 }] },
  { title: 'tools & AI', color: 'var(--must)', skills: [{ name: 'Git & GitHub', level: 90 }, { name: 'Vercel', level: 86 }, { name: 'TensorFlow.js', level: 75 }, { name: 'MediaPipe', level: 74 }, { name: 'Netlify', level: 72 }] },
];

/** Flat list for the candy jar. */
export const skills = [...skillGroups.flatMap(g => g.skills.map(s => s.name)), 'Android / Kotlin', 'Next.js'];

export type Certificate = { title: string; issuer: string; date: string; link: string };

export const certificates: Certificate[] = [
  { title: 'Full Stack Web Development', issuer: 'Rare Minds', date: 'April 2025', link: 'https://www.linkedin.com/in/arun-vignesh-v/details/certifications/1744177098980/single-media-viewer/?type=IMAGE&profileId=ACoAAFKpZ-gBAeoLDApgiBr2NWSFj2u83vntGL8' },
  { title: 'Android App Development Internship', issuer: 'Corizo', date: 'March 2025', link: 'https://cert.diceid.com/cid/FXskkVwGxq' },
  { title: 'Android App Development Course', issuer: 'Corizo', date: 'February 2025', link: 'https://cert.diceid.com/cid/O5RIq9K0U9' },
  { title: 'PCAP: Programming Essentials in Python', issuer: 'Udemy', date: 'June 2024', link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-8b81c966-8c1e-409e-bf77-b876fc782935.jpg' },
  { title: 'Web Development Course', issuer: 'Novitech', date: 'May 2024', link: 'https://www.linkedin.com/in/arun-vignesh-v/details/certifications/' },
  { title: 'Web Development Internship', issuer: 'Novitech', date: 'May 2024', link: 'https://www.linkedin.com/in/arun-vignesh-v/details/certifications/' },
  { title: 'Python Essentials', issuer: 'OpenEDG', date: 'June 2023', link: 'https://verify.openedg.org/?id=00WD.oBa1.vwGz' },
];

export type Testimonial = { name: string; role: string; company: string; project?: string; text: string; date: string };

export const testimonials: Testimonial[] = [
  { name: 'Rahul Dhileep Kumar', role: 'Founder & CEO', company: 'Track My Academy', project: 'track-my-academy', text: 'Arun is an exceptional developer with a keen eye for detail. His work on our academy management platform exceeded all expectations. The code quality and architecture are top-notch.', date: 'January 2026' },
  { name: 'Ashwin Saravanan', role: 'Founder', company: 'Marina Digitals', project: 'marina-digitals', text: 'An exceptional website built with creativity, strategy, and professionalism. You have successfully transformed our vision into a strong personal brand presence, delivering a website that is visually impressive, user-friendly, and impactful. Highly recommended for anyone looking to elevate their digital identity.', date: 'December 2025' },
  { name: 'Karthick Raghav', role: 'Product Owner', company: 'Kyra Elite', project: 'kyra-elite', text: 'Arun delivered our e-commerce platform ahead of schedule with excellent attention to UX and performance. The admin dashboard he built has streamlined our entire workflow.', date: 'November 2025' },
  { name: 'Selva Rajeshwari', role: 'Founder & Creative Director', company: 'Selvas Art Haus', project: 'selvas-art-haus', text: 'Arun created a beautiful portfolio website that perfectly captures the essence of our art business. His professionalism and technical skills made the entire process smooth and enjoyable.', date: 'October 2025' },
  { name: 'Joe Jasper', role: 'Founder', company: 'Fufies', project: 'fufies', text: 'Arun brought our "Made for Hugs" brand to life with a warm and inviting website. His understanding of our vision and ability to translate it into a beautiful digital experience was remarkable.', date: 'September 2025' },
  { name: 'Mr. Sadiq', role: 'Managing Director', company: 'Aqua Arch International', project: 'aqua-arch', text: 'Professional, efficient, and highly skilled. Arun delivered a corporate website that perfectly represents our business. His attention to detail and modern design approach impressed our entire team.', date: 'August 2025' },
  { name: 'Prince Ashwin', role: 'Content Creator & Filmmaker', company: 'Ashwin Portfolio', project: 'ashwin-portfolio', text: "Honestly, the portfolio turned out way better than I imagined. You understood exactly what I wanted and transformed it into something that feels uniquely me. The design is clean, modern, and super engaging. Every section flows perfectly, and it showcases my work in the best possible way. Couldn't have asked for a better portfolio.", date: 'July 2025' },
  { name: 'Mr. Arichandran', role: 'Director', company: 'CP Sports Academy', project: 'cp-sports', text: 'Working with Arun on our sports academy website was excellent. He created a user-friendly platform that helps us manage our students and showcase our programs effectively.', date: 'June 2025' },
];

export const stats = {
  projects: projects.length,
  clients: testimonials.length,
  certs: certificates.length,
  years: '2+',
};

export const advice = [
  "My code works, I don't know why. My code breaks, I don't know why.",
  "I didn't break the code. I just exposed its weakness.",
  'If the code runs, the submission deadline is near.',
  'Debugging: removing the bugs you added while fixing previous bugs.',
  'My program works perfectly… in my imagination.',
  'Coding at 2 AM turns bad ideas into confident ones.',
  'If it compiles without errors, be very suspicious.',
  'When nothing works, restart the laptop for emotional support.',
  'Code runs faster when the teacher is watching.',
  'Bugs appear exactly when confidence increases.',
  "I wrote this code yesterday. Today it's black magic.",
  'Real programmers measure time in deadlines, not hours.',
];

export const links = {
  email: 'mailto:shankar72ind@gmail.com',
  phone: 'tel:+918438996701',
  github: 'https://github.com/Arun270647',
  linkedin: 'https://www.linkedin.com/in/arun-vignesh-v/',
  instagram: 'https://www.instagram.com/_arun._.06/',
  resume: '/Arun_Vignesh_V_Resume.pdf',
};

// Card color cycle used on the Projects grid (bg, stripe, bottom shadow)
export const cardPalette: [string, string, string][] = [
  ['#ff8ad8', '#f57acb', '#fff3e0'],
  ['#5df2c8', '#4fe0b8', '#fff3e0'],
  ['#ffd23f', '#f2c12e', '#fff3e0'],
  ['#ff6b1a', '#f05f0e', '#fff3e0'],
  ['#fff3e0', '#ffe7c2', '#ff8ad8'],
];
export const cardRotations = ['-2deg', '1.5deg', '-1deg', '2deg', '-1.5deg', '1deg'];
