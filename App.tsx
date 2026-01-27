
import React, { useState, useMemo, useEffect } from 'react';
import { Category, Repository } from './types';
import { PORTFOLIO_CONFIG } from './constants';
import { enrichRepository } from './utils/repoEnricher';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import FilterBar from './components/FilterBar';
import ProjectCard from './components/ProjectCard';

const App: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  useEffect(() => {
    async function fetchGitHubRepos() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${PORTFOLIO_CONFIG.githubUser}/repos?sort=updated&per_page=100`
        );
        const data = await response.json();
        
        if (Array.isArray(data)) {
          const enriched = data
            .filter(r => !r.fork)
            .map(enrichRepository);
          setRepos(enriched);
        }
      } catch (error) {
        console.error("GitHub Sync Error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchGitHubRepos();
  }, []);

  const categories = useMemo(() => {
    const cats: Category[] = ['All'];
    repos.forEach(repo => {
      if (!cats.includes(repo.category)) {
        cats.push(repo.category);
      }
    });
    return cats;
  }, [repos]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return repos;
    return repos.filter(repo => repo.category === activeCategory);
  }, [activeCategory, repos]);

  return (
    <div className="min-h-screen pb-20 md:pb-32 selection:bg-indigo-500 selection:text-white">
      <Header />
      
      <div className="relative z-10">
        <AboutSection />

        <main className="px-6 max-w-7xl mx-auto mt-16 md:mt-32">
          <div className="flex flex-col items-center mb-12 md:mb-24 space-y-3 md:space-y-4">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="h-px w-8 md:w-12 bg-indigo-500/30"></div>
              <span className="text-indigo-400 font-mono text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase flex items-center gap-2 md:gap-3">
                <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${loading ? 'bg-amber-500 animate-pulse' : 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,1)]'}`}></span>
                {loading ? 'Fetching Neural Assets...' : 'System Integrity: Validated'}
              </span>
              <div className="h-px w-8 md:w-12 bg-indigo-500/30"></div>
            </div>
            <h2 className="text-4xl md:text-7xl font-bold text-white text-center tracking-tighter">
              Project Infrastructure
            </h2>
            <p className="text-slate-500 text-center max-w-xl text-base md:text-lg font-light px-4">
              Architectural artifacts from the core repositories of the {PORTFOLIO_CONFIG.name} ecosystem.
            </p>
          </div>

          {!loading && (
            <FilterBar 
              categories={categories} 
              activeCategory={activeCategory} 
              onSelect={setActiveCategory} 
            />
          )}

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="glass p-7 rounded-[2rem] md:rounded-[3rem] h-[400px] md:h-[500px] animate-pulse bg-white/5 border border-white/10"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((repo, idx) => (
                <div 
                  key={repo.name} 
                  className="animate-in fade-in slide-in-from-bottom-12 duration-1000" 
                  style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'both' }}
                >
                  <ProjectCard repo={repo} />
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      <footer className="mt-40 md:mt-60 border-t border-white/5 pt-16 md:pt-32 pb-10 md:pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tighter uppercase">{PORTFOLIO_CONFIG.name}</h3>
            <p className="text-slate-400 max-w-md text-base md:text-lg leading-relaxed font-light">
              Leading the transition to autonomous, reliable AI. Building the tools that build the future. Available for collaboration on research-grade engineering projects.
            </p>
            <div className="flex gap-6 md:gap-8">
              {Object.entries(PORTFOLIO_CONFIG.socials).map(([key, url]) => (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-all hover:tracking-[0.5em]">
                  {key}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:items-end justify-between space-y-8 md:space-y-0">
            <div className="md:text-right">
              <span className="text-[9px] md:text-[10px] font-bold text-indigo-500 tracking-[0.4em] uppercase block mb-3 md:mb-4">Neural Interface Status</span>
              <span className="text-white font-mono text-[10px] md:text-xs glass px-4 py-2 rounded-full border border-white/5">v3.1.0-RESEARCH-EDITION</span>
            </div>
            <p className="text-[9px] md:text-[10px] text-slate-700 font-mono uppercase tracking-widest text-center md:text-right">
              Built with precision by {PORTFOLIO_CONFIG.name}. No standard was left unchallenged.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
