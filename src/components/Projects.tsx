import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  Sparkles, 
  Activity, 
  Layers, 
  CheckCircle2,
  Clock,
  Code
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PRACTICAL PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Featured Analytics & Software Projects
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical applications built by PRATHANJAN.P focusing on healthcare analytics, AI guidance, and FinTech.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl overflow-hidden border-slate-800 flex flex-col justify-between group hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-950/30 transition-all duration-300 relative"
            >
              {/* Coming Soon ribbon if applicable */}
              {project.status === 'Coming Soon' && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1 shadow-sm">
                    <Clock className="w-3 h-3 text-amber-400 animate-spin-slow" />
                    Coming Soon
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-7 space-y-4">
                
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {project.category}
                  </span>

                  {project.status === 'Completed' && (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-teal-400 bg-teal-950/40 px-2.5 py-0.5 rounded-full border border-teal-800/50">
                      <CheckCircle2 className="w-3 h-3 text-teal-400" />
                      Completed
                    </span>
                  )}

                  {project.status === 'Current Project' && (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-cyan-300 bg-cyan-950/50 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                      <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                      Current Project
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-teal-400 mt-1">
                    {project.subtitle}
                  </p>
                  {project.isCollaborativeAcademic && (
                    <span className="inline-block mt-1 text-[10px] font-medium text-slate-400 italic">
                      * Collaborative Academic Project
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800/80 group-hover:border-teal-500/40 group-hover:bg-teal-950/25 group-hover:shadow-[inset_0_0_16px_rgba(20,184,166,0.2)] group-hover:text-slate-100 transition-all duration-300">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 pt-1">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Badges */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] font-semibold rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer Buttons */}
              <div className="p-6 pt-0 border-t border-slate-800/60 flex items-center justify-between gap-3 mt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  id={`view-project-details-${project.id}`}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 text-xs font-bold hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Project Details & Specs</span>
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 group-hover:border-teal-500/40 group-hover:shadow-[inset_0_0_12px_rgba(20,184,166,0.25)] hover:border-teal-400 hover:text-teal-300 hover:bg-teal-950/40 hover:shadow-[inset_0_0_16px_rgba(20,184,166,0.35),0_0_12px_rgba(20,184,166,0.25)] transition-all duration-300"
                    aria-label={`GitHub repo for ${project.title}`}
                    id={`project-github-link-${project.id}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
