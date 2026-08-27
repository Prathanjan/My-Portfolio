import React from 'react';
import { 
  BarChart3, 
  FileCode, 
  Database, 
  Lightbulb, 
  GraduationCap, 
  Target, 
  Sparkles, 
  TrendingUp, 
  CheckCircle 
} from 'lucide-react';
import { aboutData, recruiterInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    BarChart3: <BarChart3 className="w-6 h-6 text-cyan-400" />,
    FileCode: <FileCode className="w-6 h-6 text-teal-400" />,
    Database: <Database className="w-6 h-6 text-sky-400" />,
    Lightbulb: <Lightbulb className="w-6 h-6 text-emerald-400" />,
  };

  const keyQualities = [
    "B.Tech Information Technology Student at Mahendra Engineering College",
    "Passionate about Data Analytics & Business Intelligence",
    "Proficient in Python, SQL, Excel, and Vibe Coding",
    "Actively mastering Power BI, NumPy, Pandas, Seaborn & Statistics",
    "Experience in Data Cleaning, EDA & Data Visualization",
    "Hands-on project work in MedAssist AI & Healthcare Analytics"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Transforming Data into Business Intelligence
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Focused on data-driven decision making, analytical clarity, and modern analytics workflows.
          </p>
        </div>

        {/* Content Layout matching reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Large Profile Picture Card + Metadata Quick Table */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Large Prominent Profile Photo Frame */}
            <div className="relative group w-full rounded-[2rem] p-2.5 bg-slate-900/90 border border-cyan-500/30 shadow-[0_0_45px_rgba(6,182,212,0.2)]">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-[1.6rem] overflow-hidden bg-slate-950">
                <img 
                  src={recruiterInfo.profileImage} 
                  alt="PRATHANJAN.P Profile" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                
                {/* Name Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-white text-xs font-black uppercase tracking-wider">
                    PRATHANJAN.P
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-[11px] font-bold">
                    DATA ANALYST
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Metadata Table (matching reference image) */}
            <div className="glass-panel p-6 rounded-2xl border-slate-800 space-y-3.5 text-xs">
              <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
                <span className="font-mono text-slate-400 uppercase tracking-wider text-[11px]">DEGREE</span>
                <span className="font-bold text-slate-200">B.Tech, Information Technology</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
                <span className="font-mono text-slate-400 uppercase tracking-wider text-[11px]">FOCUS</span>
                <span className="font-bold text-cyan-400">Data Analytics & BI</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
                <span className="font-mono text-slate-400 uppercase tracking-wider text-[11px]">BASED IN</span>
                <span className="font-bold text-slate-200">India</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="font-mono text-slate-400 uppercase tracking-wider text-[11px]">STATUS</span>
                <span className="font-bold text-teal-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                  <span>Open to Opportunities</span>
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Bio Story, 2x2 Feature Pillars Grid & Profile Highlights */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Bio Paragraphs */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border-cyan-500/20 space-y-4">
              <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
                I am a passionate <strong className="text-cyan-300 font-bold">Aspiring Data Analyst</strong> and <strong className="text-teal-300 font-bold">B.Tech Information Technology Student</strong> who enjoys transforming raw datasets into actionable business intelligence.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-2xl border border-slate-800/80">
                I continuously learn new analytical frameworks and love solving real-world challenges through data manipulation, visualization, and Python development.
              </p>
            </div>

            {/* 2x2 Feature Pillars Grid (Matching Reference Screenshot) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutData.pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="glass-card p-5 rounded-2xl flex flex-col justify-between gap-3 border-slate-800 hover:border-cyan-500/40 group transition-all duration-300 bg-slate-900/60"
                >
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 w-fit group-hover:scale-110 transition-transform duration-300">
                    {iconMap[pillar.icon]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bulleted Core Highlights */}
            <div className="glass-panel p-6 rounded-2xl border-slate-800">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>Key Profile Highlights</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {keyQualities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recruiter Goal Banner */}
            <div className="pt-2 flex items-center justify-between bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/30 p-4 rounded-2xl border border-cyan-500/20">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-200 uppercase tracking-wider">Career Objective</p>
                  <p className="text-xs text-slate-400">Begin my career as a Data Analyst and transform raw data into meaningful business insights.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
