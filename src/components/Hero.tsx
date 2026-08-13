import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-24"
    >
      <div className="text-center flex flex-col items-center gap-6 animate-fadeInUp">
        {/* Profile Photo */}
        <div className="relative group mb-2">
          <div className="absolute -inset-0.5 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full opacity-30 group-hover:opacity-60 blur-sm transition-all duration-500"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-white dark:ring-[#161b22] shadow-xl">
            <img
              src="/profile.jpg"
              alt="Kevin Dwi Andhika Ahmad Yarmis"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full ring-2 ring-white dark:ring-[#0d1117]"></span>
        </div>

        {/* Badge */}
        <span className="section-label">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400"></span>
          {PERSONAL_INFO.specialty}
        </span>

        {/* Name */}
        <div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            {PERSONAL_INFO.name}
          </h1>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight gradient-text">
            {PERSONAL_INFO.surname}
          </h1>
        </div>

        {/* Role & Tagline */}
        <div className="space-y-1">
          <p className="text-sm font-mono-caps text-violet-600 dark:text-violet-400 uppercase tracking-wider">
            {PERSONAL_INFO.role}
          </p>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a
            href="#projects"
            className="btn-primary text-white font-mono-caps uppercase tracking-wider py-3 px-7 rounded-xl flex items-center gap-2 group cursor-pointer shadow-md"
          >
            <span>Lihat Proyek</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
          <a
            href="#contact"
            className="font-mono-caps uppercase tracking-wider py-3 px-7 rounded-xl flex items-center gap-2 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-violet-400 dark:hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-all bg-white dark:bg-white/5 shadow-sm cursor-pointer"
          >
            <span>Hubungi Saya</span>
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-8 mt-4 pt-6 border-t border-slate-200 dark:border-white/[0.06] w-full max-w-sm justify-center">
          {[
            { value: '3+', label: 'Proyek' },
            { value: '4', label: 'Prestasi' },
            { value: 'RPL', label: 'Jurusan' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
              <div className="font-mono-caps text-[10px] text-slate-400 dark:text-slate-500 uppercase mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll ke bawah" className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600 hover:text-violet-500 transition-colors">
          <span className="material-symbols-outlined text-2xl">keyboard_arrow_down</span>
        </a>
      </div>
    </section>
  );
};
