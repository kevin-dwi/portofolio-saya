import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const links = [
    { label: 'GitHub',    href: PERSONAL_INFO.socials.github,    external: true },
    { label: 'Instagram', href: PERSONAL_INFO.socials.instagram, external: true },
    { label: 'LinkedIn',  href: PERSONAL_INFO.socials.linkedin,  external: true },
    { label: 'Email',     href: `mailto:${PERSONAL_INFO.socials.email}`, external: false },
  ];

  return (
    <footer className="mt-8 relative" style={{ borderTop: '1px solid rgba(99,120,180,0.1)', background: 'rgba(5,8,16,0.8)' }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-5">

        <div className="text-center md:text-left">
          <a href="#home" className="font-display text-lg font-bold gradient-text hover:opacity-80 transition-opacity">
            KDAAY
          </a>
          <p className="font-mono-caps text-[10px] text-slate-600 mt-1">
            © 2025 Kevin Dwi Andhika Ahmad Yarmis
          </p>
        </div>

        <div className="flex items-center gap-1 flex-wrap justify-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="font-mono-caps text-[10px] px-3 py-2 rounded-lg text-slate-500 hover:text-violet-400 hover:bg-violet-500/8 transition-all uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
