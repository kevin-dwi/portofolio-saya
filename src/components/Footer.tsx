import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const links = [
    { label: 'GitHub', href: PERSONAL_INFO.socials.github, external: true },
    { label: 'Instagram', href: PERSONAL_INFO.socials.instagram, external: true },
    { label: 'LinkedIn', href: PERSONAL_INFO.socials.linkedin, external: true },
    { label: 'Email', href: `mailto:${PERSONAL_INFO.socials.email}`, external: false },
  ];

  return (
    <footer className="mt-8 border-t border-slate-200 dark:border-white/[0.06] bg-white dark:bg-[#0d1117]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <a href="#home" className="font-display text-lg font-bold text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
            KDAAY
          </a>
          <p className="font-mono-caps text-[10px] text-slate-400 mt-0.5">
            © 2024 Kevin Dwi Andhika Ahmad Yarmis
          </p>
        </div>

        <div className="flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="font-mono-caps text-[10px] px-3 py-2 rounded-lg text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-all uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
