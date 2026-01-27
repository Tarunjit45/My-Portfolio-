
import React from 'react';
import { Repository } from '../types';
import { PORTFOLIO_CONFIG } from '../constants';

interface ProjectCardProps {
  repo: Repository;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ repo }) => {
  const { primaryColor } = PORTFOLIO_CONFIG;

  // Map primary color to explicit classes to avoid Tailwind compilation issues
  const colorMap: Record<string, string> = {
    indigo: 'from-indigo-500/20 to-indigo-600/5 border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
    emerald: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    cyan: 'from-cyan-500/20 to-cyan-600/5 border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
    rose: 'from-rose-500/20 to-rose-600/5 border-rose-500/30 text-rose-400 bg-rose-500/10',
    amber: 'from-amber-500/20 to-amber-600/5 border-amber-500/30 text-amber-400 bg-amber-500/10',
    blue: 'from-blue-500/20 to-blue-600/5 border-blue-500/30 text-blue-400 bg-blue-500/10',
  };

  const activeTheme = colorMap[primaryColor] || colorMap.indigo;

  return (
    <div className="group relative glass glass-card p-7 rounded-[2rem] transition-all duration-500 flex flex-col h-full hover:shadow-[0_0_40px_rgba(0,0,0,0.3)]">
      <div className={`absolute inset-0 bg-gradient-to-br ${activeTheme} opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] -z-10`}></div>
      
      <div className="flex justify-between items-start mb-6">
        <div className={`p-3 rounded-2xl ${activeTheme.split(' ').pop()} transition-colors`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-semibold">
          <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {repo.stars}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
        {repo.name}
      </h3>
      
      <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-2">
        {repo.description}
      </p>

      <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-5 mb-6 border border-white/5 flex-grow group-hover:border-white/10 transition-colors">
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-1.5 h-1.5 rounded-full ${activeTheme.split(' ').filter(c => c.startsWith('text-')).join(' ').replace('text-', 'bg-')}`}></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Problem Solver Summary</span>
        </div>
        <p className="text-sm text-slate-200 font-medium leading-normal italic">
          "{repo.ai_summary}"
        </p>
      </div>

      <div className="mt-auto space-y-4">
        <div className="flex flex-wrap gap-2">
          {repo.language && (
            <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] text-slate-400 font-mono uppercase tracking-widest">
              {repo.language}
            </span>
          )}
          <span className="px-2.5 py-1 rounded-lg bg-indigo-500/5 border border-indigo-500/10 text-[10px] text-indigo-400/80 font-mono uppercase tracking-widest">
            {repo.category}
          </span>
        </div>

        <div className="flex gap-3 pt-2">
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold border border-white/10 transition-all uppercase tracking-widest"
          >
            Source Code
          </a>
          {repo.live_link ? (
            <a
              href={repo.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-bold transition-all uppercase tracking-widest bg-white text-slate-950 hover:shadow-xl hover:shadow-white/10`}
            >
              Live Demo
            </a>
          ) : (
            <div className="flex-1 flex items-center justify-center py-3 rounded-2xl bg-slate-900/50 text-slate-600 text-xs font-bold border border-white/5 cursor-not-allowed uppercase tracking-widest">
              Local Only
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
