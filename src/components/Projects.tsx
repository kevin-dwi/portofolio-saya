import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="section-card p-8 md:p-12">

        <div className="text-center mb-12">
          <span className="section-label mb-5 inline-flex">Portofolio</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-5">
            Proyek Pilihan
          </h2>
          <p className="text-slate-400 mt-3 text-[15px]">
            Beberapa proyek yang telah saya kerjakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* Proyek 1 — Large */}
          <div
            onClick={() => setSelected(PROJECTS[0])}
            className="md:col-span-7 group relative rounded-2xl overflow-hidden cursor-pointer h-80 border border-white/[0.06] hover:border-violet-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]"
          >
            <img
              src={PROJECTS[0].imageUrl}
              alt={PROJECTS[0].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-50 group-hover:brightness-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/60 to-transparent" />

            {/* Featured badge */}
            <div className="absolute top-4 left-4">
              <span className="font-mono-caps text-[9px] bg-violet-500/80 text-white px-3 py-1 rounded-full backdrop-blur-sm border border-violet-400/30">
                ✦ Unggulan
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {PROJECTS[0].tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="font-mono-caps text-[9px] bg-white/8 text-slate-300 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-xl font-bold text-white">{PROJECTS[0].title}</h3>
              <p className="text-sm text-slate-400 mt-1.5 line-clamp-2">{PROJECTS[0].description}</p>
              <div className="flex items-center gap-1.5 mt-4 text-violet-400 font-mono-caps text-[10px] uppercase group-hover:gap-2.5 transition-all">
                <span>Lihat Detail</span>
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </div>
            </div>
          </div>

          {/* Proyek 2 & 3 */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {PROJECTS.slice(1).map((project) => (
              <div
                key={project.id}
                onClick={() => setSelected(project)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer flex-1 border border-white/[0.06] hover:border-violet-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]"
                style={{ minHeight: '148px' }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-40 group-hover:brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="font-mono-caps text-[9px] text-slate-500 uppercase">{project.category}</span>
                  <h3 className="font-display text-base font-bold text-white mt-0.5">{project.title}</h3>
                  <div className="flex items-center gap-1 mt-2 text-violet-400 font-mono-caps text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Lihat Detail</span>
                    <span className="material-symbols-outlined text-xs">arrow_outward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};
