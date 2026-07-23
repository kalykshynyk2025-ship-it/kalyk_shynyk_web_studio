import React from 'react';
import { SERVICES_DATA } from '../data';
import { ServiceCard } from './ServiceCard';
import { ServiceItem } from '../types';
import { GeometricOrnament } from './GeometricOrnament';

interface ServicesGridProps {
  onPreview: (item: ServiceItem) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onPreview }) => {
  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      
      {/* Background Subtle Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-100 text-red-700 font-bold text-xs uppercase tracking-wider">
            <div className="w-2 h-2 bg-red-600 rotate-45"></div>
            <span>ПОРТФОЛИО И УСЛУГИ</span>
            <div className="w-2 h-2 bg-red-600 rotate-45"></div>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Интерактивные цифровые решения
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium">
            От экспресс веб-визиток до сложных геймифицированных квестов. Нажмите «Посмотреть пример», чтобы оценить готовые живые проекты.
          </p>

          <GeometricOrnament variant="divider" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES_DATA.map((item) => (
            <ServiceCard key={item.id} item={item} onPreview={onPreview} />
          ))}
        </div>

      </div>
    </section>
  );
};
