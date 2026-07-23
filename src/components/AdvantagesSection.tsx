import React from 'react';
import { ADVANTAGES } from '../data';
import { Sparkles, Trophy, Zap, MessageSquare } from 'lucide-react';
import { GeometricOrnament } from './GeometricOrnament';

export const AdvantagesSection: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-red-500" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-emerald-500" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-red-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="advantages" className="py-20 bg-slate-900 text-white relative overflow-hidden bg-ornament-bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-emerald-500/30 text-emerald-400 font-bold text-xs uppercase tracking-wider">
            <div className="w-2 h-2 bg-emerald-500 rotate-45"></div>
            <span>ПОЧЕМУ КАЛЫК ШЫНЫК</span>
            <div className="w-2 h-2 bg-emerald-500 rotate-45"></div>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Формула идеального интерактивного веб-сайта
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-medium">
            Мы объединяем передовую разработку и вовлекающую геймификацию.
          </p>

          <GeometricOrnament variant="divider" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGES.map((adv, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-slate-800/90 border border-slate-700/80 hover:border-red-500/60 shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Diamond Icon Container */}
              <div className="w-12 h-12 bg-slate-900 rotate-45 rounded-lg flex items-center justify-center mb-6 border border-slate-700 shadow-md group-hover:rotate-90 transition-transform duration-500">
                <div className="-rotate-45 group-hover:rotate-[270deg] transition-transform duration-500">
                  {renderIcon(adv.icon)}
                </div>
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-red-400 transition-colors">
                {adv.title}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                {adv.description}
              </p>

              {/* Bottom Rhombus Accent */}
              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center space-x-1 text-[11px] font-mono text-emerald-400">
                <div className="w-1.5 h-1.5 bg-emerald-400 rotate-45"></div>
                <span>0{idx + 1} // STANDARD</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
