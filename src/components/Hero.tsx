import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Send, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Copy,
  BarChart2,
  Code,
  Database
} from 'lucide-react';
import { recruiterInfo, typingKeywords } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const fullText = typingKeywords[currentKeywordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentKeywordIndex((prev) => (prev + 1) % typingKeywords.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentKeywordIndex]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(recruiterInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      
      {/* Background glowing aura Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-8 shadow-lg shadow-cyan-950/40">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
          <span className="w-2.5 h-2.5 rounded-full bg-teal-400 -ml-4.5" />
          <span>Available for Data Analyst Roles & Internships</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Title Greeting with Circular Profile Photo Avatar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-2">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-teal-400 to-sky-500 blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-3xl p-1 bg-slate-950 ring-2 ring-cyan-500/50 overflow-hidden shadow-2xl">
                  <img 
                    src={recruiterInfo.profileImage} 
                    alt="PRATHANJAN.P Profile Photo"
                    className="w-full h-full object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div>
                <p className="text-xs sm:text-sm font-bold tracking-widest text-cyan-400 uppercase mb-1">
                  ASPIRING DATA ANALYST
                </p>
                <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white mb-2 uppercase">
                  PRATHANJAN.P
                </h1>
                <p className="text-xs sm:text-sm font-medium text-slate-400">
                  B.Tech Information Technology Student | Python Developer
                </p>
              </div>
            </div>

            {/* Dynamic Animated Typewriter Headline */}
            <div className="h-10 sm:h-12 flex items-center bg-slate-900/60 px-4 rounded-xl border border-slate-800/80 w-fit">
              <span className="text-sm sm:text-base lg:text-lg font-bold text-cyan-300">
                {displayedText}
              </span>
              <span className="w-0.5 h-5 bg-teal-400 ml-1.5 animate-pulse" />
            </div>

            {/* Short Introduction Quote */}
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-900/70 p-5 rounded-2xl border border-slate-800/80 backdrop-blur-md space-y-2">
              <p className="font-medium text-slate-200">
                A motivated B.Tech Information Technology student with practical experience in Python programming and Data Analytics fundamentals.
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                Demonstrates strong analytical thinking through academic and personal projects. Currently building expertise in Power BI, NumPy, Pandas, Seaborn, Business Intelligence and Data Visualization.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                id="hero-view-projects-btn"
                className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-sky-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                id="hero-download-resume-btn"
                className="px-6 py-3.5 rounded-xl bg-slate-900 text-slate-100 font-semibold text-sm border border-slate-700/80 hover:border-cyan-500 hover:bg-slate-800 transition-all duration-200 flex items-center gap-2 shadow-md"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View ATS Resume</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                id="hero-contact-me-btn"
                className="px-6 py-3.5 rounded-xl bg-slate-950 text-slate-300 hover:text-white font-semibold text-sm border border-slate-800 hover:border-teal-500/50 transition-all duration-200 flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-teal-400" />
                <span>Contact PRATHANJAN</span>
              </button>
            </div>

            {/* Social Links & Location */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300 font-medium">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{recruiterInfo.location}</span>
              </div>

              <div className="h-4 w-px bg-slate-800 hidden sm:block" />

              <div className="flex items-center gap-3">
                <a
                  href={recruiterInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                  aria-label="GitHub Profile"
                  id="hero-github-link"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={recruiterInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                  aria-label="LinkedIn Profile"
                  id="hero-linkedin-link"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                </a>

                <button
                  onClick={copyEmailToClipboard}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
                  id="hero-copy-email-btn"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                      <span className="text-teal-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5 text-teal-400" />
                      <span>{recruiterInfo.email}</span>
                      <Copy className="w-3 h-3 text-slate-500 ml-1" />
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Recruiter Quick Highlights Card (Right Column) */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden border-cyan-500/20 shadow-2xl shadow-cyan-950/30 group">
              
              {/* Corner Ambient Glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-tr from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-100 uppercase tracking-wider">RECRUITER SNAPSHOT</h3>
                    <p className="text-xs text-slate-400">Candidate Summary for PRATHANJAN.P</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-[11px] font-bold border border-cyan-500/20">
                  Graduation 2026
                </span>
              </div>

              {/* 2x2 Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <BarChart2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-[10px] uppercase font-extrabold text-slate-500">Projects</span>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    3
                  </span>
                  <span className="text-[11px] text-slate-400 mt-1">Healthcare & FinTech</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <Code className="w-4 h-4 text-teal-400" />
                    <span className="text-[10px] uppercase font-extrabold text-slate-500">Tech Stack</span>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    12+
                  </span>
                  <span className="text-[11px] text-slate-400 mt-1">Python, SQL, Excel & Power BI</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <Database className="w-4 h-4 text-sky-400" />
                    <span className="text-[10px] uppercase font-extrabold text-slate-500">CGPA</span>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-teal-400">
                    8.0
                  </span>
                  <span className="text-[11px] text-slate-400 mt-1">B.Tech IT</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-[10px] uppercase font-extrabold text-slate-500">Certifications</span>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    3
                  </span>
                  <span className="text-[11px] text-slate-400 mt-1">Python, Analytics, SQL</span>
                </div>
              </div>

              {/* Core Skill Badges */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Skills Verified:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'SQL', 'Excel', 'Vibe Coding', 'Python Libraries', 'Git', 'GitHub', 'VS Code', 'Power BI', 'Business Intelligence'].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-900 text-cyan-300 border border-cyan-500/20 hover:border-cyan-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
