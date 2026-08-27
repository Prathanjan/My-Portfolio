import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  Send, 
  User, 
  Code2, 
  GraduationCap, 
  FolderGit2, 
  Award, 
  BookOpen, 
  Sparkles,
  Layers 
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Send },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Scrolled background state
      setScrolled(window.scrollY > 20);

      // ScrollSpy active section detection
      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-blue-950/10' 
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll progress bar */}
      <div 
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center gap-2.5 group focus:outline-none"
            id="nav-logo-btn"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-teal-500 to-sky-400 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="text-lg font-bold text-cyan-400">P</span>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-black tracking-widest text-slate-100 group-hover:text-cyan-400 transition-colors uppercase">
                PRATHANJAN.P
              </span>
              <span className="text-[10px] font-medium tracking-wider text-teal-400 uppercase -mt-0.5">
                Aspiring Data Analyst
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  id={`nav-link-${link.id}`}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              id="nav-resume-btn"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-slate-200 border border-slate-700/80 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              id="nav-hire-btn"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:opacity-95 shadow-md shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              id="mobile-resume-btn"
              className="p-2 text-xs font-semibold rounded-lg bg-slate-900 text-blue-400 border border-slate-800"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pb-6 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => {
              const IconComp = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  id={`mobile-nav-link-${link.id}`}
                  className={`flex items-center gap-2 px-3 py-2.5 text-xs font-medium rounded-xl transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold'
                      : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <IconComp className="w-4 h-4 opacity-80" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
            <button
              onClick={onOpenResume}
              id="mobile-drawer-resume"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-xl bg-slate-900 text-slate-200 border border-slate-700"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Full Resume</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              id="mobile-drawer-contact"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
            >
              <Send className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
