import { motion } from 'framer-motion';
import { education, experience, profile, projects, skillCategories } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

export default function ResumeSection({ onView }: { onView: () => void }) {
  return <>
    <SectionHeading kicker="The full story" title="Behind the Build" />
    <div className="gutter grid gap-9 lg:grid-cols-[minmax(0,1fr)_300px]">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: EASE }}><ResumeSheet /></motion.div>
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <p className="font-serif text-3xl italic text-bone">A little context. A clear next step.</p>
        <p className="mt-4 text-sm leading-relaxed text-mist">Explore my background and selected work, then tell me what you have in mind.</p>
        <button type="button" onClick={onView} className="mt-6 flex min-h-12 w-full items-center justify-center rounded-md bg-bone px-5 font-semibold text-ink">View Profile</button>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="glass mt-3 flex min-h-12 items-center justify-center rounded-md px-5 text-sm text-bone">Connect on LinkedIn ↗</a>
        <a href={profile.links.whatsapp} target="_blank" rel="noreferrer" className="mt-5 block text-center text-sm text-crimson-2">Discuss your project ↗</a>
      </aside>
    </div>
  </>;
}
function H({ children }: { children: string }) { return <h4 className="mb-4 mt-8 border-b border-white/10 pb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2">{children}</h4>; }
export function ResumeSheet() {
  return <article className="overflow-hidden rounded-2xl bg-ink-2 p-6 ring-1 ring-white/10 sm:p-9">
    <p className="text-[10px] font-bold tracking-[0.3em] text-crimson-2">AI-ASSISTED BUILDS · REACT · SHOPIFY</p>
    <h3 className="mt-3 font-display text-5xl tracking-wide text-bone">{profile.fullName}</h3>
    <p className="mt-2 text-sm text-mist">{profile.role} · {profile.location}</p>
    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-xs text-bone"><a className="break-all hover:text-crimson-2" href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.phoneHref}>{profile.phone}</a><a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
    <p className="mt-6 text-sm leading-relaxed text-mist">{profile.intro}</p>
    <div className="grid gap-x-9 md:grid-cols-2"><div>
      <H>Experience</H>
      {experience.map(x => <div className="mb-5" key={x.company}><p className="font-semibold text-bone">{x.company}</p><p className="mt-1 text-xs text-crimson-2">{x.role}</p><p className="mt-2 text-xs leading-relaxed text-mist">{x.points.join(' ')}</p></div>)}
      <H>Education</H>{education.map(e => <div key={e.school}><p className="text-sm font-semibold text-bone">{e.school}</p><p className="mt-2 text-xs text-mist">{e.period}</p></div>)}
    </div><div>
      <H>Selected Work</H>{projects.map(p => <div key={p.id} className="mb-4"><p className="text-sm font-semibold text-bone">{p.title}</p><p className="mt-1 text-xs text-mist">{p.stack.join(' · ')}</p></div>)}
      <H>Toolkit & Services</H>{skillCategories.map(c => <p key={c.id} className="mb-3 text-xs leading-relaxed text-mist"><span className="font-semibold text-bone">{c.title}: </span>{c.skills.map(s => s.name).join(', ')}</p>)}
    </div></div>
  </article>;
}
