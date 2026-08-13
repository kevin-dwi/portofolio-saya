import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-16 pt-24 pb-16"
    >
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-6 mt-8 md:mt-12">
        {/* Profile Photo */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-400 to-cyan-400 dark:from-[#d0bcff] dark:to-[#4cd7f6] rounded-full blur opacity-40 group-hover:opacity-70 transition duration-700"></div>
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white dark:border-white/20 shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Kevin Dwi Andhika Ahmad Yarmis"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white dark:border-[#0f1214] shadow-md"></span>
        </div>

        {/* Specialty Pill */}
        <div className="inline-block px-6 py-2 rounded-full border border-violet-300 dark:border-[#d0bcff]/30 bg-violet-50 dark:bg-white/5 shadow-sm">
          <span className="font-mono-caps text-violet-600 dark:text-[#d0bcff] uppercase tracking-widest text-xs font-medium">
            {PERSONAL_INFO.specialty}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-slate-800 dark:text-[#e0e3e5] leading-tight">
          {PERSONAL_INFO.name}
          <br />
          <span className="gradient-text">{PERSONAL_INFO.surname}</span>
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-500 dark:text-[#cbc3d7] max-w-2xl mx-auto leading-relaxed">
          {PERSONAL_INFO.role}. {PERSONAL_INFO.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="#projects"
            className="btn-primary text-white font-mono-caps uppercase tracking-wider py-3.5 px-8 rounded-xl flex items-center gap-2 group transition-all cursor-pointer shadow-lg hover:scale-105"
          >
            <span>Explore My Work</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
          <a
            href="#contact"
            className="font-mono-caps uppercase tracking-wider py-3.5 px-8 rounded-xl flex items-center gap-2 border border-slate-300 dark:border-white/15 text-slate-600 dark:text-[#cbc3d7] hover:border-violet-400 dark:hover:border-[#d0bcff] hover:text-violet-600 dark:hover:text-[#d0bcff] transition-all hover:scale-105 bg-white/60 dark:bg-white/5 backdrop-blur-sm"
          >
            <span>Contact Me</span>
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce bg-white/70 dark:bg-white/5 backdrop-blur-sm p-2.5 rounded-full border border-slate-200 dark:border-white/10 shadow-md">
        <a
          href="#about"
          aria-label="Scroll to About Section"
          className="text-slate-400 dark:text-[#cbc3d7] hover:text-violet-500 dark:hover:text-[#d0bcff] transition-colors flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-3xl">keyboard_arrow_down</span>
        </a>
      </div>
    </section>
  );
};
