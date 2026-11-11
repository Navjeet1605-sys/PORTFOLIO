import React from 'react';
import { ArrowUpRight, Download, ArrowDownRight, Sparkles, Mail, Terminal, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 px-6 sm:px-12 flex flex-col justify-center overflow-hidden">
      {/* Giant Background Watermark Text (Mockup Style: "DEVELOPER") */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0">
        <span className="watermark-text text-[15vw] leading-none select-none">
          DEVELOPER
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        {/* Left Headline Column */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-lilac">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Hi, 👨‍💻 I'm Navjeet Sinha</span>
          </div>

          <h1 className="font-disp font-extrabold text-4xl sm:text-6xl xl:text-7xl uppercase tracking-tight text-white leading-[1.04] mb-6">
            Python, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet via-lilac to-blue">
              Backend Architect
            </span> <br />
            &amp; AI Systems.
          </h1>

          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg mb-8 font-body">
            Engineering high-throughput FastAPI microservices, fault-tolerant distributed DAG workflows with Redis Streams, and autonomous multi-agent cognitive swarms.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0a0815] font-disp font-bold text-sm hover:bg-lilac transition-all hover:scale-105 shadow-lg shadow-white/10"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Navjeet_Sinha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 bg-white/[0.04] text-white font-disp font-semibold text-sm hover:border-violet hover:bg-violet/10 transition-all hover:scale-105"
            >
              <span>Download CV</span>
              <Download className="w-4 h-4 text-lilac" />
            </a>
          </div>

          {/* Quick Metrics Bar Under Headline */}
          <div className="mt-12 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-md">
            <div>
              <div className="font-disp font-extrabold text-2xl sm:text-3xl text-white">03+</div>
              <div className="font-mono text-[11px] text-muted uppercase">Internship Tasks</div>
            </div>
            <div>
              <div className="font-disp font-extrabold text-2xl sm:text-3xl text-lilac">80%</div>
              <div className="font-mono text-[11px] text-muted uppercase">AI Model Accuracy</div>
            </div>
            <div>
              <div className="font-disp font-extrabold text-2xl sm:text-3xl text-blue">8.50</div>
              <div className="font-mono text-[11px] text-muted uppercase">First Sem SGPA</div>
            </div>
          </div>
        </div>

        {/* Right Hero Arch Portal (Mockup Style with glowing sun and signature) */}
        <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2 relative">
          <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
            {/* The Signature Arch Frame */}
            <div className="hero-arch-frame aspect-[4/5] w-full border border-violet/40 shadow-glow-portal relative flex items-end justify-center">
              {/* Glowing Purple-Blue Radial Sun */}
              <div className="hero-arch-sun" />

              {/* Floating Pill Badges (Mockup Style) */}
              <div className="absolute top-12 left-4 z-20 px-3.5 py-1 rounded-full bg-[#0a0815]/80 backdrop-blur-md border border-white/15 text-white font-disp text-xs font-semibold -rotate-6 shadow-lg">
                Backend Architect
              </div>

              <div className="absolute top-28 right-4 z-20 px-3.5 py-1 rounded-full bg-[#0a0815]/80 backdrop-blur-md border border-violet/50 text-lilac font-disp text-xs font-semibold rotate-6 shadow-lg">
                FastAPI &amp; uAgents
              </div>

              <div className="absolute bottom-28 left-4 z-20 px-3.5 py-1 rounded-full bg-[#0a0815]/80 backdrop-blur-md border border-blue/40 text-blue font-disp text-xs font-semibold -rotate-3 shadow-lg">
                AI / ML Systems
              </div>

              {/* Navjeet's Portrait Image */}
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="relative z-10 w-full h-[88%] object-cover object-top mask-image-gradient filter contrast-105"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                }}
              />

              {/* Cursive Handwriting Signature Overlay (Mockup Style: "Navjeet Sinha") */}
              <div className="absolute bottom-12 z-20 w-full text-center pointer-events-none transform -rotate-3">
                <span className="font-signature font-bold text-5xl sm:text-6xl text-lilac drop-shadow-[0_0_15px_rgba(139,92,246,0.9)] tracking-wide">
                  Navjeet Sinha
                </span>
              </div>
            </div>

            {/* Floating White Editorial Card (Mockup Style: Bottom Right) */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 z-30 max-w-[280px] p-5 rounded-2xl bg-white text-[#0a0815] shadow-2xl border border-white/20 transform hover:-translate-y-1 transition-transform">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-disp font-bold text-xs sm:text-sm leading-snug">
                    2nd-Year B.Tech CSE (AKTU) &amp; Systems Engineer in Delhi NCR, India.
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-violet hover:underline mt-2.5"
                  >
                    <span>{personalInfo.email}</span>
                  </a>
                </div>

                {/* Spinning Round Badge Stamp */}
                <div className="relative w-12 h-12 shrink-0">
                  <div className="absolute inset-0 rounded-full bg-[#0a0815] text-white flex items-center justify-center shadow-md">
                    <ArrowDownRight className="w-5 h-5 text-lilac transform -rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
