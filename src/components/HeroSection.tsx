import React from 'react';
import { ArrowDownRight, Send, Sparkles, Gamepad2, Layers, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, CONTACT_DATA } from '../data';
import { GeometricOrnament } from './GeometricOrnament';

interface HeroSectionProps {
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-12 pb-20 md:pt-20 md:pb-28 border-b-4 border-red-600 bg-ornament-pattern">
      {/* Decorative Gradient Flares */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-8 text-left space-y-6">
            
            {/* Top Badge with Geometric Rhombus */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider shadow-inner">
              <div className="w-2.5 h-2.5 bg-emerald-500 rotate-45"></div>
              <span>ВЕБ-СТУДИЯ & ИНТЕРАКТИВНЫЕ ПРОЕКТЫ</span>
              <div className="w-2.5 h-2.5 bg-red-500 rotate-45"></div>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-none">
              <span className="text-white block">{COMPANY_INFO.name}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-emerald-400 text-3xl sm:text-4xl md:text-5xl mt-3 block">
                Интерактивный веб-опыт
              </span>
            </h1>

            {/* Tagline requested by user */}
            <p className="text-slate-300 text-lg sm:text-xl font-medium max-w-2xl leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>

            {/* Key Features Quick List */}
            <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Мини-сайты & Визитки</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Продающие Лендинги</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Браузерные Мини-игры</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Сюжетные Квесты</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                <Layers className="w-5 h-5" />
                <span>Наши услуги</span>
                <ArrowDownRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href={CONTACT_DATA.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-1 active:translate-y-0 border border-emerald-400/30"
              >
                <Send className="w-5 h-5" />
                <span>Связаться в Telegram</span>
              </a>

              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm uppercase tracking-wider transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Быстрый расчет</span>
              </button>
            </div>

          </div>

          {/* Right Geometric Emblem & Visual Rhombus Ornament */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
            <div className="relative group p-6 rounded-3xl bg-slate-800/80 border-2 border-red-500/40 shadow-2xl backdrop-blur-sm max-w-sm w-full">
              
              {/* Corner Rhombus Accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-red-600 rotate-45"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-emerald-500 rotate-45"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-emerald-500 rotate-45"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-red-600 rotate-45"></div>

              {/* Central Ornament */}
              <div className="py-6 flex justify-center">
                <GeometricOrnament variant="rhombus-group" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-xl text-white">
                  КАЛЫК ШЫНЫК
                </h3>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  Национальные традиции вдохновения & стиль коренных народов России
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/80 flex justify-between items-center text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  Принимаем заказы
                </span>
                <span className="font-mono text-red-400 font-bold">Алексей: +7 903 119-37-73</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Diamond Border */}
      <div className="mt-12">
        <GeometricOrnament variant="banner" />
      </div>
    </section>
  );
};
