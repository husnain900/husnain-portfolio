import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollLock } from '../hooks/smoothScroll';
import { ResumeSheet } from './ResumeViewer';
export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const close = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    close.current?.focus();
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', key);
    return () => { window.removeEventListener('keydown', key); previous?.focus(); };
  }, [onClose]);
  return <motion.div className="fixed inset-0 z-[140] overflow-y-auto bg-ink p-4 sm:p-10" data-lenis-prevent initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label="Husnain Tanveer professional profile" onKeyDown={e => {
    if (e.key !== 'Tab') return;
    const links = e.currentTarget.querySelectorAll<HTMLElement>('a[href],button');
    const first = links[0], last = links[links.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }}><div className="mx-auto max-w-5xl"><div className="mb-5 flex items-center justify-between"><p className="font-display text-3xl text-bone">THE FULL STORY</p><button ref={close} type="button" onClick={onClose} aria-label="Close profile" className="h-12 w-12 rounded-full border border-white/30 text-xl text-bone">✕</button></div><ResumeSheet /></div></motion.div>;
}
