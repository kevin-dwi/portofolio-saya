import React, { useState } from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';

const medal: Record<string, string> = { '1': '🥇', '2': '🥈', '3': '🥉', '–': '🏅' };

export const Achievements: React.FC = () => {
  const [tab, setTab] = useState<'olahraga' | 'akademik'>('olahraga');

  const sports  = ACHIEVEMENTS.filter(a => a.category === 'olahraga');
  const academic = ACHIEVEMENTS.filter(a => a.category === 'akademik');
  const list = tab === 'olahraga' ? sports : academic;

  return (
    <section id="achievements" className="py-12 md:py-16">
      <div className="section-card p-8 md:p-12">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-label mb-5 inline-flex">
            <span className="material-symbols-outlined text-[13px]">emoji_events</span>
            Prestasi
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-5">
            Pencapaian Saya
          </h2>
          <p className="text-slate-400 mt-3 text-[15px] max-w-md mx-auto leading-relaxed">
            Prestasi di bidang olahraga dan akademik yang telah saya raih.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-1 p-1 rounded-2xl" style={{ background: 'rgba(15,22,38,0.8)', border: '1px solid rgba(99,120,180,0.12)' }}>
            <button
              onClick={() => setTab('olahraga')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono-caps text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                tab === 'olahraga'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/25'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <span className="text-base">🏸</span>
              Olahraga
              <span className="ml-1 px-1.5 py-0.5 rounded-full text-[9px]" style={{ background: 'rgba(245,158,11,0.15)', color: '#fbbf24' }}>
                {sports.length}
              </span>
            </button>
            <button
              onClick={() => setTab('akademik')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono-caps text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                tab === 'akademik'
                  ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/25'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <span className="text-base">📚</span>
              Akademik
              <span className="ml-1 px-1.5 py-0.5 rounded-full text-[9px]" style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8' }}>
                {academic.length}
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {list.map((a, idx) => (
            <div key={idx} className="card p-4 flex flex-col gap-2.5">
              {/* Medal */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl badge-${a.color}`}>
                {medal[a.rank] ?? '🏅'}
              </div>

              {/* Level pill */}
              <span className={`self-start font-mono-caps text-[8px] px-2 py-0.5 rounded-full badge-${a.color}`}>
                {a.level}
              </span>

              <div className="flex-1">
                <h3 className="font-display text-sm font-bold text-white leading-tight">
                  {a.title}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  {a.event}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between" style={{ borderTop: '1px solid rgba(99,120,180,0.08)' }}>
                <span className="font-mono-caps text-[9px] text-slate-600">{a.year}</span>
                <span className="material-symbols-outlined text-[13px] text-slate-700">{a.icon}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-8 p-5 rounded-2xl text-center" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(6,182,212,0.04))', border: '1px solid rgba(99,102,241,0.1)' }}>
          <p className="text-slate-400 text-[14px] italic leading-relaxed">
            "Disiplin di lapangan membentuk karakter di kehidupan —
            prinsip yang sama saya terapkan dalam menulis kode."
          </p>
          <p className="font-mono-caps text-[9px] text-violet-500 mt-2.5 uppercase tracking-widest">
            — Kevin Dwi Andhika
          </p>
        </div>
      </div>
    </section>
  );
};
