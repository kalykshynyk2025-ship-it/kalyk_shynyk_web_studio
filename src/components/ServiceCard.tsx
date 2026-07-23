import React from 'react';
import { ExternalLink, Eye, Smartphone, Rocket, Gamepad2, Compass, Check } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  item: ServiceItem;
  onPreview: (item: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ item, onPreview }) => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      default:
        return <Rocket className="w-6 h-6" />;
    }
  };

  const getBadgeStyle = (color: string) => {
    switch (color) {
      case 'red':
        return 'bg-red-600 text-white border-red-700';
      case 'green':
        return 'bg-emerald-600 text-white border-emerald-700';
      case 'black':
        return 'bg-slate-900 text-white border-slate-950';
      default:
        return 'bg-red-600 text-white border-red-700';
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl border-2 border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
      
      {/* Top Geometric Rhombus Accent Bar */}
      <div className="h-2 w-full bg-gradient-to-r from-red-600 via-slate-900 to-emerald-600"></div>

      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        
        {/* Header Row: Icon + Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="relative">
            {/* Diamond rotated icon background */}
            <div className="w-12 h-12 bg-slate-900 rotate-45 rounded-md flex items-center justify-center text-white transition-transform group-hover:rotate-90 duration-500 shadow-md">
              <div className="-rotate-45 group-hover:rotate-[270deg] transition-transform duration-500 text-red-500">
                {renderIcon(item.iconName)}
              </div>
            </div>
          </div>

          <span
            className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider border shadow-xs ${getBadgeStyle(
              item.badgeColor
            )}`}
          >
            {item.badge}
          </span>
        </div>

        {/* Card Title */}
        <h3 className="font-display font-bold text-2xl text-slate-900 group-hover:text-red-600 transition-colors mb-3">
          {item.title}
        </h3>

        {/* Card Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
          {item.description}
        </p>

        {/* Features Bullet List */}
        <ul className="space-y-2 mb-8 mt-auto pt-4 border-t border-slate-100">
          {item.features.map((feat, idx) => (
            <li key={idx} className="flex items-center text-xs font-semibold text-slate-700">
              <div className="w-2 h-2 bg-emerald-500 rotate-45 mr-2.5 shrink-0"></div>
              <span>{feat}</span>
            </li>
          ))}
        </ul>

      </div>

      {/* Footer Action Buttons */}
      <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
        
        {/* Direct Link requested by prompt */}
        <a
          href={item.exampleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-xs hover:shadow-md active:scale-98"
        >
          <span>Посмотреть пример</span>
          <ExternalLink className="w-4 h-4 ml-0.5" />
        </a>

        {/* Interactive In-App Frame Preview */}
        <button
          onClick={() => onPreview(item)}
          className="inline-flex items-center justify-center space-x-1.5 px-3.5 py-3 rounded-xl bg-white hover:bg-slate-200/80 text-slate-800 border border-slate-300 font-bold text-xs uppercase tracking-wider transition-colors"
          title="Открыть предпросмотр в модальном окне"
        >
          <Eye className="w-4 h-4 text-emerald-600" />
          <span className="hidden sm:inline">Демо</span>
        </button>

      </div>
    </div>
  );
};
