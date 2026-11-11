import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-12 py-5 flex items-center justify-between ${
        scrolled
          ? 'bg-[#0a0815]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4'
          : 'bg-transparent'
      }`}
    >
      {/* Left Navigation Links (Mockup Style) */}
      <div className="hidden md:flex items-center gap-7">
        {navLinks.slice(0, 4).map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-xs uppercase tracking-wider font-semibold text-muted hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Center Logo Mark (Mockup Style: "🌀 navjeet") */}
      <a href="#" className="flex items-center gap-2 group">
        <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-violet to-blue flex items-center justify-center text-white shadow-glow-violet group-hover:rotate-180 transition-transform duration-500">
          <span className="font-disp font-black text-xs">N</span>
        </span>
        <span className="font-disp font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-lilac transition-colors">
          navjeet
        </span>
      </a>

      {/* Right Social Icons & Pill Button (Mockup Style) */}
      <div className="hidden sm:flex items-center gap-3">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-8 h-8 rounded-full border border-white/15 bg-white/[0.04] flex items-center justify-center text-muted hover:text-white hover:border-violet/60 transition-all"
        >
          <Github className="w-3.5 h-3.5" />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-8 h-8 rounded-full border border-white/15 bg-white/[0.04] flex items-center justify-center text-muted hover:text-white hover:border-violet/60 transition-all"
        >
          <Linkedin className="w-3.5 h-3.5" />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#0a0815] font-disp font-bold text-xs hover:bg-lilac transition-all hover:scale-105 shadow-md shadow-white/10"
        >
          <span>Hire Me!</span>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 text-muted hover:text-white rounded-lg border border-white/10"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0d0b1a]/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-wider font-semibold text-muted hover:text-white transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-5 py-2 rounded-full bg-white text-[#0a0815] font-disp font-bold text-xs"
            >
              Hire Me!
            </a>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/10 text-muted hover:text-white"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/10 text-muted hover:text-white"
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
