import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  PieChart, 
  Binary, 
  Table2, 
  BarChart2, 
  TrendingUp, 
  Filter, 
  Eye, 
  Calculator
} from 'lucide-react';

export const Learning: React.FC = () => {
  const learningItems = [
    {
      title: "Power BI Dashboards & DAX",
      status: "Currently Learning",
      icon: <PieChart className="w-5 h-5 text-cyan-400" />,
      description: "Designing interactive visual dashboards, calculated measures using DAX, and report publishing.",
      topics: ["Data Modeling", "DAX Formulas", "Interactive Filters", "Executive KPIs"]
    },
    {
      title: "NumPy & Pandas Wrangling",
      status: "Currently Learning",
      icon: <Table2 className="w-5 h-5 text-teal-400" />,
      description: "Data manipulation, array operations, handling missing values, and DataFrame transformations.",
      topics: ["DataFrames", "Multi-Indexing", "Vectorized Math", "CSV/SQL Ingestion"]
    },
    {
      title: "Seaborn & Matplotlib Visualization",
      status: "Currently Learning",
      icon: <BarChart2 className="w-5 h-5 text-sky-400" />,
      description: "Creating exploratory statistical plots, heatmaps, distribution curves, and trend lines.",
      topics: ["Correlation Heatmaps", "Box Plots", "Scatter Distributions", "Custom Palettes"]
    },
    {
      title: "Business Intelligence Principles",
      status: "Currently Learning",
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      description: "Translating operational business metrics into strategic dashboards for decision makers.",
      topics: ["Metric Design", "Trend Identification", "Cohort Analysis", "Executive Reports"]
    },
    {
      title: "Data Cleaning & Preprocessing",
      status: "Currently Learning",
      icon: <Filter className="w-5 h-5 text-cyan-400" />,
      description: "Auditing raw datasets, removing duplicates, imputing null values, and standardizing data formats.",
      topics: ["Data Hygiene", "Outlier Removal", "Type Normalization", "Validation Rules"]
    },
    {
      title: "Statistics for Data Analytics",
      status: "Currently Learning",
      icon: <Calculator className="w-5 h-5 text-teal-400" />,
      description: "Applying statistical concepts including mean, median, variance, distributions, and probability.",
      topics: ["Descriptive Stats", "Variance & Standard Dev", "Probability Basics", "Data Distributions"]
    }
  ];

  return (
    <section id="learning" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-widest mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>CONTINUOUS LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Currently Learning & Skill Expansion
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Active analytics domains PRATHANJAN.P is actively developing through practical exercises.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningItems.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-3xl border-slate-800 flex flex-col justify-between group hover:border-teal-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-white mb-2 group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block">
                    Key Topics:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-1 text-[10px] font-semibold rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-6 flex items-center justify-between text-[11px]">
                <span className="text-slate-500 font-medium">Status</span>
                <span className="font-bold text-teal-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-teal-400" />
                  Active Focus
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
