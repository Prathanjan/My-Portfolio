import React, { useState } from 'react';
import { 
  FileCode, 
  Database, 
  Table, 
  Sparkles, 
  PieChart, 
  Binary, 
  BarChart2, 
  TrendingUp, 
  Filter, 
  Eye, 
  Calculator,
  Code,
  Table2,
  BookOpen,
  GitBranch,
  Github,
  Wrench
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Programming', 'Database', 'Spreadsheet', 'Coding', 'Python Libraries', 'Tools', 'Currently Learning'];

  const getIcon = (iconName: string) => {
    const className = "w-5 h-5 text-cyan-400";
    switch (iconName) {
      case 'FileCode': return <FileCode className={className} />;
      case 'Database': return <Database className="w-5 h-5 text-teal-400" />;
      case 'Table': return <Table className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-sky-400" />;
      case 'PieChart': return <PieChart className="w-5 h-5 text-cyan-400" />;
      case 'Binary': return <Binary className="w-5 h-5 text-teal-400" />;
      case 'Table2': return <Table2 className="w-5 h-5 text-emerald-400" />;
      case 'BarChart2': return <BarChart2 className={className} />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-sky-400" />;
      case 'Filter': return <Filter className="w-5 h-5 text-cyan-400" />;
      case 'Eye': return <Eye className="w-5 h-5 text-teal-400" />;
      case 'Calculator': return <Calculator className="w-5 h-5 text-emerald-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-cyan-400" />;
      case 'Github': return <Github className="w-5 h-5 text-teal-400" />;
      case 'Code': return <Code className="w-5 h-5 text-sky-400" />;
      default: return <Wrench className={className} />;
    }
  };

  const filteredSkills = skillsData.filter((skill: SkillItem) => {
    return activeCategory === 'All' || skill.category === activeCategory;
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>TOOLBOX & TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Technical Stack & Analytics Skillset
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Core skills in programming, database querying, data analytics, tools, and active learning domains.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 bg-slate-900/80 p-2 rounded-2xl border border-slate-800 backdrop-blur-md w-full max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              id={`skill-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid - Cards with progress bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill: SkillItem) => (
            <div
              key={skill.name}
              className="glass-card p-6 rounded-2xl border-slate-800 hover:border-cyan-500/40 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                    {getIcon(skill.iconName)}
                  </div>
                  {skill.isCurrentlyLearning ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30 shadow-sm">
                      <BookOpen className="w-3 h-3" />
                      <span>Currently Learning</span>
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-900 text-cyan-400 border border-slate-800">
                      {skill.category}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-extrabold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>

                {skill.description && (
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                )}
              </div>

              {/* Progress Bar & Percentage */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-slate-500 uppercase tracking-wider">Proficiency</span>
                  <span className="text-cyan-400 font-extrabold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800/80 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 group-hover:brightness-110 transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
