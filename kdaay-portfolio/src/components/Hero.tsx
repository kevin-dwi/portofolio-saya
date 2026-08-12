import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-16 pt-24 pb-16"
    >
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-6 mt-8 md:mt-12 glass-panel p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
        {/* Specialty Pill */}
        <div className="inline-block glass-panel px-6 py-2 rounded-full mb-2 border border-[#d0bcff]/30 shadow-[0_0_15px_rgba(208,188,255,0.2)]">
          <span className="font-mono-caps text-[#d0bcff] uppercase tracking-widest text-xs font-medium">
            {PERSONAL_INFO.specialty}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#e0e3e5] mb-2 glow-text leading-tight">
          {PERSONAL_INFO.name}
          <br />
          <span className="gradient-text">{PERSONAL_INFO.surname}</span>
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-[#cbc3d7] max-w-2xl mx-auto mb-6 leading-relaxed drop-shadow-md">
          {PERSONAL_INFO.role}. {PERSONAL_INFO.tagline}
        </p>

        {/* CTA Button */}
        <a
          href="#projects"
          className="btn-primary text-white font-mono-caps uppercase tracking-wider py-4 px-8 rounded-lg flex items-center gap-2 group transition-all cursor-pointer shadow-lg hover:scale-105"
        >
          <span>Explore My Work</span>
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce bg-white/5 backdrop-blur-sm p-2.5 rounded-full border border-white/10 shadow-lg">
        <a
          href="#about"
          aria-label="Scroll to About Section"
          className="text-[#cbc3d7] hover:text-[#d0bcff] transition-colors flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-3xl">keyboard_arrow_down</span>
        </a>
      </div>
    </section>
  );
};
