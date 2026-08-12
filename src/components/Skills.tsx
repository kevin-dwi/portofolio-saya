import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 md:px-16 max-w-[1280px] mx-auto relative z-10 glass-panel rounded-3xl border border-white/10 shadow-2xl my-12"
    >
      <div className="flex flex-col items-center mb-12 text-center">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-[1px] w-8 bg-[#d0bcff]"></div>
          <span className="font-mono-caps text-[#d0bcff] uppercase tracking-widest text-xs">
            Skills & Technical Stack
          </span>
          <div className="h-[1px] w-8 bg-[#d0bcff]"></div>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#e0e3e5]">
          Engineering Capabilities
        </h2>
        <p className="text-sm md:text-base text-[#cbc3d7] max-w-xl mt-2">
          Focused on modern web technologies, scalable backend architectures, and developer-first practices.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#d0bcff]/10 text-[#d0bcff] border border-[#d0bcff]/20 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#e0e3e5] mb-2">
                {cat.title}
              </h3>
              <p className="text-xs text-[#cbc3d7] mb-6 leading-relaxed">
                {cat.description}
              </p>

              {/* Individual Skill List */}
              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#e0e3e5] font-medium">{skill.name}</span>
                      <span className="font-mono-caps text-[10px] text-[#4cd7f6] bg-[#4cd7f6]/10 px-2 py-0.5 rounded border border-[#4cd7f6]/20">
                        {skill.tag}
                      </span>
                    </div>
                    <div className="w-full bg-[#1d2022] h-1.5 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="bg-gradient-to-r from-[#d0bcff] to-[#4cd7f6] h-full rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-caps text-[#cbc3d7]/60">
              <span>{cat.skills.length} core stacks</span>
              <span className="text-[#d0bcff]">RPL Standard</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
