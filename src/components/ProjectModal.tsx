import React from 'react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl glass-panel bg-[#1d2022]/95 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#cbc3d7] hover:text-white transition-colors cursor-pointer border border-white/10"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-[#d0bcff]/10 text-[#d0bcff] border border-[#d0bcff]/20 font-mono-caps text-xs">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-3 py-1 rounded-full bg-[#4cd7f6]/10 text-[#4cd7f6] border border-[#4cd7f6]/20 font-mono-caps text-xs">
              Featured Work
            </span>
          )}
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-bold text-[#e0e3e5] mb-3">
          {project.title}
        </h3>

        {/* Project Thumbnail / Visual Representation */}
        <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden glass-panel border border-white/10 my-4 relative flex items-center justify-center bg-[#101415]">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover opacity-70"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-[#d0bcff]">
              <span className="material-symbols-outlined text-5xl">{project.icon || 'code'}</span>
              <span className="font-mono-caps text-xs uppercase text-[#cbc3d7]">
                {project.title} Architecture
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="space-y-3 text-sm md:text-base text-[#cbc3d7] mb-6">
          <p className="font-semibold text-[#e0e3e5]">{project.description}</p>
          <p className="leading-relaxed text-[#cbc3d7]/90">{project.fullDescription}</p>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <h4 className="font-mono-caps text-xs text-[#d0bcff] uppercase mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-white/5 text-[#e0e3e5] border border-white/10 font-mono-caps text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
          <a
            href={project.demoUrl || '#'}
            onClick={(e) => {
              if (!project.demoUrl || project.demoUrl === '#') e.preventDefault();
            }}
            className="btn-primary text-white font-mono-caps uppercase tracking-wider py-3 px-6 rounded-lg flex items-center gap-2 text-xs transition-transform hover:scale-105"
          >
            <span>Live Preview</span>
            <span className="material-symbols-outlined text-sm">arrow_outward</span>
          </a>
          <a
            href={project.githubUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel text-[#e0e3e5] hover:text-[#d0bcff] font-mono-caps uppercase tracking-wider py-3 px-6 rounded-lg flex items-center gap-2 text-xs border border-white/10 hover:border-[#d0bcff] transition-colors"
          >
            <span>Source Code</span>
            <span className="material-symbols-outlined text-sm">code</span>
          </a>
        </div>
      </div>
    </div>
  );
};
