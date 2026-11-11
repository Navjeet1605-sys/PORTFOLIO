import React from 'react';
import { MapPin, Phone, Mail, GraduationCap, Cpu, Layers, ShieldCheck, Palette } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto z-10 relative">
      {/* Section Tag */}
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-6 bg-violet"></span>
        <span className="font-mono text-xs uppercase tracking-widest text-lilac">About Me</span>
      </div>
      <h2 className="font-disp font-bold text-3xl sm:text-4xl text-white mb-12">
        Still curious, <span className="grad-text">already building & shipping.</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Avatar & Contact Card */}
        <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet/20 rounded-full blur-3xl pointer-events-none" />

          {/* Avatar with Glow Ring */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
            <div className="relative group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-lilac/40 p-1 bg-gradient-to-br from-violet/40 to-blue/40 shadow-[0_0_25px_rgba(139,92,246,0.3)]">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="absolute -bottom-1.5 -right-1.5 bg-emerald-500 border-2 border-[#0d0b1a] rounded-full p-1" title="Active & Open to Roles">
                <span className="block w-2 h-2 rounded-full bg-white animate-pulse" />
              </span>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-disp font-bold text-xl text-white">{personalInfo.name}</h3>
              <p className="font-mono text-xs text-lilac mt-1">Python, Backend & AI Developer</p>
              <p className="text-xs text-muted/80 mt-1">2nd-Year B.Tech CSE (AKTU)</p>

              <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="inline-flex items-center gap-1 font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-muted">
                  <MapPin className="w-3 h-3 text-lilac" />
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Contact Rows */}
          <div className="pt-4 border-t border-white/10 space-y-2.5 font-mono text-xs text-muted">
            <div className="flex items-center justify-between">
              <span className="text-muted/60 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-violet" /> Email
              </span>
              <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-lilac transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted/60 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-violet" /> Phone
              </span>
              <span className="text-white">{personalInfo.phone}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted/60 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-violet" /> College
              </span>
              <span className="text-white">MGMCET Noida</span>
            </div>
          </div>
        </div>

        {/* Right Column: Engineering Journey Narrative & Core Tenets */}
        <div className="lg:col-span-7 space-y-6 text-muted text-base leading-relaxed">
          <p>
            I am a second-year Computer Science student who approaches software not as isolated code snippets, but as <strong className="text-white font-medium">interconnected, resilient systems</strong>. My journey started with core programming fundamentals in <strong className="text-lilac font-medium">C, C++, and Python</strong>, before evolving into enterprise-grade API development and distributed architectures.
          </p>

          <p>
            During my <strong className="text-white font-medium">Datheon Backend Internship</strong>, I engineered modular FastAPI microservices featuring strict Pydantic data schemas, JWT-based role-based access control, and asynchronous containerized notification workers.
          </p>

          <p>
            In hackathons like <strong className="text-white font-medium">SIH 2026 (NER-Vision Landslide Guardian)</strong> and <strong className="text-white font-medium">Fetch AI-Thon 3.0 (O.M.N.I.S Swarm)</strong>, I have designed ML hazard classification pipelines and autonomous multi-agent networks powered by Fetch.ai uAgents and Agentverse cloud protocols.
          </p>

          {/* Engineering Tenets Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl glass border border-white/5 hover:border-violet/30 transition-all">
              <Cpu className="w-5 h-5 text-violet mb-2" />
              <h4 className="font-disp font-semibold text-sm text-white mb-1">Decoupled Systems</h4>
              <p className="text-xs text-muted/80">Stateless execution, Redis Streams worker pools, and clean boundaries.</p>
            </div>

            <div className="p-4 rounded-xl glass border border-white/5 hover:border-blue/30 transition-all">
              <ShieldCheck className="w-5 h-5 text-blue mb-2" />
              <h4 className="font-disp font-semibold text-sm text-white mb-1">Defensive Security</h4>
              <p className="text-xs text-muted/80">Domain-scoped auth, strict Pydantic validations, and fail-safe fallbacks.</p>
            </div>

            <div className="p-4 rounded-xl glass border border-white/5 hover:border-lilac/30 transition-all">
              <Palette className="w-5 h-5 text-lilac mb-2" />
              <h4 className="font-disp font-semibold text-sm text-white mb-1">UI/UX Craft</h4>
              <p className="text-xs text-muted/80">Graphic design sensibility applied to sleek developer interfaces.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

