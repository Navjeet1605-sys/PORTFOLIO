import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, Layers, Info } from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Top 4 flagship projects matching the 2x2 grid in the mockup
  const flagshipProjects = projectsData.slice(0, 4);

  // Card themes matching the purple, blue, lilac, white palette
  const cardThemes = [
    {
      bg: "bg-gradient-to-br from-violet/25 via-[#181232] to-[#0d091e]",
      border: "border-violet/40",
      accent: "from-violet to-blue",
      pillBg: "bg-white text-[#0a0815]",
      pillTag: "DISTRIBUTED DAG ENGINE"
    },
    {
      bg: "bg-gradient-to-br from-blue/25 via-[#121636] to-[#090d1f]",
      border: "border-blue/40",
      accent: "from-blue to-cyan",
      pillBg: "bg-white text-[#0a0815]",
      pillTag: "SIH 2026 AI GUARDIAN"
    },
    {
      bg: "bg-gradient-to-br from-lilac/20 via-[#1c1438] to-[#0e0921]",
      border: "border-lilac/40",
      accent: "from-lilac to-violet",
      pillBg: "bg-white text-[#0a0815]",
      pillTag: "MULTI-AGENT SWARM"
    },
    {
      bg: "bg-gradient-to-br from-cyan/20 via-[#101e30] to-[#07101c]",
      border: "border-cyan/40",
      accent: "from-cyan to-blue",
      pillBg: "bg-white text-[#0a0815]",
      pillTag: "CAMPUS RECOVERY PORTAL"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 sm:px-12 max-w-6xl mx-auto z-10 relative">
      {/* Giant Ghost Watermark (Mockup Style: "LATEST PORTFOLIO") */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-0">
        <span className="watermark-text text-[12vw] leading-none select-none">
          LATEST PORTFOLIO
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 z-10 relative">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-lilac block mb-2">
            Selected Work
          </span>
          <h2 className="font-disp font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Engineered Systems &amp; Builds.
          </h2>
        </div>

        <span className="font-mono text-xs text-muted">
          Showing 04 Verified Flagship Projects
        </span>
      </div>

      {/* 2x2 Showcase Grid (Mockup Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10 relative">
        {flagshipProjects.map((project, idx) => {
          const theme = cardThemes[idx % cardThemes.length];
          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`rounded-3xl p-6 sm:p-8 ${theme.bg} border ${theme.border} cursor-pointer group hover:scale-[1.02] transition-all duration-300 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[420px]`}
            >
              {/* Top Meta */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#0a0815]/70 backdrop-blur-md border border-white/15 text-white">
                  0{idx + 1} // {project.category}
                </span>

                <span className="font-mono text-[11px] text-lilac">
                  {project.status.split('(')[0].trim()}
                </span>
              </div>

              {/* Graphic Mockup Preview Window (Mockup Style) */}
              <div className="my-auto py-4">
                <div className="rounded-2xl bg-[#0a0815]/90 border border-white/10 p-5 shadow-inner">
                  <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="font-mono text-[10px] text-muted ml-2">architecture.io</span>
                  </div>

                  <h3 className="font-disp font-extrabold text-xl sm:text-2xl text-white group-hover:text-lilac transition-colors mb-2">
                    {project.name}
                  </h3>

                  <p className="text-xs text-muted leading-relaxed line-clamp-2 mb-4">
                    {project.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Pill Badge with Round Arrow Button (Mockup Style: "TAG ↗") */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#0a0815] font-disp font-bold text-xs uppercase tracking-wider group-hover:bg-lilac transition-colors shadow-lg">
                  <span>{theme.pillTag}</span>
                  <div className="w-5 h-5 rounded-full bg-[#0a0815] text-white flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>

                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white/5 border border-white/15 text-muted hover:text-white hover:border-violet transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white/5 border border-white/15 text-lilac hover:text-white hover:border-violet transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
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
