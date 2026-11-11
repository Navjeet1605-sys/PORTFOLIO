import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, AlertCircle, Cpu, Shield, Layers } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-muted hover:text-white bg-white/[0.05] hover:bg-white/[0.1] transition-all"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full border border-violet/30 bg-violet/10 text-lilac">
              {project.category}
            </span>
            <span className="font-mono text-xs text-muted/80 px-2 py-0.5 rounded bg-white/[0.04]">
              {project.status}
            </span>
          </div>
          <h2 className="font-disp font-bold text-2xl sm:text-3xl text-white">
            {project.name}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
            {project.shortDesc}
          </p>
        </div>

        {/* Problem & Solution Architecture */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-red-500/[0.05] border border-red-500/20">
            <h4 className="font-disp font-semibold text-xs uppercase tracking-wider text-red-300 flex items-center gap-2 mb-1.5">
              <AlertCircle className="w-4 h-4 text-red-400" />
              The Problem
            </h4>
            <p className="text-xs sm:text-sm text-muted/90 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-violet/10 border border-violet/25">
            <h4 className="font-disp font-semibold text-xs uppercase tracking-wider text-lilac flex items-center gap-2 mb-1.5">
              <Cpu className="w-4 h-4 text-violet" />
              Engineering Solution &amp; Architecture
            </h4>
            <p className="text-xs sm:text-sm text-muted/90 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {project.contribution && (
            <div className="p-4 rounded-xl bg-blue/10 border border-blue/20">
              <h4 className="font-disp font-semibold text-xs uppercase tracking-wider text-blue flex items-center gap-2 mb-1.5">
                <Shield className="w-4 h-4 text-blue" />
                My Specific Contribution
              </h4>
              <p className="text-xs sm:text-sm text-muted/90 leading-relaxed">
                {project.contribution}
              </p>
            </div>
          )}
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-lilac mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-violet" /> Key Features &amp; Capabilities
          </h4>
          <ul className="grid grid-cols-1 gap-2.5">
            {project.features.map((feat, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-muted/90 bg-white/[0.02] p-2.5 rounded-lg border border-white/5"
              >
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-2.5">
            Technologies &amp; Libraries
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs bg-gradient-to-r from-violet to-blue text-white hover:opacity-90 transition-all shadow-md shadow-violet/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Interactive Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-muted hover:text-white px-3 py-1.5"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
