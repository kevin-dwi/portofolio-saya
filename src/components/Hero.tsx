import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-28">
      <div className="text-center flex flex-col items-center gap-7 animate-fadeInUp">

        {/* Profile photo */}
        <div className="relative animate-float">
          {/* Outer glow ring */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 opacity-20 blur-xl" />
          {/* Spinning gradient border */}
          <div className="relative p-[3px] rounded-full bg-gradient-to-br from-indigo-400 via-violet-500 to-cyan-400 shadow-[0_0_40px_rgba(139,92,246,0.4)]">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden bg-[#0d1220]">
              <img
                src="/profile.jpg"
                alt="Kevin Dwi Andhika Ahmad Yarmis"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          {/* Online dot */}
          <span className="absolute bottom-2 right-2 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 ring-2 ring-[#080c14]" />
          </span>
        </div>

        {/* Badge */}
        <span className="section-label">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          {PERSONAL_INFO.specialty}
        </span>

        {/* Name */}
        <div className="space-y-1">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none">
            {PERSONAL_INFO.name}
          </h1>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none gradient-text">
            {PERSONAL_INFO.surname}
          </h1>
        </div>

        {/* Role */}
        <div className="space-y-2">
          <p className="font-mono-caps text-indigo-400 uppercase tracking-widest text-xs">
            {PERSONAL_INFO.role}
          </p>
          <p className="text-base md:text-lg text-slate-400 max-w-lg mx-auto leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-1">
          <a
            href="#projects"
            className="btn-primary text-white font-mono-caps uppercase tracking-wider py-3.5 px-8 rounded-xl flex items-center gap-2 group cursor-pointer"
          >
            <span>Lihat Proyek</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
          <a
            href="#contact"
            className="font-mono-caps uppercase tracking-wider py-3.5 px-8 rounded-xl flex items-center gap-2 border border-white/10 text-slate-300 hover:border-violet-500/50 hover:text-violet-300 hover:bg-violet-500/5 transition-all cursor-pointer"
          >
            <span>Hubungi Saya</span>
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-10 mt-4 pt-6 w-full max-w-xs justify-center" style={{ borderTop: '1px solid rgba(99,120,180,0.15)' }}>
          {[
            { value: '3+',  label: 'Proyek' },
            { value: '7',   label: 'Prestasi' },
            { value: 'RPL', label: 'Jurusan' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-bold text-white">{s.value}</div>
              <div className="font-mono-caps text-[9px] text-slate-500 uppercase mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-1 text-slate-600 hover:text-violet-400 transition-colors">
          <span className="material-symbols-outlined text-2xl">keyboard_arrow_down</span>
        </a>
      </div>
    </section>
  );
};
