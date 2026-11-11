import React, { useEffect, useState } from 'react';
import { GitPullRequest, GitFork, Star, BookOpen, ExternalLink, Code } from 'lucide-react';
import { Github } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function GitHubSection() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Navjeet1605-sys')
      .then((res) => {
        if (!res.ok) throw new Error('API limit');
        return res.json();
      })
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch(() => {
        // Fallback with verified static profile numbers
        setProfile({
          public_repos: 7,
          followers: 1,
          following: 2,
          html_url: 'https://github.com/Navjeet1605-sys'
        });
        setLoading(false);
      });
  }, []);

  const pinnedRepos = [
    {
      name: 'DevFlow',
      desc: 'High-throughput, fault-tolerant distributed DAG workflow & CI/CD engine built with Node.js, TypeScript, BullMQ, Redis Streams & PostgreSQL.',
      lang: 'TypeScript',
      url: 'https://github.com/Navjeet1605-sys/DevFlow'
    },
    {
      name: 'Datheon_Python_-_FastAPI_Backend_Development_Internship',
      desc: 'Three verified internship modules: BookStore REST API, JWT RBAC Auth, and Dockerized background notification microservice.',
      lang: 'Python',
      url: 'https://github.com/Navjeet1605-sys/Datheon_Python_-_FastAPI_Backend_Development_Internship'
    },
    {
      name: 'SIH-PS-26001',
      desc: 'NER-Vision: AI Landslide Guardian prototype with RandomForest 80% hit-rate and dynamic Dijkstra evacuation router.',
      lang: 'Python / Flask',
      url: 'https://github.com/Navjeet1605-sys/SIH-PS-26001'
    },
    {
      name: 'fetch-a-thon',
      desc: 'O.M.N.I.S: Multi-agent cognitive intelligence swarm on Fetch.ai uAgents framework, Agentverse, and ASI:One protocol.',
      lang: 'Python / uAgents',
      url: 'https://github.com/Navjeet1605-sys/fetch-a-thon'
    }
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto z-10 relative">
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-6 bg-violet"></span>
        <span className="font-mono text-xs uppercase tracking-widest text-lilac">Open Source &amp; Code</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="font-disp font-bold text-3xl sm:text-4xl text-white">
            GitHub <span className="grad-text">Activity &amp; Repositories.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base mt-2">
            Explore verified commits, architectural documentation, and open-source contributions.
          </p>
        </div>

        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass font-mono text-xs text-lilac hover:text-white hover:border-violet transition-all shrink-0"
        >
          <Github className="w-4 h-4" />
          <span>Follow on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5 ml-1" />
        </a>
      </div>

      {/* Profile Overview Stats */}
      {profile && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          <div className="glass-card p-4 rounded-xl border border-white/5">
            <span className="font-mono text-xs text-muted block mb-1">Public Repositories</span>
            <span className="font-disp font-bold text-2xl text-white">{profile.public_repos}</span>
          </div>
          <div className="glass-card p-4 rounded-xl border border-white/5">
            <span className="font-mono text-xs text-muted block mb-1">Primary Languages</span>
            <span className="font-disp font-bold text-lg text-lilac">Python &amp; TypeScript</span>
          </div>
          <div className="glass-card p-4 rounded-xl border border-white/5 col-span-2 sm:col-span-1">
            <span className="font-mono text-xs text-muted block mb-1">Active Ecosystem</span>
            <span className="font-disp font-bold text-lg text-emerald-400">FastAPI, uAgents, React</span>
          </div>
        </div>
      )}

      {/* Pinned Repos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pinnedRepos.map((repo, idx) => (
          <a
            key={idx}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 rounded-2xl border border-white/5 hover:border-violet/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-violet" />
                  <span className="font-mono font-semibold text-sm text-white group-hover:text-lilac transition-colors">
                    {repo.name}
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted group-hover:text-white transition-colors" />
              </div>
              <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3 mb-6">
                {repo.desc}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-muted/70 pt-3 border-t border-white/5">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-violet" />
                <span>{repo.lang}</span>
              </span>
              <span>Open Source</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
