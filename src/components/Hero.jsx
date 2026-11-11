import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Terminal, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.subRoles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center px-6 pt-32 pb-16 z-10 text-center">
      {/* Top Engineering Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-violet/30 bg-violet/10 backdrop-blur-md mb-8 animate-float-slow shadow-[0_0_20px_rgba(139,92,246,0.15)]">
        <Sparkles className="w-3.5 h-3.5 text-lilac" />
        <span className="font-mono text-xs text-lilac tracking-wide">
          Available for Python, Backend & AI Engineering Roles
        </span>
      </div>

      {/* Main Hero Headline */}
      <h1 className="font-disp font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight max-w-5xl leading-[1.08] mb-6">
        Building high-impact systems at the edge of{' '}
        <span className="grad-text">code, AI & backend.</span>
      </h1>

      {/* Dynamic Sub-Role Switcher */}
      <div className="flex items-center justify-center gap-2 mb-6 font-mono text-base sm:text-lg text-muted">
        <Terminal className="w-4 h-4 text-violet" />
        <span>Specializing in</span>
        <span className="font-semibold text-lilac border-b border-lilac/40 pb-0.5 min-w-[200px] text-left">
          {personalInfo.subRoles[roleIndex]}
        </span>
      </div>

      {/* Concise Bio */}
      <p className="max-w-2xl text-muted text-base sm:text-lg leading-relaxed mb-10 font-body">
        Hi, I'm <strong className="text-white font-semibold">Navjeet Sinha</strong> — 2nd-year B.Tech CSE student at MGMCET Noida. I build production-grade FastAPI microservices, distributed DAG workflow engines, and autonomous multi-agent cognitive swarms.
      </p>

      {/* Call to Actions */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        <a
          href="#projects"
          className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm bg-gradient-to-r from-violet to-blue text-white shadow-lg hover:shadow-violet/40 hover:scale-[1.03] active:scale-[0.98] transition-all"
        >
          <span>Explore Projects</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <a
          href={personalInfo.resumeUrl}
          download="Navjeet_Sinha_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm glass text-white hover:border-lilac hover:bg-white/[0.08] hover:scale-[1.03] active:scale-[0.98] transition-all"
        >
          <Download className="w-4 h-4 text-lilac" />
          <span>Download Resume</span>
        </a>

        <div className="flex items-center gap-2 pl-2">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3.5 rounded-xl glass text-muted hover:text-white hover:border-violet/50 transition-all hover:scale-105"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3.5 rounded-xl glass text-muted hover:text-white hover:border-violet/50 transition-all hover:scale-105"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Quick Verified Impact Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
        {personalInfo.stats.map((stat, idx) => (
          <div
            key={idx}
            className="glass-card p-4 rounded-xl text-left border border-white/5 hover:border-violet/30 transition-all group"
          >
            <div className="font-disp font-bold text-2xl sm:text-3xl text-white group-hover:text-lilac transition-colors mb-1">
              {stat.value}
            </div>
            <div className="font-mono text-xs text-lilac/90 font-medium mb-0.5">
              {stat.label}
            </div>
            <div className="text-[11px] text-muted/70 truncate">
              {stat.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
