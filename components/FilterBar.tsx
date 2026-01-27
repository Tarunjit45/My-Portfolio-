
import React from 'react';
import { Category } from '../types';
import { PORTFOLIO_CONFIG } from '../constants';

interface FilterBarProps {
  categories: Category[];
  activeCategory: Category;
  onSelect: (category: Category) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ categories, activeCategory, onSelect }) => {
  const { primaryColor } = PORTFOLIO_CONFIG;

  const colorClasses: Record<string, string> = {
    indigo: 'bg-indigo-500/20 border-indigo-500/50 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.2)]',
    emerald: 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]',
    cyan: 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]',
    rose: 'bg-rose-500/20 border-rose-500/50 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.2)]',
    amber: 'bg-amber-500/20 border-amber-500/50 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]',
    blue: 'bg-blue-500/20 border-blue-500/50 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]',
  };

  const activeClass = colorClasses[primaryColor] || colorClasses.indigo;

  return (
    <div className="w-full overflow-x-auto no-scrollbar mb-12 md:mb-16">
      <div className="flex justify-start md:justify-center gap-2 md:gap-3 px-6 md:px-4 min-w-max md:min-w-0 mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 border whitespace-nowrap ${
              activeCategory === cat
                ? activeClass
                : 'bg-white/5 border-white/10 text-slate-500 hover:bg-white/10 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
