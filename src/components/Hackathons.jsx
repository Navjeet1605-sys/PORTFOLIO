import React from 'react';
import { Trophy, Award, CheckCircle2, ExternalLink, Flag, Users } from 'lucide-react';
import { Github } from './Icons';
import { hackathonsData } from '../data/portfolioData';

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-24 px-6 max-w-6xl mx-auto z-10 relative">
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-6 bg-violet"></span>
        <span className="font-mono text-xs uppercase tracking-widest text-lilac">Competitions &amp; Hackathons</span>
      </div>
      <h2 className="font-disp font-bold text-3xl sm:text-4xl text-white mb-6">
        Verified Hackathons &amp; <span className="grad-text">Honors.</span>
      </h2>
      <p className="text-muted text-sm sm:text-base max-w-2xl mb-12">
        Real hackathon deliverables, team leadership, and competitive benchmarks reported with complete integrity and transparency.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hackathonsData.map((item, index) => (
          <div
            key={index}
            className="glass-card p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-violet/40 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="p-2 rounded-xl bg-violet/10 border border-violet/20 text-lilac">
                  <Trophy className="w-4 h-4 text-lilac" />
                </span>
                <span className="font-mono text-xs px-2.5 py-1 rounded-full border border-lilac/30 bg-lilac/10 text-lilac font-medium">
                  {item.badge}
                </span>
              </div>

              {/* Title & Organization */}
              <h3 className="font-disp font-bold text-lg text-white mb-1">
                {item.title}
              </h3>
              <p className="font-mono text-xs text-lilac/80 flex items-center gap-1.5 mb-2">
                <Users className="w-3.5 h-3.5 text-violet" />
                {item.role}
              </p>
              <p className="text-xs text-muted/70 mb-4 pb-3 border-b border-white/5">
                {item.organization}
              </p>

              {/* Problem Statement Note */}
              <div className="mb-4 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] font-mono text-muted/90">
                <span className="text-violet font-semibold">Scope: </span>
                {item.problemStatement}
              </div>

              {/* Description */}
              <p className="text-xs text-muted leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            {/* Verified Footer */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{item.verifiedStatus}</span>
              </span>

              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-muted hover:text-white glass hover:border-violet/40 transition-colors"
                  aria-label="View Project Code"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
