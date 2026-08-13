import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';

const medalEmoji: Record<string, string> = {
  '1': '🥇', '2': '🥈', '3': '🥉', '–': '🏅'
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-12 md:py-16">
      <div className="section-card p-8 md:p-12">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label mb-5 inline-flex">
            <span className="material-symbols-outlined text-[13px]">emoji_events</span>
            Prestasi
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-5">
            Pencapaian Olahraga
          </h2>
          <p className="text-slate-400 mt-3 text-[15px] max-w-md mx-auto leading-relaxed">
            Prestasi di bidang Bulu Tangkis dari tingkat kabupaten hingga nasional.
          </p>
        </div>

        {/* Sport badge */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/8 border border-amber-500/20">
            <span className="text-2xl">🏸</span>
            <span className="font-mono-caps text-xs text-amber-400 uppercase tracking-widest">Bulu Tangkis</span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((a, idx) => (
            <div key={idx} className="card p-5 flex flex-col gap-3">
              {/* Medal */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl badge-${a.color}`}>
                {medalEmoji[a.rank] ?? '🏅'}
              </div>

              {/* Level pill */}
              <span className={`self-start font-mono-caps text-[9px] px-2.5 py-1 rounded-full badge-${a.color}`}>
                {a.level}
              </span>

              <div className="flex-1">
                <h3 className="font-display text-base font-bold text-white leading-tight">
                  {a.title}
                </h3>
                <p className="text-[12px] text-slate-400 mt-1.5 leading-snug">
                  {a.event}
                </p>
              </div>

              <div className="pt-3 flex items-center justify-between" style={{ borderTop: '1px solid rgba(99,120,180,0.1)' }}>
                <span className="font-mono-caps text-[10px] text-slate-500">{a.year}</span>
                <span className="material-symbols-outlined text-[15px] text-slate-700">{a.icon}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-10 p-6 rounded-2xl text-center" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(6,182,212,0.04))', border: '1px solid rgba(99,102,241,0.12)' }}>
          <p className="text-slate-400 text-[15px] italic leading-relaxed">
            "Disiplin di lapangan membentuk karakter di kehidupan —<br className="hidden sm:block" />
            prinsip yang sama saya terapkan dalam menulis kode."
          </p>
          <p className="font-mono-caps text-[10px] text-violet-500 mt-3 uppercase tracking-widest">
            — Kevin Dwi Andhika
          </p>
        </div>
      </div>
    </section>
  );
};
