import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="section-card p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-label mb-4 inline-flex">Portofolio</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4">
            Proyek Pilihan
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-[15px]">
            Beberapa proyek yang telah saya kerjakan.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Proyek 1 — Large */}
          <div
            onClick={() => setSelectedProject(PROJECTS[0])}
            className="md:col-span-7 group relative rounded-2xl overflow-hidden cursor-pointer h-72 md:h-80 border border-slate-200 dark:border-white/[0.07] hover:border-violet-300 dark:hover:border-violet-500/40 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <img
              src={PROJECTS[0].imageUrl}
              alt={PROJECTS[0].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
            <div className="absolute top-4 left-4">
              <span className="font-mono-caps text-[10px] bg-violet-600/90 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                Unggulan
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {PROJECTS[0].tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="font-mono-caps text-[9px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-xl font-bold text-white">{PROJECTS[0].title}</h3>
              <p className="text-sm text-slate-300 mt-1 line-clamp-2">{PROJECTS[0].description}</p>
              <div className="flex items-center gap-1 mt-3 text-violet-300 font-mono-caps text-[10px] uppercase group-hover:gap-2 transition-all">
                <span>Lihat Detail</span>
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </div>
            </div>
          </div>

          {/* Proyek 2 & 3 — Stack kanan */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {PROJECTS.slice(1).map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer flex-1 h-36 border border-slate-200 dark:border-white/[0.07] hover:border-violet-300 dark:hover:border-violet-500/40 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="font-mono-caps text-[9px] text-slate-300/70 uppercase">{project.category}</span>
                  <h3 className="font-display text-base font-bold text-white">{project.title}</h3>
                  <div className="flex items-center gap-1 mt-1 text-violet-300 font-mono-caps text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Lihat Detail</span>
                    <span className="material-symbols-outlined text-xs">arrow_outward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
