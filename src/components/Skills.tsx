import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 md:py-16">
      <div className="section-card p-8 md:p-12">

        <div className="text-center mb-12">
          <span className="section-label mb-5 inline-flex">Keahlian & Teknologi</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-5">
            Kemampuan Teknis
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto text-[15px] leading-relaxed">
            Fokus pada teknologi web modern, arsitektur backend yang skalabel, dan praktik pengembangan terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="card p-6 flex flex-col">
              {/* Icon */}
              <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-5 border border-indigo-500/20">
                <span className="material-symbols-outlined text-xl">{cat.icon}</span>
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-1">{cat.title}</h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">{cat.description}</p>

              <div className="space-y-4 flex-1">
                {cat.skills.map((skill, si) => (
                  <div key={si}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[13px] font-medium text-slate-300">{skill.name}</span>
                      <span className="font-mono-caps text-[9px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                        {skill.tag}
                      </span>
                    </div>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 flex justify-between items-center" style={{ borderTop: '1px solid rgba(99,120,180,0.1)' }}>
                <span className="font-mono-caps text-[10px] text-slate-600">{cat.skills.length} teknologi</span>
                <span className="font-mono-caps text-[10px] text-violet-500">Standar RPL</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
