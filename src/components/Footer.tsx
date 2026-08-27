import React from 'react';
import { ArrowUp } from 'lucide-react';
import { recruiterInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 pt-12 pb-8 overflow-hidden">
      
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Logo & Tagline */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-lg font-black text-white tracking-widest uppercase">
              PRATHANJAN.P
            </h3>
            <p className="text-xs text-slate-400 max-w-sm">
              Aspiring Data Analyst | B.Tech IT Student | Python Developer crafting data-driven solutions.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            id="footer-back-to-top-btn"
            className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold hover:border-cyan-500 hover:text-white transition-all shadow-md"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

        {/* Bottom credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} PRATHANJAN.P. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-slate-400 font-semibold">
            <a href={recruiterInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              GitHub
            </a>
            <a href={recruiterInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${recruiterInfo.email}`} className="hover:text-cyan-400 transition-colors">
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
