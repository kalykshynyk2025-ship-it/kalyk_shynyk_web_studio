import React from 'react';

interface GeometricOrnamentProps {
  className?: string;
  variant?: 'banner' | 'corner' | 'rhombus-group' | 'divider';
}

export const GeometricOrnament: React.FC<GeometricOrnamentProps> = ({
  className = '',
  variant = 'rhombus-group',
}) => {
  if (variant === 'divider') {
    return (
      <div className={`flex items-center justify-center space-x-2 py-4 ${className}`}>
        <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-red-500"></div>
        <div className="w-3 h-3 bg-red-600 rotate-45 transform shadow-sm"></div>
        <div className="w-4 h-4 bg-slate-900 rotate-45 transform shadow-sm border border-red-500/30"></div>
        <div className="w-3 h-3 bg-emerald-600 rotate-45 transform shadow-sm"></div>
        <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-red-500"></div>
      </div>
    );
  }

  if (variant === 'corner') {
    return (
      <svg
        className={`w-24 h-24 pointer-events-none opacity-20 ${className}`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="50,0 100,50 50,100 0,50" fill="#DC2626" />
        <polygon points="50,15 85,50 50,85 15,50" fill="#0F172A" />
        <polygon points="50,30 70,50 50,70 30,50" fill="#16A34A" />
      </svg>
    );
  }

  if (variant === 'banner') {
    return (
      <div className={`overflow-hidden py-2 px-4 bg-slate-900 border-y-2 border-red-600 ${className}`}>
        <div className="flex items-center justify-around opacity-80 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-600 rotate-45"></div>
              <div className="w-3 h-3 bg-emerald-500 rotate-45 border border-white/20"></div>
              <div className="w-2 h-2 bg-white rotate-45"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default rhombus group
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="relative w-28 h-28 flex items-center justify-center">
        {/* Outer Red Diamond */}
        <div className="absolute inset-0 bg-red-600 rotate-45 rounded-sm shadow-lg border-2 border-red-700/50 transition-transform duration-500 hover:rotate-90"></div>
        {/* Middle Black Diamond */}
        <div className="absolute inset-3 bg-slate-900 rotate-45 rounded-sm border border-red-400/30 flex items-center justify-center"></div>
        {/* Inner Emerald Diamond */}
        <div className="absolute inset-7 bg-emerald-600 rotate-45 rounded-sm shadow-inner"></div>
        {/* Center Accent */}
        <div className="absolute w-3 h-3 bg-white rotate-45 shadow-sm"></div>
      </div>
    </div>
  );
};
