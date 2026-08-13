import React from 'react';
import { Project } from '../data/portfolioData';

interface Props { project: Project | null; onClose: () => void; }

export const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
        style={{ background: 'linear-gradient(145deg, #0d1220, #080c18)', border: '1px solid rgba(99,120,180,0.15)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Thumbnail */}
        {project.imageUrl && (
          <div className="w-full h-52 overflow-hidden rounded-t-2xl">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover brightness-75" />
          </div>
        )}

        <div className="p-6 md:p-8">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/[0.08] backdrop-blur-sm"
          >
            <span className="material-symbols-outlined text-[17px]">close</span>
          </button>

          {/* Badges */}
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono-caps text-[9px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full">
              {project.category}
            </span>
            {project.featured && (
              <span className="font-mono-caps text-[9px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full">
                ✦ Unggulan
              </span>
            )}
          </div>

          <h3 className="font-display text-2xl font-bold text-white mb-4">{project.title}</h3>

          <div className="space-y-2 text-[14px] text-slate-400 mb-6">
            <p className="font-medium text-slate-300">{project.description}</p>
            <p className="leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <p className="font-mono-caps text-[9px] text-slate-600 uppercase mb-2.5">Teknologi</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="font-mono-caps text-[10px] px-3 py-1 rounded-full bg-white/[0.04] text-slate-400 border border-white/[0.07]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(99,120,180,0.1)' }}>
            <a
              href={project.demoUrl || '#'}
              onClick={(e) => { if (!project.demoUrl || project.demoUrl === '#') e.preventDefault(); }}
              className="btn-primary text-white font-mono-caps uppercase tracking-wider py-2.5 px-5 rounded-xl flex items-center gap-2 text-[10px] cursor-pointer"
            >
              <span>Demo Langsung</span>
              <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </a>
            <a
              href={project.githubUrl || '#'}
              target="_blank" rel="noopener noreferrer"
              className="font-mono-caps uppercase tracking-wider py-2.5 px-5 rounded-xl flex items-center gap-2 text-[10px] border border-white/[0.08] text-slate-400 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors"
            >
              <span>Kode Sumber</span>
              <span className="material-symbols-outlined text-sm">code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
