import React, { useState, useEffect } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Learning } from './components/Learning';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ArrowUp, FileText } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 relative font-sans">
      
      {/* Unique Custom Cyber Pointer & Smooth Trailing Cursor */}
      <CustomCursor />

      {/* Background Particle Animation */}
      <ParticleBackground />

      {/* Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Learning />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating Action Buttons (Scroll to Top & Quick Resume) */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2 animate-in fade-in duration-300">
          <button
            onClick={() => setIsResumeOpen(true)}
            id="floating-resume-btn"
            className="p-3 rounded-full bg-slate-900/90 text-cyan-400 border border-cyan-500/40 shadow-xl hover:scale-110 hover:bg-slate-800 transition-all backdrop-blur-md"
            title="View Resume"
            aria-label="View Resume"
          >
            <FileText className="w-5 h-5" />
          </button>

          <button
            onClick={scrollToTop}
            id="floating-scroll-top-btn"
            className="p-3 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-500 text-slate-950 font-black shadow-xl shadow-cyan-500/25 hover:scale-110 transition-all"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      )}

    </div>
  );
}
