import { motion } from 'framer-motion';
import { profile, services } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

export default function Services() {
  return <>
    <SectionHeading kicker="From idea to a working product" title="Build Your Next Product" aside={<p className="max-w-xs text-sm text-mist">An MVP to validate, a product interface to improve, or a storefront ready for your next launch.</p>} />
    <div className="gutter grid gap-4 md:grid-cols-2">
      {services.map((s, i) => <motion.article key={s.number} className="group rounded-2xl border border-white/10 bg-ink-2 p-6 transition hover:border-crimson-2/50 sm:p-9" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: EASE, delay: i * 0.06 }}>
        <div className="flex flex-wrap items-start justify-between gap-3"><span className="text-xs font-semibold tracking-[0.3em] text-crimson-2">EPISODE {s.number}</span><a href={`${profile.links.whatsapp}?text=${encodeURIComponent(`Hi Husnain, I'd like to discuss ${s.title.toLowerCase()}.`)}`} target="_blank" rel="noreferrer" aria-label={`Discuss ${s.title} on WhatsApp`} className="flex min-h-11 items-center justify-center rounded-full border border-white/20 px-3 text-xs text-bone transition hover:border-crimson-2 hover:text-crimson-2">Discuss on WhatsApp ↗</a></div>
        <h3 className="mt-5 font-display text-4xl tracking-wide text-bone">{s.title}</h3>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-mist">{s.text}</p>
        <div className="mt-7 flex flex-wrap gap-2">{s.tags.map(t => <span key={t} className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-bone/80">{t}</span>)}</div>
      </motion.article>)}
    </div>
  </>;
}

