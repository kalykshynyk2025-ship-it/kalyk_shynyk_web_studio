import React from 'react';
import { X, ExternalLink, ShieldCheck, RefreshCw } from 'lucide-react';
import { ServiceItem } from '../types';

interface InteractiveModalProps {
  item: ServiceItem | null;
  onClose: () => void;
}

export const InteractiveModal: React.FC<InteractiveModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[90vh] max-h-[850px] border-2 border-slate-800">
        
        {/* Modal Top Bar */}
        <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-3.5 h-3.5 bg-red-600 rotate-45 shrink-0"></div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg leading-tight text-white">
                {item.title} — Живой предпросмотр
              </h3>
              <p className="text-xs text-slate-400 truncate max-w-xs sm:max-w-md">
                {item.exampleUrl}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={item.exampleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Открыть в новой вкладке</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Sub-bar notice */}
        <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Демонстрационный интерактивный режим</span>
          </div>
          <span className="font-semibold text-red-600">КАЛЫК ШЫНЫК WEB STUDIO</span>
        </div>

        {/* Iframe Content */}
        <div className="flex-1 bg-slate-900 relative overflow-hidden">
          <iframe
            src={item.exampleUrl}
            title={item.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        </div>

        {/* Footer info bar */}
        <div className="bg-slate-900 text-slate-300 px-5 py-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span>Хотите аналогичный проект под ваш бренд?</span>
          <a
            href={item.exampleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-emerald-400 hover:underline inline-flex items-center gap-1"
          >
            Перейти на сайт {item.title} &rarr;
          </a>
        </div>

      </div>
    </div>
  );
};
