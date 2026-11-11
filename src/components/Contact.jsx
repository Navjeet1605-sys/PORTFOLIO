import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Download, MapPin, Send } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 max-w-6xl mx-auto z-10 relative">
      {/* Giant Ghost Watermark */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-0">
        <span className="watermark-text text-[14vw] leading-none select-none">
          CONNECT
        </span>
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-[#1c1438] via-[#120e24] to-[#0a0815] border border-violet/30 p-8 sm:p-16 shadow-2xl relative overflow-hidden z-10">
        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-violet/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-lilac block mb-4">
            Available For Roles &amp; Projects
          </span>

          <h2 className="font-disp font-black text-3xl sm:text-6xl uppercase tracking-tight text-white mb-6 leading-tight">
            Let's build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet via-lilac to-blue">
              worth shipping.
            </span>
          </h2>

          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl mb-10">
            Open to Python backend engineering internships, distributed systems projects, and autonomous AI collaborations. Reach out directly.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0a0815] font-disp font-bold text-sm hover:bg-lilac transition-all hover:scale-105 shadow-xl shadow-white/10"
            >
              <span>Email Me Directly</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 bg-white/[0.04] text-white font-mono text-xs hover:border-violet transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-lilac" />
                  <span>Copy: {personalInfo.email}</span>
                </>
              )}
            </button>

            <a
              href={personalInfo.resumeUrl}
              download="Navjeet_Sinha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 bg-white/[0.04] text-white font-disp font-semibold text-xs hover:border-violet transition-all"
            >
              <Download className="w-4 h-4 text-lilac" />
              <span>Download CV</span>
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-8 text-xs font-mono text-muted">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4 text-violet" />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4 text-violet" />
              <span>GitHub Repositories</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-violet" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
