import React from 'react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-[#161b22] border border-slate-200 dark:border-white/[0.08] rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Thumbnail */}
        {project.imageUrl && (
          <div className="w-full h-52 overflow-hidden rounded-t-2xl">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="p-6 md:p-8">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 transition-colors cursor-pointer border border-slate-200 dark:border-white/10 backdrop-blur-sm"
            aria-label="Tutup"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>

          {/* Badges */}
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono-caps text-[10px] bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-100 dark:border-violet-500/20 px-3 py-1 rounded-full">
              {project.category}
            </span>
            {project.featured && (
              <span className="font-mono-caps text-[10px] bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-500/20 px-3 py-1 rounded-full">
                Unggulan
              </span>
            )}
          </div>

          <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3">
            {project.title}
          </h3>

          <div className="space-y-2 text-[15px] text-slate-500 dark:text-slate-400 mb-5">
            <p className="font-medium text-slate-700 dark:text-slate-300">{project.description}</p>
            <p className="leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <p className="font-mono-caps text-[10px] text-slate-400 uppercase mb-2">Teknologi</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="font-mono-caps text-[10px] px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.08]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
            <a
              href={project.demoUrl || '#'}
              onClick={(e) => { if (!project.demoUrl || project.demoUrl === '#') e.preventDefault(); }}
              className="btn-primary text-white font-mono-caps uppercase tracking-wider py-2.5 px-5 rounded-xl flex items-center gap-2 text-[11px] cursor-pointer"
            >
              <span>Demo Langsung</span>
              <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </a>
            <a
              href={project.githubUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-caps uppercase tracking-wider py-2.5 px-5 rounded-xl flex items-center gap-2 text-[11px] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-violet-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors bg-white dark:bg-white/5"
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
