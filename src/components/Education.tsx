import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  Building2,
  TrendingUp,
  School
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Education & Academic Distinction
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Formal engineering education in Information Technology with consistent academic performance.
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="glass-panel p-8 rounded-3xl border-slate-800 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Degree Title & College Header */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-cyan-500 to-teal-500 text-slate-950 font-black shadow-lg">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">
                    UNDERGRADUATE DEGREE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase">
                    {educationData.degree}
                  </h3>
                  <p className="text-sm font-semibold text-teal-400">
                    Specialization: {educationData.specialization}
                  </p>
                </div>
              </div>

              {/* Institution & Timeline */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800 font-medium">
                  <Building2 className="w-4 h-4 text-cyan-400" />
                  <span>{educationData.institution}</span>
                </div>

                <div className="flex items-center gap-2 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800 font-medium">
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <span>{educationData.timeline}</span>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Academic CGPA
                  </span>
                  <span className="text-2xl font-black text-teal-400">
                    {educationData.cgpa}
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Strong Distinction</span>
                </div>
              </div>

              {/* Key Academic Highlights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-300">
                  Academic Milestones
                </h4>
                <div className="space-y-2">
                  {educationData.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* School Education & Relevant Coursework Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <School className="w-4 h-4 text-cyan-400" />
                  <span>Higher Secondary Schooling</span>
                </div>
                <p className="text-xs font-semibold text-slate-200">
                  Govt High Secondary School, Karur
                </p>
                <p className="text-xs text-slate-400">
                  Completed Higher Secondary Education with strong foundation in Mathematics and Science subjects.
                </p>
              </div>

              <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <BookOpen className="w-4 h-4 text-teal-400" />
                  <span>Core Coursework</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {educationData.coursework.map((course, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-medium flex items-center gap-2 hover:border-cyan-500/40 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{course}</span>
                    </div>
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
