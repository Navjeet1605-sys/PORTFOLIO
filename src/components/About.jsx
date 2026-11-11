import React from 'react';
import { Download, Sparkles, Star, Award, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 max-w-6xl mx-auto z-10 relative">
      {/* Top Pill Badge (Mockup Style) */}
      <div className="flex justify-center mb-6">
        <span className="font-mono text-xs uppercase tracking-widest px-4 py-1 rounded-full border border-violet/30 bg-violet/10 text-lilac">
          About Me
        </span>
      </div>

      {/* Main Big Statement Headline (Mockup Style) */}
      <h2 className="font-disp font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white text-center max-w-4xl mx-auto leading-tight mb-20">
        Python &amp; Distributed Systems Developer Crafting Resilient Backends, Fault-Tolerant Architectures, &amp; Autonomous AI Agents.
      </h2>

      {/* Circular Avatar Centerpiece Flanked by 4 Large Stats Grid (Mockup Style) */}
      <div className="relative max-w-3xl mx-auto">
        {/* Subtle Horizontal Divider Line through center */}
        <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center z-10 relative">
          {/* Left Column Stats */}
          <div className="space-y-12 text-left sm:text-right pr-0 sm:pr-8">
            <div>
              <div className="font-disp font-extrabold text-4xl sm:text-6xl text-white">03+</div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted mt-1">
                Datheon Internship Tasks
              </p>
            </div>
            <div>
              <div className="font-disp font-extrabold text-4xl sm:text-6xl text-lilac">80%</div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted mt-1">
                AI Landslide Model Hit-Rate
              </p>
            </div>
          </div>

          {/* Center Column: Circular Avatar with glowing ring & dangling pill (Mockup Style) */}
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center my-6 sm:my-0 order-first sm:order-none">
            <div className="relative">
              {/* Glowing Radial Ring */}
              <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full p-2 bg-gradient-to-tr from-violet via-blue to-lilac shadow-glow-portal relative flex items-center justify-center">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full border-2 border-[#0a0815]"
                />
              </div>

              {/* Dangling White Pill: DOWNLOAD CV ↓ (Mockup Style) */}
              <a
                href={personalInfo.resumeUrl}
                download="Navjeet_Sinha_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-[#0a0815] font-disp font-bold text-[11px] uppercase tracking-wider shadow-xl hover:bg-lilac transition-all hover:scale-105 shrink-0 whitespace-nowrap"
              >
                <span>Download CV</span>
                <Download className="w-3 h-3 text-violet" />
              </a>
            </div>
          </div>

          {/* Right Column Stats */}
          <div className="space-y-12 text-left pl-0 sm:pl-8">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <div className="font-disp font-extrabold text-4xl sm:text-6xl text-white">8.50</div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted mt-1">
                College SGPA (AKTU)
              </p>
            </div>
            <div>
              <div className="font-disp font-extrabold text-4xl sm:text-6xl text-blue">R2</div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted mt-1">
                Fetch AI-Thon 3.0 Qualified
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Philosophy Narrative */}
      <div className="mt-24 p-8 rounded-3xl bg-white/[0.02] border border-white/10 max-w-4xl mx-auto text-center sm:text-left grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-disp font-bold text-base text-white mb-2">Decoupled Backends</h4>
          <p className="text-xs text-muted leading-relaxed">
            Stateless FastAPI microservices, Redis Streams worker pools, and sub-50ms WebSocket communication.
          </p>
        </div>
        <div>
          <h4 className="font-disp font-bold text-base text-lilac mb-2">Autonomous AI Swarms</h4>
          <p className="text-xs text-muted leading-relaxed">
            Decentralized uAgents protocols, dynamic DMM semantic routing, and real-time Agentverse cloud deployments.
          </p>
        </div>
        <div>
          <h4 className="font-disp font-bold text-base text-blue mb-2">Production Rigor</h4>
          <p className="text-xs text-muted leading-relaxed">
            Pydantic schema validation, JWT role-based access control, and deterministic error handling.
          </p>
        </div>
      </div>
    </section>
  );
}
