import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(0);

  const services = [
    {
      title: "BACKEND & FASTAPI MICROSERVICES",
      subtitle: "High-throughput asynchronous APIs, Pydantic validation, JWT RBAC security, and Dockerized microservices.",
      details: "Production-grade backend engineering demonstrated through the Datheon Internship and independent services. Employs async FastAPI, automatic OpenAPI Swagger documentation, sliding-window rate limiting, and background task workers.",
      stack: ["Python 3.12", "FastAPI", "Pydantic", "JWT & RBAC", "Background Tasks", "Bcrypt", "Docker", "RESTful APIs"]
    },
    {
      title: "DISTRIBUTED WORKFLOWS & QUEUES",
      subtitle: "Fault-tolerant DAG pipeline orchestration, Redis Streams worker pools, and sub-50ms real-time WebSockets.",
      details: "Architected DevFlow, a high-throughput distributed DAG workflow engine. Implements stateless pipeline execution, pull-based worker pools with Redis Streams consumer groups, heartbeat failure detection, and viewport virtualization for 10,000+ workflow nodes.",
      stack: ["Redis Streams", "BullMQ", "Node.js", "TypeScript", "PostgreSQL", "WebSockets", "DAG Execution", "Event Bus"]
    },
    {
      title: "AUTONOMOUS AI AGENTS & ML SYSTEMS",
      subtitle: "Multi-agent cognitive swarms, Fetch.ai uAgents, scikit-learn hazard prediction, and LLM synthesis pipelines.",
      details: "Trained RandomForestClassifier with 80% accuracy for SIH 2026 NER-Vision early warning landslide monitoring. Engineered O.M.N.I.S for Fetch AI-Thon 3.0 utilizing Fetch.ai uAgents, semantic DMM intent routing, Agentverse cloud hosting, and ASI:One protocol.",
      stack: ["Autonomous AI Agents", "Fetch.ai uAgents", "scikit-learn", "Agentverse", "ASI:One", "Groq / OpenAI API", "Docling", "Flask"]
    },
    {
      title: "FULL-STACK & REACT UI/UX",
      subtitle: "Responsive web portals, Supabase PostgreSQL, state virtualization, and aesthetic graphic design.",
      details: "Created CampusFinder, a college lost & found portal with domain-restricted auth (@coet.in), anti-fraud secret verification, and live student-to-founder messaging. Active graphics designer in OSCode Technical Club creating visual assets for campus coding initiatives.",
      stack: ["React 19 / 18", "TypeScript", "Tailwind CSS", "Vite", "Supabase", "Three.js", "Leaflet.js", "Graphic Design"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 sm:px-12 max-w-6xl mx-auto z-10 relative">
      {/* Giant Ghost Watermark (Mockup Style: "SERVICE") */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-0">
        <span className="watermark-text text-[14vw] leading-none select-none">
          SERVICE
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 mb-12 z-10 relative">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-lilac">What I Build</span>
        </div>
        <div className="font-disp font-extrabold text-sm uppercase tracking-wider text-muted">
          Services <span className="text-violet">|</span> Capabilities
        </div>
      </div>

      {/* Accordion Cards (Mockup Style: Large clean cards with + / -) */}
      <div className="space-y-4 z-10 relative">
        {services.map((service, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-3xl transition-all duration-300 overflow-hidden border ${
                isOpen
                  ? 'bg-white text-[#0a0815] shadow-2xl border-white scale-[1.01]'
                  : 'bg-[#141124]/90 text-white border-white/10 hover:border-violet/40 hover:bg-[#1a1630]'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full p-6 sm:p-10 flex items-center justify-between text-left transition-colors"
                aria-expanded={isOpen}
              >
                <div className="pr-4">
                  <span className={`font-mono text-xs font-bold uppercase tracking-wider mb-1 block ${isOpen ? 'text-violet' : 'text-lilac'}`}>
                    0{index + 1}
                  </span>
                  <h3 className="font-disp font-black text-2xl sm:text-4xl uppercase tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                    isOpen
                      ? 'bg-[#0a0815] text-white border-[#0a0815]'
                      : 'bg-white/5 text-white border-white/15'
                  }`}
                >
                  {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>

              {/* Expanded Content Drawer */}
              {isOpen && (
                <div className="px-6 sm:px-10 pb-8 pt-0 animate-fade-in border-t border-black/10">
                  <p className="font-disp font-semibold text-base sm:text-lg text-black/85 mt-6 mb-3 leading-snug">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-black/70 leading-relaxed max-w-4xl mb-6">
                    {service.details}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-xs px-3 py-1 rounded-full bg-black/[0.06] text-black font-semibold border border-black/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
