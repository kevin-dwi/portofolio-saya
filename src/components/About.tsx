import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="section-card p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Foto */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-violet-400 to-cyan-400 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-all duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100 dark:bg-[#161b22]">
                <img
                  src="/about-photo.jpg"
                  alt="Kevin Dwi Andhika Ahmad Yarmis"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 dark:bg-[#0d1117]/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 border border-slate-200 dark:border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-mono-caps text-[10px] text-slate-600 dark:text-slate-300">Siswa SMK RPL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Konten */}
          <div className="lg:col-span-8 flex flex-col gap-6 order-1 lg:order-2">
            <div>
              <span className="section-label mb-4 inline-flex">Tentang Saya</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4 leading-snug">
                Mengubah logika kompleks menjadi{' '}
                <span className="gradient-text">antarmuka yang elegan</span>
              </h2>
            </div>

            <div className="space-y-3 text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed">
              {PERSONAL_INFO.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Education Cards */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {PERSONAL_INFO.education.map((item, idx) => (
                <div
                  key={idx}
                  className={`card p-4 border-l-4 ${item.border}`}
                >
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="font-mono-caps text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">{item.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-violet-400 hover:text-violet-600 dark:hover:text-violet-400 transition-all text-sm font-medium bg-white dark:bg-white/5"
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-pink-400 hover:text-pink-600 dark:hover:text-pink-400 transition-all text-sm font-medium bg-white dark:bg-white/5"
              >
                <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
