import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 md:px-16 max-w-[1280px] mx-auto relative z-10 glass-panel rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl my-12"
    >
      <div className="flex flex-col items-center mb-12 text-center">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-[1px] w-8 bg-violet-400 dark:bg-[#d0bcff]"></div>
          <span className="font-mono-caps text-violet-500 dark:text-[#d0bcff] uppercase tracking-widest text-xs">
            Skills & Technical Stack
          </span>
          <div className="h-[1px] w-8 bg-violet-400 dark:bg-[#d0bcff]"></div>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-800 dark:text-[#e0e3e5]">
          Engineering Capabilities
        </h2>
        <p className="text-sm md:text-base text-slate-500 dark:text-[#cbc3d7] max-w-xl mt-2">
          Focused on modern web technologies, scalable backend architectures, and developer-first practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 glass-panel-hover flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-[#d0bcff]/10 text-violet-600 dark:text-[#d0bcff] border border-violet-200 dark:border-[#d0bcff]/20 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-800 dark:text-[#e0e3e5] mb-2">
                {cat.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-[#cbc3d7] mb-6 leading-relaxed">
                {cat.description}
              </p>

              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-700 dark:text-[#e0e3e5] font-medium">{skill.name}</span>
                      <span className="font-mono-caps text-[10px] text-cyan-600 dark:text-[#4cd7f6] bg-cyan-50 dark:bg-[#4cd7f6]/10 px-2 py-0.5 rounded border border-cyan-200 dark:border-[#4cd7f6]/20">
                        {skill.tag}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-[#1d2022] h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-violet-500 to-cyan-500 dark:from-[#d0bcff] dark:to-[#4cd7f6] h-full rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono-caps text-slate-400 dark:text-[#cbc3d7]/60">
              <span>{cat.skills.length} core stacks</span>
              <span className="text-violet-500 dark:text-[#d0bcff]">RPL Standard</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
