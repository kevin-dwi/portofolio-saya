import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="section-card p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-label mb-4 inline-flex">Keahlian & Teknologi</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4">
            Kemampuan Teknis
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-lg mx-auto text-[15px]">
            Fokus pada teknologi web modern, arsitektur backend yang skalabel, dan praktik pengembangan terbaik.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="card p-6">
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-4 border border-violet-100 dark:border-violet-500/20">
                <span className="material-symbols-outlined text-xl">{cat.icon}</span>
              </div>

              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">{cat.title}</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mb-5 leading-relaxed">{cat.description}</p>

              {/* Skills */}
              <div className="space-y-3.5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[13px] font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="font-mono-caps text-[9px] text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 px-2 py-0.5 rounded-full border border-violet-100 dark:border-violet-500/20">
                        {skill.tag}
                      </span>
                    </div>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/[0.05] flex justify-between items-center">
                <span className="font-mono-caps text-[10px] text-slate-400">{cat.skills.length} teknologi</span>
                <span className="font-mono-caps text-[10px] text-violet-500 dark:text-violet-400">Standar RPL</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
