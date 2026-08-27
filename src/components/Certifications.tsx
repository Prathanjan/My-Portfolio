import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles,
  FileCheck,
  X,
  Clock
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { Certification } from '../types';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Certifications & Qualifications
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified credentials in Python programming, Data Analytics, and ongoing SQL database certification.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-card p-6 rounded-3xl border-slate-800 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                
                {/* Image preview thumbnail if available */}
                {cert.imageUrl ? (
                  <div 
                    onClick={() => setSelectedCert(cert)}
                    className="relative w-full h-44 mb-5 rounded-2xl overflow-hidden border border-slate-800 group-hover:border-cyan-500/50 transition-all cursor-pointer group/img bg-slate-950/80 flex items-center justify-center p-1"
                  >
                    <img 
                      src={cert.imageUrl} 
                      alt={cert.title}
                      className="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-xl bg-slate-900/90 text-cyan-300 text-xs font-bold border border-cyan-500/40 flex items-center gap-1.5 shadow-lg">
                        <ExternalLink className="w-3.5 h-3.5" />
                        View Certificate
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-44 mb-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex flex-col items-center justify-center p-6 text-center">
                    <Clock className="w-8 h-8 text-amber-400 animate-spin-slow mb-2" />
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">In Progress</span>
                    <p className="text-[11px] text-slate-400 mt-1">Currently pursuing professional certification</p>
                  </div>
                )}

                {/* Header row */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block">
                      {cert.issuer}
                    </span>
                    <h3 className="text-base font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <span className="px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-slate-900 text-slate-300 border border-slate-800 shrink-0">
                    {cert.date}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skills verified list */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block">
                    Verified Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsVerified.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[10px] font-medium rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer Verification */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span className="font-mono text-[11px]">{cert.credentialId}</span>
                </div>

                {cert.imageUrl && (
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    id={`view-cert-${cert.id}`}
                  >
                    <span>View Image</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="glass-panel w-full max-w-2xl rounded-3xl border-slate-700 p-6 space-y-4 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h4 className="text-lg font-black text-white">{selectedCert.title}</h4>
                <p className="text-xs text-cyan-400 font-semibold">{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                id="close-cert-modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate High-Res Image Display */}
            {selectedCert.imageUrl ? (
              <div className="rounded-2xl overflow-hidden border border-slate-800 max-h-[60vh] flex items-center justify-center bg-black">
                <img 
                  src={selectedCert.imageUrl} 
                  alt={selectedCert.title}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-slate-900 text-center space-y-2">
                <p className="text-sm text-slate-300">{selectedCert.description}</p>
              </div>
            )}

            <div className="flex items-center justify-between pt-2 text-xs">
              <span className="font-mono text-slate-400">Credential ID: {selectedCert.credentialId}</span>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
