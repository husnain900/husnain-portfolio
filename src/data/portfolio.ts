/** Husnain's portfolio. Public professional facts: exact LinkedIn profile; contact: supplied by owner. */
export type Palette = { from: string; via: string; to: string; accent: string };
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };
export const profile = {
  fullName: 'Husnain Tanveer', displayName: 'Husnain Tanveer', firstName: 'HUSNAIN',
  seriesTag: 'THE SERIES', originalLabel: 'A HUSNAIN TANVEER ORIGINAL',
  role: 'Web Developer & AI-Assisted Builder', tagline: ['AI-Assisted Builds', 'React Interfaces', 'Shopify'],
  intro: 'Have an idea worth building? I help turn it into a working web experience: an MVP to test your concept, a React interface, a Shopify storefront or a sharper website for your business. My approach combines AI-assisted iteration with hands-on development, careful design and testing before launch.',
  location: 'Faisalabad, Pakistan', email: 'husnain.tanvee123@gmail.com',
  phone: '+92 300 6618392', phoneHref: 'tel:+923006618392',
  links: { linkedin: 'https://www.linkedin.com/in/husnain-tanveer-589556237/', whatsapp: 'https://wa.me/923006618392' },
  portrait: { src: `${import.meta.env.BASE_URL}assets/portrait-720.webp`, srcSet: `${import.meta.env.BASE_URL}assets/portrait-420.webp 420w, ${import.meta.env.BASE_URL}assets/portrait-720.webp 720w, ${import.meta.env.BASE_URL}assets/portrait-1100.webp 1100w`, alt: 'Husnain Tanveer in a black suit' },
  interests: ['AI-assisted development', 'Product experiences', 'E-commerce'],
};
export const education = [{ school: 'Riphah International University', place: 'Pakistan', degree: 'University studies', period: '2021 – 2023', score: '' }];
export const experience = [
  { company: 'ASDEV Tech', role: 'Frontend Web Developer', place: 'Faisalabad', period: '', points: ['Frontend website development with an emphasis on engaging, responsive interfaces.'] },
  { company: 'KR TASKER DIGITAL LTD', role: 'Professional experience', place: 'Faisalabad', period: '', points: ['Faisalabad, Pakistan.'] },
];
export type Metric = { value: string; label: string };
export type Project = { id: string; title: string; year: string; genre: string; logline: string; stack: string[]; build: string[]; features: string[]; metrics: Metric[]; github?: string; live?: string; palette: Palette; motif: 'shield' | 'flow' | 'tenants' };
export const projects: Project[] = [
  { id: 'react-dashboard', title: 'React Dashboard', year: '2024', genre: 'Frontend • Dashboard',
    logline: 'A dashboard interface built with React, Tailwind CSS and Material UI.',
    stack: ['React', 'Tailwind CSS', 'Material UI'], build: ['Developed a React dashboard using Tailwind CSS and Material UI.'], features: ['Component-based interface', 'Utility-first styling', 'Material UI components'], metrics: [], palette: ocean, motif: 'tenants' },
];
export const services = [
  { title: 'AI-Assisted MVP Builds', number: '01', text: 'Move from an idea to a working first version. Define the essential user journeys, build an interactive prototype and refine it through feedback, with AI assisting the development workflow.', tags: ['Idea to prototype', 'Core user flows', 'Iterative delivery'] },
  { title: 'React Apps & Dashboards', number: '02', text: 'Give users a clear way to work with your product. Build responsive interfaces with reusable components, useful interactions and considered loading, empty and error states.', tags: ['React', 'Tailwind CSS', 'Product interfaces'] },
  { title: 'Shopify Store Experiences', number: '03', text: 'Make your storefront feel like your brand. Shape product pages, collections and custom theme sections around an easy mobile shopping journey.', tags: ['Theme customization', 'Custom sections', 'Product discovery'] },
  { title: 'Websites That Drive Action', number: '04', text: 'Launch a business website or campaign landing page with a clear message, strong visual hierarchy and a direct path to an enquiry, booking or purchase.', tags: ['Brand websites', 'Launch pages', 'Enquiry journeys'] },
  { title: 'Prototype to Launch', number: '05', text: 'Take an AI-generated draft or an unfinished build through the details it still needs: consistent components, responsive layouts, working interactions and a practical release checklist.', tags: ['Vibe-coded prototypes', 'Code refinement', 'Launch preparation'] },
  { title: 'Redesign & Performance', number: '06', text: 'Improve the website you already have. Review slow screens and awkward user journeys, refine the interface and check the changes across mobile and desktop.', tags: ['UX improvements', 'Performance review', 'Responsive fixes'] },
];
export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
  { id: 'frontend', title: 'Frontend', subtitle: 'Interactive experiences', skills: [{ name: 'React', mono: 'Re' }, { name: 'HTML', mono: 'Ht' }, { name: 'CSS', mono: 'Cs' }] },
  { id: 'styling', title: 'UI & Styling', subtitle: 'Consistent product interfaces', skills: [{ name: 'Tailwind CSS', mono: 'Tw' }, { name: 'Material UI', mono: 'Mu' }, { name: 'Responsive Design', mono: 'Rd' }] },
  { id: 'services', title: 'Build Capabilities', subtitle: 'From prototype to launch', skills: [{ name: 'AI-Assisted Development', mono: 'Ai', note: 'Workflow' }, { name: 'MVP Prototyping', mono: 'Mv', note: 'Service' }, { name: 'Shopify', mono: 'Sh', note: 'Service' }, { name: 'Landing Pages', mono: 'Lp', note: 'Service' }, { name: 'Performance Review', mono: 'Pr', note: 'Service' }] },
];
export const skillEvidence: Record<string, string[]> = {
  React: ['React Dashboard'], 'Tailwind CSS': ['React Dashboard'], 'Material UI': ['React Dashboard'],
  HTML: ['Frontend website development'], CSS: ['Responsive interface styling'],
  'Responsive Design': ['React interfaces', 'Mobile and desktop layout refinement'],
  'AI-Assisted Development': ['AI-assisted prototyping and iteration workflow'],
  'MVP Prototyping': ['Service: first-version interfaces and core user journeys'],
  'Performance Review': ['Service: website performance and usability review'],
  'Landing Pages': ['Service: brand and campaign landing pages'], Shopify: ['Service: storefront and theme customization'],
};
export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
export const seasons: Season[] = [
  { number: 1, title: 'The Foundation', period: '2021 – 2023', synopsis: 'The education chapter.', episodes: [{ code: 'S01 E01', title: 'University Years', description: 'Studies at Riphah International University.', tags: ['Riphah International University'], runtime: '2021 – 2023', palette: amber }] },
  { number: 2, title: 'The Work', period: 'Professional experience', synopsis: 'Turning interface ideas into websites.', episodes: [
    { code: 'S02 E01', title: 'Frontend in Practice', description: 'Frontend web development at ASDEV Tech.', tags: ['Frontend', 'Responsive websites'], runtime: 'ASDEV Tech', palette: ocean },
    { code: 'S02 E02', title: 'The Digital Chapter', description: 'Professional experience with KR TASKER DIGITAL LTD.', tags: ['Web', 'Digital'], runtime: 'KR TASKER DIGITAL', palette: crimson },
  ] },
  { number: 3, title: 'Your Next Chapter', period: 'Let’s build', synopsis: 'A simple path from your idea to a website.', episodes: [
    { code: 'S03 E01', title: 'Start with the Brief', description: 'Tell me what your business needs, who the site is for and what a successful launch looks like.', tags: ['Goals', 'Scope'], runtime: 'Discovery', palette: jade },
    { code: 'S03 E02', title: 'Prototype, Then Refine', description: 'Use AI-assisted iteration to explore the first version, then refine its code, design and interactions against the brief.', tags: ['AI-assisted builds', 'React', 'Feedback'], runtime: 'Build & refine', palette: crimson },
    { code: 'S03 E03', title: 'Ready for Real Users', description: 'Review key journeys, responsive layouts and loading states. Resolve release issues and prepare the agreed version for launch.', tags: ['Testing', 'Usability', 'Launch'], runtime: 'Review & release', palette: ocean },
  ] },
];
export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'Frontend', title: 'React', detail: 'Component-based interfaces', palette: ocean },
  { label: 'Styling', title: 'Tailwind CSS', detail: 'Utility-first UI development', palette: jade },
  { label: 'Components', title: 'Material UI', detail: 'A consistent UI toolkit', palette: amber },
  { label: 'Build workflow', title: 'AI-Assisted', detail: 'Prototype, review and refine', palette: crimson },
  { label: 'Storefronts', title: 'Shopify', detail: 'Your products, thoughtfully presented', palette: jade },
];
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  { kicker: 'Meet the builder', title: 'Husnain Tanveer', lines: [profile.role, 'Faisalabad, Pakistan'], chips: ['MVPs', 'Web apps', 'Storefronts'] },
  { kicker: 'The approach', title: 'Idea. Prototype. Launch.', lines: ['AI-assisted iteration, hands-on refinement.', 'Clear user journeys and a considered interface.'] },
  { kicker: 'Selected work', title: 'React Dashboard', lines: ['A component-based dashboard interface.', 'React, Tailwind CSS and Material UI.'], chips: ['React', 'Tailwind CSS', 'Material UI'] },
  { kicker: 'The next episode', title: 'Let’s Build Yours', lines: [profile.email, profile.phone], chips: ['AI-assisted MVPs', 'Shopify stores', 'React interfaces'] },
];
export type ProfileId = 'husnain' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'husnain', name: 'Husnain', blurb: 'The full series, in order', color: '#e5132b', order: ['about', 'moments', 'originals', 'skills', 'journey', 'picks', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Experience, skills & work first', color: '#4cc9ff', order: ['story', 'skills', 'originals', 'about', 'journey', 'moments', 'picks'] },
  { id: 'developer', name: 'Developer', blurb: 'Projects & stack first', color: '#46e3a8', order: ['originals', 'skills', 'moments', 'journey', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Client', blurb: 'Services & approach first', color: '#ffb547', order: ['moments', 'originals', 'about', 'journey', 'skills', 'picks', 'story'] },
];
export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'Meet Husnain', meta: 'The Pilot • A little about me', palette: ocean },
  journey: { nav: 'Journey', card: 'The Journey', meta: 'Background • Process • Next steps', palette: amber },
  originals: { nav: 'Work', card: 'Selected Work', meta: `${projects.length} Featured ${projects.length === 1 ? 'Project' : 'Projects'} • React`, palette: crimson },
  picks: { nav: 'Highlights', card: 'In the Spotlight', meta: 'Tools & capabilities', palette: jade },
  skills: { nav: 'Toolkit', card: 'The Toolkit', meta: 'React • UI • AI-assisted workflow', palette: ocean },
  moments: { nav: 'Services', card: 'Build Your Next Product', meta: 'MVPs • Web apps • Shopify', palette: crimson },
  story: { nav: 'Profile', card: 'The Full Story', meta: 'Experience & background', palette: amber },
};

