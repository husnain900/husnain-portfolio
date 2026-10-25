import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Cinematic line-art scenes for projects without a public screenshot, keyed by project id. */
const scenes: Record<string, ReactNode> = {
  qubix: (
    <g transform="translate(212 32)" fill="none" strokeWidth="2.5">
      <rect x="38" y="0" width="46" height="36" rx="9" strokeOpacity="0.55" />
      <rect x="38" y="132" width="46" height="36" rx="9" strokeOpacity="0.55" />
      <rect x="16" y="32" width="90" height="104" rx="26" strokeOpacity="0.9" />
      <rect x="108" y="66" width="11" height="24" rx="4" strokeOpacity="0.8" />
      <line x1="61" y1="84" x2="61" y2="58" strokeWidth="4" strokeLinecap="round" />
      <line x1="61" y1="84" x2="82" y2="94" strokeWidth="4" strokeLinecap="round" />
      <circle cx="61" cy="84" r="5" strokeOpacity="0.9" />
    </g>
  ),
  autoparts: (
    <g transform="translate(120 78)" fill="none" strokeWidth="2.5">
      <path d="M14 96 L38 58 Q43 49 56 47 L152 41 Q170 41 181 54 L202 78 L240 84 Q254 87 254 100 L254 112 L14 112 Z" strokeOpacity="0.9" />
      <path d="M60 50 L86 84 M150 44 L172 80" strokeOpacity="0.45" />
      <line x1="14" y1="112" x2="254" y2="112" strokeOpacity="0.4" />
      <circle cx="66" cy="112" r="15" strokeOpacity="0.9" />
      <circle cx="204" cy="112" r="15" strokeOpacity="0.9" />
      <circle cx="66" cy="112" r="5" strokeOpacity="0.6" />
      <circle cx="204" cy="112" r="5" strokeOpacity="0.6" />
    </g>
  ),
  glowz: (
    <g fill="none" strokeWidth="2.5">
      <g transform="translate(238 96)">
        <rect x="0" y="52" width="40" height="62" rx="6" strokeOpacity="0.9" />
        <rect x="5" y="32" width="30" height="22" strokeOpacity="0.6" />
        <path d="M5 32 L5 14 Q20 -4 35 14 L35 32 Z" strokeOpacity="0.9" />
      </g>
      <path d="M196 52 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4 Z" strokeOpacity="0.8" />
      <path d="M330 176 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 Z" strokeOpacity="0.6" />
      <path d="M214 190 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 Z" strokeOpacity="0.5" />
    </g>
  ),
  'game-rush-shopify': (
    <g transform="translate(112 84)" fill="none" strokeWidth="2.5">
      <rect x="0" y="0" width="176" height="96" rx="46" strokeOpacity="0.9" />
      <path d="M44 34 v28 M30 48 h28" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.85" />
      <circle cx="128" cy="38" r="7" strokeOpacity="0.85" />
      <circle cx="146" cy="56" r="7" strokeOpacity="0.65" />
      <circle cx="52" cy="66" r="9" strokeOpacity="0.55" />
      <circle cx="112" cy="66" r="9" strokeOpacity="0.55" />
    </g>
  ),
  pawnique: (
    <g transform="translate(196 66)" fill="none" strokeWidth="2.5">
      <ellipse cx="88" cy="96" rx="38" ry="29" strokeOpacity="0.9" />
      <circle cx="34" cy="52" r="12" strokeOpacity="0.75" />
      <circle cx="66" cy="34" r="13" strokeOpacity="0.9" />
      <circle cx="102" cy="34" r="13" strokeOpacity="0.9" />
      <circle cx="134" cy="54" r="12" strokeOpacity="0.75" />
    </g>
  ),
};
scenes['gamerush-wp'] = scenes['game-rush-shopify'];

/** Browser mockup for projects with a live public site; generated art for the rest. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  if (project.image) {
    let host = '';
    try { host = new URL(project.live ?? '').hostname.replace('www.', ''); } catch { host = ''; }
    return (
      <PosterBackdrop palette={project.palette} className={className}>
        <div className="absolute right-[5%] top-1/2 w-[64%] max-w-[440px] -translate-y-1/2 -rotate-3 overflow-hidden rounded-xl shadow-[0_36px_70px_-18px_rgba(0,0,0,0.75)] ring-1 ring-white/25">
          <div className="flex items-center gap-1.5 bg-[#141419] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            <span className="ml-2 flex-1 truncate rounded bg-white/10 px-2 py-0.5 text-[9px] font-medium tracking-wide text-white/70">{host}</span>
          </div>
          <img src={project.image} alt={`${project.title} — live website screenshot`} loading="lazy" decoding="async" className="block aspect-[16/10] w-full bg-white object-cover object-top" />
        </div>
      </PosterBackdrop>
    );
  }
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        {scenes[project.id] ? <g stroke={a}>{scenes[project.id]}</g> : null}
        {!scenes[project.id] && project.motif === 'shield' && (
          <g transform="translate(232 40)" fill="none" stroke={a} strokeOpacity="0.85">
            <path d="M58 0 L116 22 V78 C116 120 90 146 58 160 C26 146 0 120 0 78 V22 Z" strokeWidth="2" />
            <path d="M58 16 L102 33 V78 C102 111 82 132 58 144 C34 132 14 111 14 78 V33 Z" strokeWidth="1" strokeOpacity="0.4" />
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={i} x1="30" x2={i % 2 ? 72 : 86} y1={56 + i * 14} y2={56 + i * 14} strokeWidth="3" strokeLinecap="round" strokeOpacity={0.35 + i * 0.1} />
            ))}
            <path d="M40 124 l12 12 l26 -28" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
        {!scenes[project.id] && project.motif === 'flow' && (
          <g fill="none" stroke={a}>
            <rect x="200" y="56" width="150" height="94" rx="12" strokeWidth="2" strokeOpacity="0.85" />
            <rect x="214" y="72" width="28" height="20" rx="4" strokeOpacity="0.7" />
            <line x1="214" x2="330" y1="124" y2="124" strokeWidth="3" strokeOpacity="0.4" strokeDasharray="18 8" />
            <g transform="translate(176 196)" fontFamily="Inter" fontSize="10" fill={a} stroke="none" letterSpacing="2">
              <circle cx="16" cy="16" r="16" fill="none" stroke={a} strokeWidth="2" />
              <path d="M34 16 h46" stroke={a} strokeWidth="2" />
              <circle cx="96" cy="16" r="16" fill="none" stroke={a} strokeWidth="2" strokeOpacity="0.8" />
              <path d="M112 8 l38 -22 M112 24 l38 22" stroke={a} strokeWidth="2" strokeOpacity="0.6" />
              <circle cx="166" cy="-18" r="10" fill={a} fillOpacity="0.8" />
              <circle cx="166" cy="50" r="10" fill="none" stroke={a} strokeWidth="2" strokeOpacity="0.5" />
            </g>
          </g>
        )}
        {!scenes[project.id] && project.motif === 'tenants' && (
          <g fill="none" stroke={a}>
            {[0, 1, 2].map((r) =>
              [0, 1, 2, 3].map((c) => (
                <rect
                  key={`${r}-${c}`}
                  x={196 + c * 44}
                  y={50 + r * 44}
                  width="34"
                  height="34"
                  rx="7"
                  strokeWidth="1.6"
                  strokeOpacity={0.25 + ((r + c) % 3) * 0.25}
                  fill={(r + c) % 4 === 0 ? a : 'none'}
                  fillOpacity="0.25"
                />
              )),
            )}
            <path d="M188 200 h190" strokeWidth="2" strokeOpacity="0.7" />
            <path d="M188 214 h190" strokeWidth="1" strokeOpacity="0.35" />
            <path d="M188 228 h190" strokeWidth="1" strokeOpacity="0.2" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.1em] w-auto" aria-hidden>
        <path d="M5 4v24M19 4v24M5 16h14" fill="none" stroke="#e5132b" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
