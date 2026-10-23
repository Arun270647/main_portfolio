export type Project = {
  id: string;
  title: string;
  blurb: string;
  tech: string[];
  live: string;
  github: string;
  category: 'client' | 'play';
  featured: boolean;
  shot?: string; // optional screenshot path, e.g. '/projects/track-my-academy.jpg'
};

export const projects: Project[] = [
  { id: 'track-my-academy', title: 'Track My Academy', blurb: 'Sports-academy management platform — operations, performance tracking, scaling. The product I now manage.', tech: ['React', 'Node.js', 'Firebase', 'Tailwind'], live: 'https://www.trackmyacademy.com/', github: 'https://github.com/Arun270647/TrackMyAcademy', category: 'client', featured: true },
  { id: 'kyra-elite', title: 'Kyra Elite', blurb: 'Premium clothing & accessories e-commerce with an admin dashboard for product management. Fast, responsive, sells things.', tech: ['React', 'TypeScript', 'Tailwind', 'Vite'], live: 'https://kyraelite.com', github: 'https://github.com/Arun270647/kyra-elite', category: 'client', featured: true },
  { id: 'hand-cricket-ai', title: 'Hand Cricket AI', blurb: 'Browser game with real-time hand-gesture recognition. Your webcam is the controller.', tech: ['TensorFlow.js', 'MediaPipe', 'React', 'Canvas'], live: 'https://handcricket.arunvignesh.my/', github: 'https://github.com/Arun270647/Hand-Cricket-AI', category: 'play', featured: true },
  { id: 'marina-digitals', title: 'Marina Digitals', blurb: 'Lead web developer on the site for a digital-marketing company. Also where I now work as senior dev.', tech: ['React', 'Tailwind', 'Vite', 'Node.js'], live: 'https://marinadigi.com', github: 'https://github.com/Arun270647/Marina-Digitals', category: 'client', featured: true },
  { id: 'fufies', title: 'Fufies', blurb: '"Made for Hugs." Storefront for a premium plush brand — warm, cozy, and surprisingly fast.', tech: ['React', 'Tailwind', 'Vite'], live: 'https://fufies.in', github: 'https://github.com/Arun270647/fufies', category: 'client', featured: true },
  { id: 'ashwin-portfolio', title: 'Ashwin Portfolio', blurb: '"Not just content. Cinema." Showcase for filmmaker Prince Ashwin — moody, cinematic, story-first.', tech: ['React', 'Tailwind', 'Vite'], live: 'https://ashwin-portfolio-opal.vercel.app/', github: 'https://github.com/Arun270647/ashwin-portfolio', category: 'client', featured: true },
  { id: 'aqua-arch', title: 'Aqua Arch International', blurb: 'Corporate site for a water-infrastructure firm. Clean, services-first, built to inspire trust.', tech: ['React', 'Tailwind', 'Vite'], live: 'https://abchdnfhd.vercel.app/', github: 'https://github.com/Arun270647/aqua-arch', category: 'client', featured: true },
  { id: 'cp-sports', title: 'CP Sports Academy', blurb: "Website for a children's sports academy in Chennai — programs, enrolment, and student management.", tech: ['React', 'Material UI', 'Firebase'], live: 'https://www.cpsports.in', github: 'https://github.com/Arun270647/cp-sports', category: 'client', featured: false },
  { id: 'selvas-art-haus', title: 'Selvas Art Haus', blurb: 'Portfolio for mehndi artistry, makeup design and aari embroidery. Intricate work, airy site.', tech: ['React', 'Tailwind', 'Netlify'], live: 'https://selvasarthaus.netlify.app/', github: 'https://github.com/Arun270647/selvas-art-haus', category: 'client', featured: false },
  { id: 'kanika-travels', title: 'Kanika Travels', blurb: 'Cab services across Tamil Nadu. Booking made simple, affordable, and mobile-first.', tech: ['React', 'Vite', 'Tailwind'], live: 'https://kanikatravels.com/', github: 'https://github.com/Arun270647/kanika-travels', category: 'client', featured: false },
  { id: 'endless-gamer', title: 'Endless Gamer', blurb: 'Retro endless runner. Jump, dodge, rack up points, lose, repeat. Built for the browser.', tech: ['React', 'Vite', 'Tailwind'], live: 'https://endless-gamer.vercel.app/', github: 'https://github.com/Arun270647/endless-gamer', category: 'play', featured: false },
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

export const roles: Role[] = [
  { role: 'Software Product Manager', company: 'Track My Academy', period: 'Aug 2025 — present', year: '2025→', current: true, bullets: ['Own the end-to-end lifecycle of a sports-academy management platform', 'Write requirements, user stories and feature roadmaps', 'Coordinate engineering, design and QA to ship on time', 'Oversee releases, enhancements and issue resolution'] },
  { role: 'Senior Web Developer', company: 'Marina Digitals', period: 'Jan 2025 — present', year: '2025→', current: true, bullets: ["Deliver client websites aligned with Marina's branding and business goals", 'Build responsive, performance-optimised, SEO-friendly interfaces', 'Pair with designers and project teams on features, fixes and polish'] },
  { role: 'Android App Developer Intern', company: 'Corizo', period: 'Jan 2025 — Mar 2025', year: '2025', bullets: ['Built Android apps in Java/Kotlin with Android Studio', 'Implemented UI components and features following Android best practices', 'Tested, debugged and tuned app performance with mentors'] },
  { role: 'Senior Web Developer', company: 'Track My Academy', period: 'Nov 2024 — Mar 2025', year: '2024', badge: 'promoted ↑', bullets: ['Led end-to-end development of the main TrackMyAcademy website', 'Shipped responsive, high-performance React apps', 'SEO best practices, performance optimisation, cross-browser compatibility', 'Delivered multiple freelance sites — full-stack, deployment, maintenance'] },
  { role: 'Web Developer Intern', company: 'Track My Academy', period: 'Sep 2024 — Oct 2024', year: '2024', bullets: ['Trained in modern frontend practices (and yes, vibe coding)', 'Debugging, bug fixing and frontend UI updates', 'Supported feature enhancements and code optimisation'] },
  { role: 'AI / ML Intern', company: 'Novitech R&D Pvt Ltd', period: 'Sep 2024 — Oct 2024', year: '2024', bullets: ['Hands-on with AI and machine-learning fundamentals', 'Data preprocessing, model training, basic experimentation', 'Supported the R&D team on AI-driven research tasks'] },
];

export const skills = ['React', 'JavaScript', 'TypeScript', 'Tailwind', 'Vite', 'Node.js', 'Firebase', 'REST APIs', 'Material UI', 'TensorFlow.js', 'MediaPipe', 'Git & GitHub', 'Vercel', 'Netlify', 'Android / Kotlin'];

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
  github: 'https://github.com/Arun270647',
  linkedin: 'https://www.linkedin.com/in/arun-vignesh-v/',
  instagram: 'https://www.instagram.com/_arun._.06/',
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
