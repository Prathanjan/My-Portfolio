import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  Copy, 
  MessageSquare, 
  Building, 
  User, 
  Sparkles,
  Clock
} from 'lucide-react';
import { recruiterInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'Data Analyst Role Inquiry',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const quickTemplates = [
    { label: '💼 Job Opportunity', subject: 'Data Analyst Role Inquiry', msg: 'Hi PRATHANJAN.P, we reviewed your profile and would like to discuss Data Analyst opportunities at our organization.' },
    { label: '📅 Interview Request', subject: 'Interview Schedule Request', msg: 'Hi PRATHANJAN.P, we are interested in scheduling an interview for an upcoming analytics position.' },
    { label: '🚀 Project Collaboration', subject: 'Data Analytics Project', msg: 'Hi PRATHANJAN.P, I saw your MedAssist AI & Healthcare Analytics projects and would like to connect.' }
  ];

  const handleTemplateClick = (tpl: typeof quickTemplates[0]) => {
    setFormData((prev) => ({
      ...prev,
      subject: tpl.subject,
      message: tpl.msg
    }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(recruiterInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>CONNECT WITH ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Get In Touch
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Reach out directly to PRATHANJAN.P regarding Data Analyst opportunities, internships, or project inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Contact Cards (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-8 rounded-3xl border-slate-800 space-y-6">
              
              <h3 className="text-xl font-black text-white flex items-center gap-2 uppercase tracking-wider">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Contact Info
              </h3>

              <div className="space-y-4">
                
                {/* Email Box */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Email Address</p>
                      <a 
                        href={`mailto:${recruiterInfo.email}`} 
                        className="text-sm font-semibold text-slate-100 hover:text-cyan-400 transition-colors"
                      >
                        {recruiterInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                    title="Copy Email"
                    id="contact-copy-email-btn"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-teal-950/80 text-teal-400 border border-teal-800/60">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Location</p>
                    <p className="text-sm font-semibold text-slate-100">{recruiterInfo.location}</p>
                    <p className="text-[11px] text-teal-400 font-medium mt-0.5">Open to Relocation & Remote Roles</p>
                  </div>
                </div>

                {/* Availability Box */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-800/60">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Availability</p>
                    <p className="text-sm font-semibold text-teal-400">{recruiterInfo.availability}</p>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <p className="text-xs font-black text-slate-300 uppercase tracking-wider">Social Links</p>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={recruiterInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-200 text-xs font-bold flex items-center gap-2.5 transition-all"
                    id="contact-linkedin-link"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn Profile</span>
                  </a>

                  <a
                    href={recruiterInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-200 text-xs font-bold flex items-center gap-2.5 transition-all"
                    id="contact-github-link"
                  >
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub Code</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form Column (Right Column) */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border-slate-800">
            
            <h3 className="text-xl font-black text-white mb-2 flex items-center gap-2 uppercase tracking-wider">
              <MessageSquare className="w-5 h-5 text-teal-400" />
              Send Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Use a quick template below or type your message to connect with PRATHANJAN.P.
            </p>

            {/* Quick Templates Selector */}
            <div className="mb-6 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Quick Message Templates:
              </span>
              <div className="flex flex-wrap gap-2">
                {quickTemplates.map((tpl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleTemplateClick(tpl)}
                    id={`quick-template-${idx}`}
                    className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-all text-left font-medium"
                  >
                    {tpl.label}
                  </button>
                ))}
              </div>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-teal-950/40 border border-teal-800/60 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto border border-teal-500/40">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-white uppercase">Message Sent!</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out. PRATHANJAN.P will review your message and reply to <span className="text-teal-400 font-semibold">{formData.email}</span> promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', company: '', subject: 'Data Analyst Role Inquiry', message: '' });
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hiring Manager"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      id="contact-name-input"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 placeholder-slate-600"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      id="contact-email-input"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 placeholder-slate-600"
                    />
                  </div>

                </div>

                {/* Company & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      id="contact-company-input"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 placeholder-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      id="contact-subject-input"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    id="contact-message-input"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 placeholder-slate-600 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  id="contact-submit-btn"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-black text-xs hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 uppercase tracking-wider disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
