import React from 'react';
import { 
  X, 
  Github, 
  CheckCircle2, 
  Database, 
  Layers, 
  Sparkles,
  ExternalLink,
  Code2
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="glass-panel w-full max-w-3xl max-h-[90vh] rounded-3xl border-slate-700/80 flex flex-col overflow-hidden shadow-2xl shadow-cyan-950/50"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between bg-slate-900/80">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-slate-800 text-teal-300 border border-teal-500/30">
                Status: {project.status}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-cyan-400 font-semibold mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            aria-label="Close project modal"
            id="close-project-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300 text-xs sm:text-sm">
          
          <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Project Summary</span>
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Deliverables Bullet List */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-200 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Key Features & Deliverables</span>
            </h4>
            <div className="space-y-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span className="text-slate-300 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Badges */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-sky-400" />
              <span>Tech Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-bold rounded-lg bg-cyan-950/80 text-cyan-300 border border-cyan-800/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Repository: {project.githubUrl || 'Available on GitHub'}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-bold hover:border-cyan-500 hover:text-cyan-400 transition-all flex items-center gap-2"
                id="modal-github-link"
              >
                <Github className="w-4 h-4" />
                <span>Open GitHub Repository</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 text-xs font-black hover:opacity-90 transition-all shadow-md uppercase tracking-wider"
              id="modal-close-action-btn"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
