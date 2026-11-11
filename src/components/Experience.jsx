import React from 'react';
import { Briefcase, CheckCircle2, Calendar, MapPin, Terminal, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const exp = experienceData[0];

  return (
    <section id="experience" className="py-24 px-6 sm:px-12 max-w-6xl mx-auto z-10 relative">
      {/* Giant Ghost Watermark */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-0">
        <span className="watermark-text text-[13vw] leading-none select-none">
          EXPERIENCE
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 mb-12 z-10 relative">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-lilac">Industry Track</span>
        </div>
        <div className="font-disp font-extrabold text-sm uppercase tracking-wider text-muted">
          Internships <span className="text-violet">|</span> Production
        </div>
      </div>

      <div className="rounded-3xl bg-[#141124]/90 border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden z-10">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-violet/15 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-violet/20 border border-violet/40 text-lilac font-semibold">
                {exp.type}
              </span>
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3" />
                {exp.badge}
              </span>
            </div>
            <h3 className="font-disp font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
              {exp.title}
            </h3>
            <p className="font-disp font-semibold text-base text-lilac mt-1">
              {exp.company} <span className="text-muted/40">•</span> <span className="text-muted font-normal">{exp.location}</span>
            </p>
          </div>

          <div className="shrink-0">
            {exp.github && (
              <a
                href={exp.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0a0815] font-disp font-bold text-xs hover:bg-lilac transition-all hover:scale-105 shadow-md shadow-white/10"
              >
                <Github className="w-4 h-4" />
                <span>View Datheon Tasks on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-8 text-muted text-sm sm:text-base leading-relaxed max-w-4xl">
          {exp.description}
        </p>

        {/* Tasks Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {exp.tasks.map((task, tIdx) => (
            <div
              key={tIdx}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-violet/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-lilac font-bold block mb-2">
                  MODULE 0{tIdx + 1}
                </span>
                <h4 className="font-disp font-bold text-base text-white mb-2 leading-snug">
                  {task.title.replace(/Task \d+: /, '')}
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  {task.details}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3 h-3" />
                <span>Completed &amp; Validated</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
          {exp.tech.map((t, idx) => (
            <span
              key={idx}
              className="font-mono text-xs px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
