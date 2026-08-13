import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="section-card p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Foto */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 opacity-20 group-hover:opacity-40 blur-lg transition-all duration-700" />
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#0d1220]">
                <img
                  src="/about-photo.jpg"
                  alt="Kevin Dwi Andhika Ahmad Yarmis"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#080c14]/80 backdrop-blur-md rounded-xl px-3 py-2 flex items-center gap-2 border border-white/[0.08]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono-caps text-[10px] text-slate-300">Siswa SMK RPL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Konten */}
          <div className="lg:col-span-8 flex flex-col gap-6 order-1 lg:order-2">
            <div>
              <span className="section-label mb-5 inline-flex">Tentang Saya</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-5 leading-snug">
                Mengubah logika kompleks menjadi{' '}
                <span className="gradient-text">antarmuka yang elegan</span>
              </h2>
            </div>

            <div className="space-y-3 text-[15px] text-slate-400 leading-relaxed">
              {PERSONAL_INFO.about.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            {/* Education */}
            <div className="grid grid-cols-2 gap-3">
              {PERSONAL_INFO.education.map((item, i) => (
                <div key={i} className="card p-4 border-l-2 border-l-violet-500">
                  <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                  <p className="font-mono-caps text-[10px] text-slate-500 mt-0.5">{item.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.08] text-slate-400 hover:border-indigo-500/40 hover:text-indigo-300 hover:bg-indigo-500/5 transition-all text-sm font-medium"
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.08] text-slate-400 hover:border-pink-500/40 hover:text-pink-300 hover:bg-pink-500/5 transition-all text-sm font-medium"
              >
                <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                @kvin.dwyrms_
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
