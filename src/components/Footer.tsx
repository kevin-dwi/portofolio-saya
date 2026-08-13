import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-[#0b0f10] w-full rounded-t-2xl border-t border-slate-200 dark:border-white/10 relative z-20 mt-auto py-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 gap-6 max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#home" className="font-display text-2xl font-bold text-slate-800 dark:text-[#e0e3e5] hover:text-violet-600 dark:hover:text-[#d0bcff] transition-colors">
            KDAAY
          </a>
          <p className="text-sm text-cyan-600 dark:text-[#4cd7f6]">
            © 2024 Kevin Dwi Andhika Ahmad Yarmis. Built with precision.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-xs font-mono-caps text-slate-400 dark:text-[#8c90a4]">
          {[
            { label: 'GitHub', href: PERSONAL_INFO.socials.github },
            { label: 'LinkedIn', href: PERSONAL_INFO.socials.linkedin },
            { label: 'Twitter', href: PERSONAL_INFO.socials.twitter },
            { label: 'Email', href: `mailto:${PERSONAL_INFO.socials.email}` },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="hover:text-violet-600 dark:hover:text-[#d0bcff] transition-colors hover:-translate-y-0.5 transform"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
