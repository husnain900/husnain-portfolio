import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { profile, services } from '../data/portfolio';
import { EASE } from './fx';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const inputCls =
  'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[15px] text-bone placeholder:text-mist/50 outline-none transition focus:border-crimson focus:bg-white/[0.06]';
const labelCls = 'mb-2 block text-[11px] font-bold uppercase tracking-[0.28em] text-mist';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', service: services[0].title, budget: 'Not sure yet', whatsapp: '', message: '' });

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          service: form.service,
          budget: form.budget,
          whatsapp: form.whatsapp || '—',
          message: form.message,
          _subject: `New project enquiry — ${form.service} (${form.name})`,
          _template: 'table',
          _captcha: 'false',
          _replyto: form.email,
          _honey: '',
        }),
      });
      if (!res.ok) throw new Error('send failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section aria-label="Contact" className="relative px-[6vw] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10% 0px' }} transition={{ duration: 0.8, ease: EASE }}>
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.45em] text-crimson-2">
            <span className="h-px w-10 bg-crimson" /> Contact
          </p>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9] text-bone sm:text-7xl">Start a Project</h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mist">
            Tell me what you're building — a Shopify store, a Next.js app, or a full product. I reply within 24 hours with honest next steps, no obligation.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-9"
          >
            {status === 'sent' ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-crimson text-2xl text-white shadow-[0_0_50px_rgba(229,19,43,0.45)]">✓</span>
                <h3 className="mt-6 font-display text-3xl uppercase tracking-wide text-bone">Message received</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
                  Thanks, {form.name.split(' ')[0] || 'there'} — your enquiry is in my inbox. I'll reply to {form.email} within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => { setForm({ name: '', email: '', service: services[0].title, budget: 'Not sure yet', whatsapp: '', message: '' }); setStatus('idle'); }}
                  className="mt-8 rounded-full border border-white/25 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-bone transition hover:border-bone hover:bg-white/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate={false}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelCls} htmlFor="cf-name">Your name *</label>
                    <input id="cf-name" required value={form.name} onChange={set('name')} placeholder="e.g. Sarah from London" className={inputCls} autoComplete="name" />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="cf-email">Email *</label>
                    <input id="cf-email" required type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" className={inputCls} autoComplete="email" />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="cf-service">What do you need?</label>
                    <select id="cf-service" value={form.service} onChange={set('service')} className={`${inputCls} appearance-none [&>option]:bg-neutral-900`}>
                      {services.map((s) => (
                        <option key={s.number} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Something else">Something else</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="cf-budget">Budget</label>
                    <select id="cf-budget" value={form.budget} onChange={set('budget')} className={`${inputCls} appearance-none [&>option]:bg-neutral-900`}>
                      {['Under £300', '£300 – £1,000', '£1,000 – £3,000', '£3,000+', 'Not sure yet'].map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls} htmlFor="cf-wa">WhatsApp (optional)</label>
                    <input id="cf-wa" value={form.whatsapp} onChange={set('whatsapp')} placeholder="+44 …" className={inputCls} autoComplete="tel" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls} htmlFor="cf-msg">About your project *</label>
                    <textarea id="cf-msg" required rows={5} value={form.message} onChange={set('message')} placeholder="What are you building, what's the goal, and what's your timeline?" className={`${inputCls} resize-none`} />
                  </div>
                </div>
                {status === 'error' && (
                  <p className="mt-5 rounded-xl border border-crimson/40 bg-crimson/10 px-4 py-3 text-sm text-bone">
                    Something went wrong sending that. Please try again — or reach me directly on WhatsApp or at {profile.email}.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-crimson px-8 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-[0_0_40px_rgba(229,19,43,0.35)] transition hover:bg-crimson-2 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
                >
                  {status === 'sending' ? 'Sending…' : <>Send enquiry <span aria-hidden>▶</span></>}
                </button>
                <p className="mt-4 text-xs text-mist/70">Your details go straight to my inbox — never shared, no spam, ever.</p>
              </form>
            )}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {[
              { k: 'Fastest reply', v: 'WhatsApp — ' + profile.phone, href: profile.links.whatsapp },
              { k: 'Email', v: profile.email, href: `mailto:${profile.email}` },
              { k: 'LinkedIn', v: 'Connect with me', href: profile.links.linkedin },
              { k: 'GitHub', v: 'github.com/husnain900', href: profile.links.github },
            ].map((c) => (
              <a key={c.k} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noreferrer' : undefined} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/30 hover:bg-white/[0.05]">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-mist">{c.k}</p>
                <p className="mt-1.5 break-all text-[15px] font-semibold text-bone group-hover:text-white">{c.v} <span className="text-crimson-2">↗</span></p>
              </a>
            ))}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-mist">Based in</p>
              <p className="mt-1.5 text-[15px] font-semibold text-bone">Faisalabad, Pakistan — working with clients in the UK & worldwide</p>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.28em] text-mist">Reply time</p>
              <p className="mt-1.5 text-[15px] font-semibold text-bone">Within 24 hours, usually much faster</p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
