import React from 'react';
import { COMPANY_INFO, CONTACT_DATA } from '../data';
import { GeometricOrnament } from './GeometricOrnament';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-600 rotate-45 rounded-xs flex items-center justify-center text-white">
              <div className="w-2.5 h-2.5 bg-emerald-400 rotate-45"></div>
            </div>
            <div>
              <span className="font-display font-black text-lg text-white">
                {COMPANY_INFO.name}
              </span>
              <p className="text-xs text-slate-400">
                Создаем интерактивный веб-опыт: от визиток до игр и квестов
              </p>
            </div>
          </div>

          {/* Center Ornament Accent */}
          <GeometricOrnament variant="rhombus-group" className="scale-75 hidden md:flex" />

          {/* Contact Person & Year */}
          <div className="text-center md:text-right text-xs space-y-1">
            <p className="font-mono text-slate-300">
              Контактное лицо: <strong className="text-red-400">Алексей</strong> ({CONTACT_DATA.phoneFormatted})
            </p>
            <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Все права защищены.</p>
          </div>

        </div>

      </div>
    </footer>
  );
};
