import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Layers, Info, Filter } from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'AI & ML / Agents', value: 'ai' },
    { label: 'Backend & Systems', value: 'backend' },
    { label: 'Full-Stack', value: 'fullstack' }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.filterTag === filter);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto z-10 relative">
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-6 bg-violet"></span>
        <span className="font-mono text-xs uppercase tracking-widest text-lilac">Selected Work</span>
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="font-disp font-bold text-3xl sm:text-4xl text-white">
            Engineered Systems &amp; <span className="grad-text">Featured Builds.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl mt-2">
            Production-grade distributed engines, AI hazard warning prototypes, and decoupled microservices with verified GitHub repositories.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 glass p-1.5 rounded-xl border border-white/10 shrink-0">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                filter === f.value
                  ? 'bg-gradient-to-r from-violet to-blue text-white shadow-md'
                  : 'text-muted hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className="glass-card rounded-2xl p-6 border border-white/5 hover:border-violet/40 transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            {project.featured && (
              <div className="absolute top-4 right-4 flex items-center gap-1 font-mono text-[10px] px-2.5 py-0.5 rounded-full border border-violet/40 bg-violet/15 text-lilac">
                <Sparkles className="w-3 h-3 text-lilac" />
                <span>Featured</span>
              </div>
            )}

            <div>
              {/* Category & Status */}
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[11px] text-muted/70 uppercase">
                  {project.category}
                </span>
                <span className="text-muted/30">•</span>
                <span className="font-mono text-[11px] text-lilac">
                  {project.status.split('(')[0].trim()}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-disp font-bold text-lg sm:text-xl text-white group-hover:text-lilac transition-colors mb-3 leading-snug">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3 mb-6">
                {project.shortDesc}
              </p>

              {/* Key Highlights Snippet */}
              <div className="mb-6 space-y-1.5">
                {project.features.slice(0, 2).map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-[11px] text-muted/80">
                    <span className="text-violet font-bold mt-0.5">›</span>
                    <span className="line-clamp-1">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Tech Chips */}
              <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/5">
                {project.tech.slice(0, 4).map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-muted border border-white/5"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="font-mono text-[10px] px-1.5 py-0.5 text-muted/50">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-2 pt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 font-mono text-xs text-lilac hover:text-white transition-colors py-1"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Deep Dive</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="p-2 rounded-lg glass text-muted hover:text-white hover:border-violet/40 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      className="p-2 rounded-lg bg-violet/20 border border-violet/40 text-lilac hover:text-white hover:bg-violet/40 transition-all"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
