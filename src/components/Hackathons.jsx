import React from 'react';
import { Trophy, Award, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import { hackathonsData } from '../data/portfolioData';

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-24 px-6 sm:px-12 max-w-6xl mx-auto z-10 relative">
      {/* Giant Ghost Watermark */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-0">
        <span className="watermark-text text-[13vw] leading-none select-none">
          HONORS
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 mb-12 z-10 relative">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-lilac">Competitions</span>
        </div>
        <div className="font-disp font-extrabold text-sm uppercase tracking-wider text-muted">
          Hackathons <span className="text-violet">|</span> Awards
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 z-10 relative">
        {hackathonsData.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl p-7 bg-[#141124]/90 border border-white/10 hover:border-violet/50 transition-all flex flex-col justify-between shadow-xl group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs font-bold text-lilac">
                  0{index + 1}
                </span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-white text-[#0a0815] font-bold">
                  {item.badge}
                </span>
              </div>

              <h3 className="font-disp font-extrabold text-xl text-white group-hover:text-lilac transition-colors mb-1.5 leading-snug">
                {item.title}
              </h3>
              <p className="font-mono text-xs text-lilac/80 mb-1">
                {item.role}
              </p>
              <p className="text-xs text-muted/70 mb-4 pb-3 border-b border-white/5">
                {item.organization}
              </p>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] font-mono text-muted mb-4">
                <span className="text-violet font-semibold">Scope: </span>
                {item.problemStatement}
              </div>

              <p className="text-xs text-muted leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified</span>
              </span>

              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 border border-white/15 text-muted hover:text-white hover:border-violet transition-colors"
                  aria-label="View Project Code"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
