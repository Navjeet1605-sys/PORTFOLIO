import React, { useState } from 'react';
import { Code2, Server, Network, Brain, Database, Layout, Wrench, CheckCircle } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-violet" />;
      case 'Server': return <Server className="w-5 h-5 text-blue" />;
      case 'Network': return <Network className="w-5 h-5 text-lilac" />;
      case 'Brain': return <Brain className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-amber-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-pink-400" />;
      default: return <Code2 className="w-5 h-5 text-violet" />;
    }
  };

  const categories = ['All', ...skillsData.map(c => c.category)];

  const filteredCategories = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto z-10 relative">
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-6 bg-violet"></span>
        <span className="font-mono text-xs uppercase tracking-widest text-lilac">Technical Capabilities</span>
      </div>
      <h2 className="font-disp font-bold text-3xl sm:text-4xl text-white mb-6">
        Verified Systems, Tools &amp; <span className="grad-text">Stack Arsenal.</span>
      </h2>
      <p className="text-muted text-sm sm:text-base max-w-2xl mb-10">
        Every technology listed here is backed by actual codebases, hackathon prototypes, or internship tasks — no inflated buzzwords.
      </p>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeCategory === cat
                ? 'bg-violet text-white shadow-[0_0_15px_rgba(139,92,246,0.4)] border border-violet'
                : 'glass text-muted hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((catGroup, idx) => (
          <div
            key={idx}
            className="glass-card p-6 rounded-2xl border border-white/5 hover:border-violet/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/10">
                <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10">
                  {getCategoryIcon(catGroup.icon)}
                </div>
                <h3 className="font-disp font-semibold text-base text-white">{catGroup.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {catGroup.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-lilac/50 hover:bg-violet/10 transition-all flex items-center gap-2"
                  >
                    <span className="text-xs font-medium text-white group-hover:text-lilac transition-colors">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-white/[0.06] text-muted/70 group-hover:text-lilac/90">
                      {skill.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-muted/60">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Production &amp; Project Validated</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

