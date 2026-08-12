import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0f10] w-full rounded-t-2xl border-t border-white/10 relative z-20 mt-auto py-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 gap-6 max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#home" className="font-display text-2xl font-bold text-[#e0e3e5] hover:text-[#d0bcff] transition-colors">
            KDAAY
          </a>
          <p className="text-sm text-[#4cd7f6]">
            © 2024 Kevin Dwi Andhika Ahmad Yarmis. Built with precision.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-xs font-mono-caps text-[#8c90a4]">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d0bcff] transition-colors hover:-translate-y-0.5 transform"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d0bcff] transition-colors hover:-translate-y-0.5 transform"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d0bcff] transition-colors hover:-translate-y-0.5 transform"
          >
            Twitter
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.socials.email}`}
            className="hover:text-[#d0bcff] transition-colors hover:-translate-y-0.5 transform"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
