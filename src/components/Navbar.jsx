import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-12 py-4 flex items-center justify-between ${
        scrolled
          ? 'bg-[#08070f]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Brand Logo with live pulsing indicator */}
      <a href="#" className="flex items-center gap-2.5 group">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
        </span>
        <span className="font-disp font-bold text-lg tracking-tight text-white group-hover:text-lilac transition-colors">
          Navjeet Sinha
        </span>
        <span className="hidden sm:inline-block font-mono text-[11px] text-muted/70 px-2 py-0.5 rounded-full border border-white/10 bg-white/[0.03]">
          v2.0
        </span>
      </a>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-7">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-muted hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-violet after:to-lilac hover:after:w-full after:transition-all after:duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="hidden sm:flex items-center gap-3">
        <a
          href={personalInfo.resumeUrl}
          download="Navjeet_Sinha_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border border-violet/40 bg-violet/10 text-lilac hover:bg-violet/25 hover:border-violet transition-all shadow-[0_0_15px_rgba(139,92,246,0.15)]"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Resume</span>
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="p-2 rounded-lg border border-white/10 bg-white/[0.03] text-muted hover:text-white hover:border-white/25 transition-all"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="p-2 rounded-lg border border-white/10 bg-white/[0.03] text-muted hover:text-white hover:border-white/25 transition-all"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden p-2 text-muted hover:text-white rounded-lg border border-white/10 bg-white/[0.03]"
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0d0b1a]/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-muted hover:text-white transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <a
              href={personalInfo.resumeUrl}
              download="Navjeet_Sinha_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono border border-violet/40 bg-violet/15 text-lilac"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-white/10 text-muted hover:text-white"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-white/10 text-muted hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
