
import React from 'react';
import { PORTFOLIO_CONFIG } from '../constants';

const Header: React.FC = () => {
  const { name, role, bio, socials } = PORTFOLIO_CONFIG;

  return (
    <header className="pt-16 md:pt-24 pb-20 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 relative">
      <div className="relative group animate-float shrink-0">
        <div className="hologram-border w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 shadow-[0_0_60px_rgba(99,102,241,0.25)]">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#020617] relative bg-slate-900">
            {/* 
              Stable GitHub Avatar URL. 
              To use your local photo, download it, save as 'profile.jpg' in root, 
              and change src to "/profile.jpg"
            */}
            <img 
              src={`https://github.com/${PORTFOLIO_CONFIG.githubUser}.png`} 
              alt={name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Tarunjit+Biswas&background=6366f1&color=fff&size=512`;
              }}
            />
          </div>
        </div>
        <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 glass px-4 py-2 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]"></span>
            <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest whitespace-nowrap">Vibe Coder v3.1</span>
          </div>
        </div>
      </div>

      <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8">
        <div className="space-y-2 md:space-y-3">
          <div className="flex items-center justify-center md:justify-start gap-3">
             <span className="text-indigo-500 font-mono text-[10px] uppercase tracking-[0.4em] border border-indigo-500/30 px-3 py-1 rounded-full bg-indigo-500/5">System Auth: Verified</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-white text-glow leading-[1.1] md:leading-none">
            {name}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-heading font-medium text-indigo-400/90 tracking-tight">
            {role}
          </p>
        </div>
        
        <p className="max-w-2xl mx-auto md:mx-0 text-slate-400 text-base md:text-lg leading-relaxed font-light px-2 md:px-0">
          {bio}
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3.5 rounded-full glass hover:bg-white/10 transition-all flex items-center gap-3 border border-white/10"
          >
            <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Source</span>
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3.5 rounded-full glass hover:bg-white/10 transition-all flex items-center gap-3 border border-white/10"
          >
            <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <span className="text-xs font-bold uppercase tracking-[0.2em]">LinkedIn</span>
          </a>
          <a
            href={socials.email}
            className="px-10 py-3.5 rounded-full bg-white text-slate-950 font-bold uppercase tracking-[0.2em] text-xs hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all transform hover:scale-105 active:scale-95"
          >
            Hire Researcher
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
