import React, { useState } from 'react';
import { Mail, Download, Copy, Check, Send, Sparkles, MapPin, Phone } from 'lucide-react';
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
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto z-10 relative">
      <div className="glass-card p-8 sm:p-14 rounded-3xl border border-white/10 text-center relative overflow-hidden shadow-2xl">
        {/* Glow Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet/30 bg-violet/10 text-lilac font-mono text-xs mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let's collaborate &amp; ship</span>
          </div>

          <h2 className="font-disp font-extrabold text-3xl sm:text-5xl text-white mb-6 tracking-tight leading-tight">
            Ready to build something <span className="grad-text">worth shipping.</span>
          </h2>

          <p className="text-muted text-sm sm:text-base leading-relaxed mb-10">
            Open to software engineering internships, Python backend roles, and AI agent collaborations. Reach out directly or connect on LinkedIn.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm bg-gradient-to-r from-violet to-blue text-white shadow-lg hover:shadow-violet/40 hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Email Me Directly</span>
            </a>

            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs glass text-white hover:border-lilac transition-all"
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
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs glass text-white hover:border-lilac transition-all"
            >
              <Download className="w-4 h-4 text-lilac" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Profiles & Details */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-muted">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4 text-violet" />
              <span>LinkedIn Profile</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-white transition-colors"
            >
              <Github className="w-4 h-4 text-violet" />
              <span>GitHub Repositories</span>
            </a>

            <div className="flex items-center gap-2 text-muted">
              <MapPin className="w-4 h-4 text-violet" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
