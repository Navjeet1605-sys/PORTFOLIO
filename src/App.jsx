import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Education from './components/Education';
import GitHubSection from './components/GitHubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveCore from './components/InteractiveCore';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-[#f7f6fd] overflow-x-hidden selection:bg-violet selection:text-white">
      {/* Background Aesthetic Layers */}
      <div className="desktop-glow-frame pointer-events-none" />
      <div className="noise pointer-events-none" />
      <InteractiveCore />
      <div className="scrim pointer-events-none" />
      <CustomCursor />

      {/* Main Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Hackathons />
          <Education />
          <GitHubSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

