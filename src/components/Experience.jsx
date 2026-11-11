import React from 'react';
import { Briefcase, CheckCircle2, ExternalLink, Calendar, MapPin, Terminal } from 'lucide-react';
import { Github } from './Icons';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto z-10 relative">
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-6 bg-violet"></span>
        <span className="font-mono text-xs uppercase tracking-widest text-lilac">Professional Experience</span>
      </div>
      <h2 className="font-disp font-bold text-3xl sm:text-4xl text-white mb-6">
        Internships &amp; <span className="grad-text">Verified Work.</span>
      </h2>
      <p className="text-muted text-sm sm:text-base max-w-2xl mb-12">
        Hands-on software development internship solving real backend tasks with industry-standard patterns, clean testing, and containerization.
      </p>

      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="glass-card p-6 sm:p-9 rounded-2xl border border-white/10 hover:border-violet/40 transition-all relative overflow-hidden"
          >
            {/* Top Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-xl bg-violet/15 border border-violet/30 text-lilac">
                    <Briefcase className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-disp font-bold text-xl sm:text-2xl text-white">
                      {exp.title}
                    </h3>
                    <p className="font-mono text-sm text-lilac font-medium flex items-center gap-2 mt-0.5">
                      <span>{exp.company}</span>
                      <span className="text-muted/40">•</span>
                      <span className="text-muted">{exp.location}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {exp.badge}
                </span>
                <span className="font-mono text-xs text-muted flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-muted/60" />
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Overview */}
            <p className="mt-6 text-muted text-sm sm:text-base leading-relaxed">
              {exp.description}
            </p>

            {/* Detailed Tasks Breakdown */}
            <div className="mt-6 space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-wider text-lilac flex items-center gap-2">
                <Terminal className="w-4 h-4 text-violet" />
                Verified Internship Tasks &amp; Solutions
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {exp.tasks.map((task, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-violet/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h5 className="font-disp font-semibold text-sm text-white mb-2">
                        {task.title}
                      </h5>
                      <p className="text-xs text-muted leading-relaxed">
                        {task.details}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Task Evaluated &amp; Complete</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Repo CTA */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {exp.github && (
                <a
                  href={exp.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium border border-violet/40 bg-violet/10 text-lilac hover:bg-violet/25 hover:border-violet transition-all shrink-0"
                >
                  <Github className="w-4 h-4" />
                  <span>View Datheon Tasks on GitHub</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
