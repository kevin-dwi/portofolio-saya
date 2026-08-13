import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const proj1 = PROJECTS.find((p) => p.id === 'system-architecture') || PROJECTS[0];
  const proj2 = PROJECTS.find((p) => p.id === 'inventory-api') || PROJECTS[1];
  const proj3 = PROJECTS.find((p) => p.id === 'ecommerce-frontend') || PROJECTS[2];

  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 md:px-16 max-w-[1280px] mx-auto relative z-10 glass-panel rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl my-12"
    >
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-8 bg-violet-400 dark:bg-[#d0bcff]"></div>
          <span className="font-mono-caps text-violet-500 dark:text-[#d0bcff] uppercase tracking-widest text-xs">
            Daftar Proyek
          </span>
          <div className="h-[1px] w-8 bg-violet-400 dark:bg-[#d0bcff]"></div>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-800 dark:text-[#e0e3e5]">
          Selected Works
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
        {/* Project 1 - Large */}
        <div
          onClick={() => setSelectedProject(proj1)}
          className="md:col-span-8 row-span-1 md:row-span-2 group relative rounded-xl overflow-hidden glass-panel glass-panel-hover transition-all duration-300 cursor-pointer"
        >
          <img
            src={proj1.imageUrl}
            alt={proj1.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 dark:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800/70 to-transparent dark:from-[#0b0f10] dark:via-[#101415]/80"></div>

          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col gap-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-200 border border-violet-400/30 font-mono-caps text-xs backdrop-blur-md">React</span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 font-mono-caps text-xs backdrop-blur-md">Node.js</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white">{proj1.title}</h3>
            <p className="text-sm text-slate-300 max-w-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">{proj1.description}</p>
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedProject(proj1); }}
              className="inline-flex items-center gap-2 text-violet-300 hover:text-cyan-300 transition-colors font-mono-caps uppercase mt-4 text-xs cursor-pointer"
            >
              <span>View Project</span>
              <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </button>
          </div>
        </div>

        {/* Project 2 - Small */}
        <div
          onClick={() => setSelectedProject(proj2)}
          className="md:col-span-4 row-span-1 group relative rounded-xl overflow-hidden glass-panel glass-panel-hover transition-all duration-300 flex items-center justify-center p-6 bg-slate-50 dark:bg-[#1d2022]/50 cursor-pointer"
        >
          <div className="relative z-10 w-full">
            <div className="text-violet-500 dark:text-[#d0bcff] mb-4">
              <span className="material-symbols-outlined text-4xl">database</span>
            </div>
            <h3 className="font-display text-xl font-bold text-slate-800 dark:text-[#e0e3e5] mb-2">{proj2.title}</h3>
            <p className="text-sm text-slate-500 dark:text-[#cbc3d7] mb-4">{proj2.description}</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 rounded-full bg-slate-200 dark:bg-[#323537] text-slate-600 dark:text-[#c2c6db] font-mono-caps text-[10px]">PHP</span>
              <span className="px-2 py-1 rounded-full bg-slate-200 dark:bg-[#323537] text-slate-600 dark:text-[#c2c6db] font-mono-caps text-[10px]">MySQL</span>
            </div>
          </div>
        </div>

        {/* Project 3 - Medium */}
        <div
          onClick={() => setSelectedProject(proj3)}
          className="md:col-span-4 row-span-1 group relative rounded-xl overflow-hidden glass-panel glass-panel-hover transition-all duration-300 cursor-pointer"
        >
          <img
            src={proj3.imageUrl}
            alt={proj3.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 dark:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800/70 to-transparent dark:from-[#0b0f10] dark:via-[#101415]/80"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-display text-lg font-bold text-white">{proj3.title}</h3>
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedProject(proj3); }}
              className="inline-flex items-center gap-1 text-cyan-300 hover:text-violet-300 transition-colors font-mono-caps uppercase mt-2 text-xs cursor-pointer"
            >
              <span>Details</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
