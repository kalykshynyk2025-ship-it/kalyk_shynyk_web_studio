import React, { useState } from 'react';
import { Send, Phone, Menu, X, Sparkles } from 'lucide-react';
import { COMPANY_INFO, CONTACT_DATA } from '../data';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-red-600 rotate-45 rounded-xs transition-transform group-hover:rotate-90 duration-300 shadow-md"></div>
              <div className="absolute inset-1.5 bg-slate-900 rotate-45 rounded-xs"></div>
              <div className="absolute w-3 h-3 bg-emerald-500 rotate-45"></div>
            </div>
            <div>
              <span className="font-display font-black text-xl tracking-tight text-slate-900 block leading-none">
                {COMPANY_INFO.name}
              </span>
              <span className="text-[10px] font-bold text-red-600 tracking-wider uppercase block mt-1">
                WEB STUDIO & GAMIFICATION
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors">
              Услуги и Пример
            </a>
            <a href="#advantages" className="text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors">
              Преимущества
            </a>
            <a href="#faq" className="text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors">
              Вопросы
            </a>
            <a href="#contacts" className="text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors">
              Контакты
            </a>
          </nav>

          {/* Right Call To Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={CONTACT_DATA.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide uppercase transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>Telegram</span>
            </a>

            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wide uppercase transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Заказать проект</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onOpenInquiry}
              className="p-2 rounded-lg bg-red-600 text-white font-bold text-xs"
            >
              Заказ
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg font-semibold text-slate-800 hover:bg-slate-100"
          >
            Услуги и Пример
          </a>
          <a
            href="#advantages"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg font-semibold text-slate-800 hover:bg-slate-100"
          >
            Преимущества
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg font-semibold text-slate-800 hover:bg-slate-100"
          >
            Вопросы
          </a>
          <a
            href="#contacts"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg font-semibold text-slate-800 hover:bg-slate-100"
          >
            Контакты
          </a>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={CONTACT_DATA.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-3 bg-emerald-600 text-white font-bold text-sm rounded-lg shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Написать в Telegram</span>
            </a>
            <a
              href={`tel:${CONTACT_DATA.phone}`}
              className="flex items-center justify-center space-x-2 w-full py-3 bg-slate-900 text-white font-bold text-sm rounded-lg shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{CONTACT_DATA.phoneFormatted} (Алексей)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
