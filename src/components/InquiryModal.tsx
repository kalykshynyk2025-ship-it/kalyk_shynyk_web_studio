import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { CONTACT_DATA } from '../data';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [projectType, setProjectType] = useState<'mini-site' | 'landing' | 'mini-game' | 'quest'>('mini-site');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSendTelegram = (e: React.FormEvent) => {
    e.preventDefault();
    const typeLabel =
      projectType === 'mini-site'
        ? 'Мини-сайт / Визитка'
        : projectType === 'landing'
        ? 'Продающий Лендинг'
        : projectType === 'mini-game'
        ? 'Браузерная Мини-игра'
        : 'Сюжетный Онлайн-квест';

    const text = encodeURIComponent(
      `Здравствуйте! Хочу заказать проект в КАЛЫК ШЫНЫК.\n\nТип проекта: ${typeLabel}\nИмя: ${name || 'Клиент'}\nДетали: ${description || 'Запрос расчета сметы и сроков'}`
    );

    window.open(`https://t.me/+79031193773?text=${text}`, '_blank');
    setSentSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-red-600">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-3.5 h-3.5 bg-red-600 rotate-45"></div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Заказать проект
              </h3>
              <p className="text-xs text-red-400 font-semibold">КАЛЫК ШЫНЫК WEB STUDIO</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {sentSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="font-display font-bold text-xl text-slate-900">
              Заявка сформирована!
            </h4>
            <p className="text-sm text-slate-600">
              Вы были перенаправлены в Telegram для отправки сообщения. Наш специалист (Алексей) свяжется с вами в течение 15 минут.
            </p>
            <button
              onClick={() => {
                setSentSuccess(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-slate-900 text-white font-bold text-xs uppercase rounded-xl"
            >
              Закрыть окно
            </button>
          </div>
        ) : (
          <form onSubmit={handleSendTelegram} className="p-6 space-y-5">
            
            {/* Select Project Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Какой проект вам нужен?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'mini-site', label: 'Мини-сайт' },
                  { id: 'landing', label: 'Лендинг' },
                  { id: 'mini-game', label: 'Мини-игра' },
                  { id: 'quest', label: 'Онлайн-квест' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setProjectType(type.id as any)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                      projectType === type.id
                        ? 'bg-red-600 text-white border-red-700 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Name input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Ваше имя
              </label>
              <input
                type="text"
                placeholder="Как к вам обращаться?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm font-medium"
              />
            </div>

            {/* Description textarea */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Кратко о задаче или пожелания
              </label>
              <textarea
                rows={3}
                placeholder="Опишите сферу деятельности или желаемый результат..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm font-medium"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm uppercase tracking-wider shadow-md flex items-center justify-center space-x-2 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Отправить в Telegram (+7 903 119-37-73)</span>
            </button>

            <p className="text-[11px] text-slate-400 text-center">
              Контактное лицо: <strong className="text-slate-700">Алексей</strong>. Отвечаем мгновенно.
            </p>

          </form>
        )}

      </div>
    </div>
  );
};
