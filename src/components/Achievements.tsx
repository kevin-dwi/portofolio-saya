import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16 md:py-20">
      <div className="section-card p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-label mb-4 inline-flex">
            <span className="material-symbols-outlined text-[14px]">emoji_events</span>
            Prestasi
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4">
            Pencapaian Olahraga
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-[15px] max-w-md mx-auto">
            Prestasi di bidang Bulu Tangkis dari tingkat kabupaten hingga nasional.
          </p>
        </div>

        {/* Shuttlecock icon dekoratif */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20">
            <span className="text-2xl">🏸</span>
            <span className="font-mono-caps text-xs text-amber-700 dark:text-amber-400 uppercase tracking-wider">Bulu Tangkis</span>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((achievement, idx) => (
            <div
              key={idx}
              className={`card p-5 flex flex-col gap-3 relative overflow-hidden`}
            >
              {/* Rank badge */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold badge-${achievement.color}`}>
                {achievement.rank === '1' ? '🥇' : achievement.rank === '2' ? '🥈' : achievement.rank === '3' ? '🥉' : '🏅'}
              </div>

              {/* Level badge */}
              <span className={`self-start font-mono-caps text-[9px] px-2.5 py-1 rounded-full badge-${achievement.color}`}>
                {achievement.level}
              </span>

              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white leading-tight">
                  {achievement.title}
                </h3>
                <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  {achievement.event}
                </p>
              </div>

              <div className="mt-auto pt-3 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between">
                <span className="font-mono-caps text-[10px] text-slate-400">{achievement.year}</span>
                <span className="material-symbols-outlined text-[16px] text-slate-300 dark:text-slate-600">
                  {achievement.icon}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote motivasi */}
        <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-violet-50 to-cyan-50 dark:from-violet-500/5 dark:to-cyan-500/5 border border-violet-100 dark:border-violet-500/10 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-[15px] italic">
            "Disiplin di lapangan membentuk karakter di kehidupan — prinsip yang sama saya terapkan dalam menulis kode."
          </p>
          <p className="font-mono-caps text-[10px] text-violet-500 dark:text-violet-400 mt-2 uppercase">— Kevin Dwi Andhika</p>
        </div>
      </div>
    </section>
  );
};
