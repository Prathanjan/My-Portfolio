import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Printer, 
  CheckCircle2, 
  Copy, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Code2, 
  Award,
  Sparkles
} from 'lucide-react';
import { recruiterInfo, projectsData, certificationsData, educationData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyResumeText = () => {
    const text = `
PRATHANJAN.P
Aspiring Data Analyst | B.Tech Information Technology Student | Python Developer
Email: ${recruiterInfo.email} | Location: ${recruiterInfo.location}
GitHub: ${recruiterInfo.github} | LinkedIn: ${recruiterInfo.linkedin}

SUMMARY:
${recruiterInfo.shortIntro}

EDUCATION:
${educationData.degree} - ${educationData.specialization}
${educationData.institution} | ${educationData.timeline}
CGPA: ${educationData.cgpa}

TECHNICAL SKILLS:
- Programming: Python
- Database: SQL
- Spreadsheet: Excel
- Coding: Vibe Coding
- Python Libraries: NumPy, Pandas, Seaborn
- Tools: Git (70%), GitHub (80%), VS Code (90%)
- Analytics & Learning: Power BI, Business Intelligence, Data Cleaning, Data Visualization, Statistics

PROJECTS:
1. ${projectsData[0].title} - ${projectsData[0].subtitle}
   Tech Stack: ${projectsData[0].technologies.join(', ')}
   Description: ${projectsData[0].description}

2. ${projectsData[1].title} - ${projectsData[1].subtitle} (Collaborative Academic Project)
   Tech Stack: ${projectsData[1].technologies.join(', ')}
   Description: ${projectsData[1].description}

3. ${projectsData[2].title} - FinTech Payment System (Coming Soon)
   Tech Stack: ${projectsData[2].technologies.join(', ')}

CERTIFICATIONS:
${certificationsData.map(c => `- ${c.title} | ${c.issuer} (${c.date}) - ID: ${c.credentialId}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="glass-panel w-full max-w-4xl max-h-[92vh] rounded-3xl border-slate-700/80 flex flex-col overflow-hidden shadow-2xl shadow-cyan-950/50"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white uppercase tracking-wider">ATS Resume Preview</h3>
              <p className="text-xs text-slate-400">PRATHANJAN.P • Aspiring Data Analyst</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyResumeText}
              className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-200 hover:text-white hover:border-cyan-500 transition-all flex items-center gap-1.5"
              id="modal-copy-resume-btn"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 text-xs font-black hover:opacity-90 transition-all flex items-center gap-1.5 uppercase tracking-wider"
              id="modal-print-resume-btn"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              id="modal-close-resume-x"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-8 overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm bg-slate-950/60">
          
          {/* Header Contact Strip */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-widest uppercase">{recruiterInfo.name}</h1>
              <p className="text-xs sm:text-sm font-semibold text-cyan-400 mt-1">Aspiring Data Analyst | B.Tech Information Technology Student</p>
            </div>

            <div className="text-xs space-y-1 text-slate-400 text-right">
              <p className="flex items-center gap-1.5 justify-end">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {recruiterInfo.email}
              </p>
              <p className="flex items-center gap-1.5 justify-end">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                {recruiterInfo.location}
              </p>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Professional Summary
            </h2>
            <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              {recruiterInfo.shortIntro}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-teal-400 mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              Education
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white text-sm">{educationData.degree} - {educationData.specialization}</h3>
                  <p className="text-xs text-slate-400">{educationData.institution}</p>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-300 font-black text-xs border border-teal-500/20">
                    CGPA: {educationData.cgpa}
                  </span>
                  <p className="text-[10px] text-slate-500 mt-1">{educationData.timeline}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-sky-400 mb-2 flex items-center gap-1.5">
              <Code2 className="w-4 h-4" />
              Technical Skillset
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[11px] font-bold text-slate-400 block mb-1 uppercase tracking-wider">Programming & Database</span>
                <p className="text-xs text-slate-200 font-semibold">Python (Programming), SQL (Database), Excel (Spreadsheet)</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[11px] font-bold text-slate-400 block mb-1 uppercase tracking-wider">Coding & Libraries</span>
                <p className="text-xs text-slate-200 font-semibold">Vibe Coding, Python Libraries (NumPy, Pandas, Seaborn)</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[11px] font-bold text-cyan-400 block mb-1 uppercase tracking-wider">Tools (Proficiency)</span>
                <p className="text-xs text-slate-200 font-semibold">Git — 70% | GitHub — 80% | VS Code — 90%</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[11px] font-bold text-teal-400 block mb-1 uppercase tracking-wider">Currently Learning</span>
                <p className="text-xs text-slate-200 font-semibold">Power BI, Business Intelligence, Data Cleaning, Data Visualization, Statistics</p>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-emerald-400 mb-2">
              Projects
            </h2>
            <div className="space-y-3">
              {projectsData.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-white text-xs">{proj.title}</h3>
                    <span className="text-[10px] font-mono text-cyan-400">{proj.status}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{proj.description}</p>
                  <p className="text-[10px] text-slate-400 font-mono">Stack: {proj.technologies.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              Certifications & Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {certificationsData.map((c) => (
                <div key={c.id} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <p className="font-bold text-white text-xs">{c.title}</p>
                  <p className="text-[10px] text-slate-400">{c.issuer} ({c.date}) • ID: {c.credentialId}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-slate-200 text-xs font-bold border border-slate-800 hover:bg-slate-800"
          >
            Close Resume Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
