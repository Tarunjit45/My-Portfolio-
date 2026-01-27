
import React from 'react';
import { ABOUT_ME } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tighter">
              {ABOUT_ME.title}
            </h2>
            <div className="h-1 w-16 md:w-24 bg-indigo-500 rounded-full"></div>
          </div>
          
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light italic">
            "{ABOUT_ME.description}"
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {ABOUT_ME.highlightPoints.map((point, i) => (
              <div key={i} className="glass p-5 md:p-6 rounded-2xl md:rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-[8px] md:text-[10px] mb-2">{point.label}</h4>
                <p className="text-xs md:text-sm text-slate-400 leading-snug">{point.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group mt-8 lg:mt-0">
          <div className="absolute inset-0 bg-indigo-500/20 blur-[60px] md:blur-[100px] -z-10 group-hover:bg-indigo-500/30 transition-all duration-700"></div>
          <div className="glass p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-white/10 space-y-6 md:space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Vibe Coding Capabilities</h3>
            </div>

            <div className="space-y-4 md:space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  <span>Speed of Prototyping</span>
                  <span className="text-indigo-400">99.9%</span>
                </div>
                <div className="h-1.5 md:h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 w-[99.9%] animate-pulse"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  <span>AI Observability Arch</span>
                  <span className="text-indigo-400">95%</span>
                </div>
                <div className="h-1.5 md:h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 w-[95%] shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  <span>Research Integrity</span>
                  <span className="text-indigo-400">98%</span>
                </div>
                <div className="h-1.5 md:h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 w-[98%]"></div>
                </div>
              </div>
            </div>

            <p className="text-[10px] md:text-xs text-slate-500 font-mono leading-relaxed">
              [SYSTEM_LOG]: Initializing research-grade deployment... <br/>
              [STATUS]: Architecting reliable LLM bridges. <br/>
              [MODALITY]: Multi-agent orchestration active.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
