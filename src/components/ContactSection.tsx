import React, { useState } from 'react';
import { Send, Phone, Mail, Copy, Check, MessageCircle, User } from 'lucide-react';
import { CONTACT_DATA, COMPANY_INFO } from '../data';
import { GeometricOrnament } from './GeometricOrnament';

export const ContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  return (
    <section id="contacts" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden border-t-4 border-emerald-500">
      
      {/* Background Decorative Flares */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 font-bold text-xs uppercase tracking-wider">
            <div className="w-2 h-2 bg-emerald-400 rotate-45"></div>
            <span>СВЯЗЬ И ЗАКАЗ</span>
            <div className="w-2 h-2 bg-emerald-400 rotate-45"></div>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Свяжитесь с нами прямым контактом
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-medium">
            Обсудим вашу идею, рассчитаем стоимость и предложим оптимальное решение в течение 15 минут.
          </p>

          <GeometricOrnament variant="divider" />
        </div>

        {/* Main Contact Card Container (Highlighting Red and Green) */}
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border-2 border-slate-800 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          
          {/* Top Border Accent */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-red-600 via-white to-emerald-500"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left Column: Direct Telegram & Person Info */}
            <div className="space-y-6">
              
              {/* Contact Person Badge */}
              <div className="inline-flex items-center space-x-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-white shadow-md rotate-45 shrink-0">
                  <User className="w-5 h-5 -rotate-45" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-bold uppercase tracking-wider">Контактное лицо</span>
                  <span className="font-display font-bold text-lg text-white">Алексей ({COMPANY_INFO.name})</span>
                </div>
              </div>

              {/* Main Call To Action Button (Write to Telegram) */}
              <a
                href={CONTACT_DATA.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-3 px-8 py-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-1 active:translate-y-0 border border-emerald-400/30 group"
              >
                <Send className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Написать в Telegram</span>
              </a>

              <a
                href={`https://wa.me/${CONTACT_DATA.phone.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-sm uppercase tracking-wider border border-slate-700 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>Написать MAX (+7 (903) 119-37-73)</span>
              </a>

            </div>

            {/* Right Column: Direct Phone & Email with 1-click Copy */}
            <div className="space-y-4 bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
              
              {/* Phone Block */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Телефон / MAX (+7 (903) 119-37-73)</span>
                    <a href={`tel:${CONTACT_DATA.phone}`} className="font-mono font-bold text-lg text-white hover:text-red-400 transition-colors">
                      {CONTACT_DATA.phoneFormatted}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(CONTACT_DATA.phone, 'phone')}
                  className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors relative"
                  title="Скопировать телефон"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email Block */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Электронная почта</span>
                    <a href={`mailto:${CONTACT_DATA.email}`} className="font-mono font-bold text-sm sm:text-base text-white hover:text-emerald-400 transition-colors">
                      {CONTACT_DATA.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(CONTACT_DATA.email, 'email')}
                  className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Скопировать Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Toast message status */}
              {(copiedPhone || copiedEmail) && (
                <div className="p-2.5 bg-emerald-950 border border-emerald-500/50 rounded-xl text-center text-xs font-bold text-emerald-300 animate-fadeIn">
                  ✓ {copiedPhone ? 'Номер телефона скопирован!' : 'Email скопирован в буфер обмена!'}
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
