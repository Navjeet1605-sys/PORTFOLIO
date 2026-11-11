import React from 'react';
import { GraduationCap, Award, Palette, CheckCircle2, Languages, Compass } from 'lucide-react';
import { educationData, extracurricularData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto z-10 relative">
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-6 bg-violet"></span>
        <span className="font-mono text-xs uppercase tracking-widest text-lilac">Background</span>
      </div>
      <h2 className="font-disp font-bold text-3xl sm:text-4xl text-white mb-6">
        Education &amp; <span className="grad-text">Collegiate Leadership.</span>
      </h2>
      <p className="text-muted text-sm sm:text-base max-w-2xl mb-12">
        Academic credentials, semester GPA records, and active technical club contributions at MGMCET Noida.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Education Card */}
        <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-violet/40 transition-all">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <span className="p-2.5 rounded-xl bg-violet/15 border border-violet/30 text-lilac">
              <GraduationCap className="w-6 h-6" />
            </span>
            <div>
              <h3 className="font-disp font-bold text-lg sm:text-xl text-white">
                Academic Qualifications
              </h3>
              <p className="font-mono text-xs text-lilac">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
            </div>
          </div>

          {educationData.map((edu, idx) => (
            <div key={idx} className="space-y-4">
              <div>
                <h4 className="font-disp font-semibold text-base sm:text-lg text-white">
                  {edu.institution}
                </h4>
                <p className="font-mono text-xs text-lilac mt-1">
                  {edu.degree}
                </p>
                <div className="flex flex-wrap gap-4 mt-2 text-xs text-muted font-mono">
                  <span>📍 {edu.location}</span>
                  <span>🗓️ {edu.period}</span>
                </div>
              </div>

              {/* SGPA Performance Grid */}
              <div className="grid grid-cols-2 gap-3 py-3">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="font-mono text-[11px] text-muted block mb-0.5">First Semester</span>
                  <span className="font-disp font-bold text-xl text-emerald-400">8.50 SGPA</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="font-mono text-[11px] text-muted block mb-0.5">Second Semester</span>
                  <span className="font-disp font-bold text-xl text-emerald-400">8.46 SGPA</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                {edu.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-muted leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-lilac shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Club Activities & Soft Skills */}
        <div className="lg:col-span-5 space-y-6">
          {/* OSCode Club */}
          <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-violet/40 transition-all">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
              <span className="p-2 rounded-xl bg-blue/15 border border-blue/30 text-blue">
                <Palette className="w-5 h-5" />
              </span>
              <div>
                <h4 className="font-disp font-bold text-base text-white">
                  {extracurricularData[0].title}
                </h4>
                <p className="font-mono text-xs text-lilac">
                  {extracurricularData[0].role}
                </p>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-muted leading-relaxed mb-4">
              {extracurricularData[0].details.map((d, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2">
                  <span className="text-violet font-bold mt-0.5">›</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages & Core Strengths */}
          <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-violet/40 transition-all">
            <div className="flex items-center gap-2 mb-3 font-disp font-semibold text-sm text-white">
              <Languages className="w-4 h-4 text-violet" />
              <span>Languages &amp; Core Strengths</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {['System Design Mindset', 'Team Collaboration', 'Problem Solving', 'Technical Leadership', 'UI/UX Visual Design', 'Rapid Prototyping'].map((s, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-muted"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-xs text-muted">
              <span>🗣️ <strong>English:</strong> Professional</span>
              <span>🗣️ <strong>Hindi:</strong> Native</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

