import { useState, useEffect } from 'react';
import { STORE_CONFIG } from '../data/storeData';
import { MessageCircle, X, Send, Truck, ShoppingBag, Scale, PawPrint } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTeaser, setShowTeaser] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  // Auto show teaser after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTeaser(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const quickMessages = [
    {
      label: 'Pedir ração para entrega',
      icon: Truck,
      text: 'Olá DogCat Rações! Gostaria de fazer um pedido para entrega aqui em Arapongas.'
    },
    {
      label: 'Consultar preços e marcas',
      icon: ShoppingBag,
      text: 'Olá! Gostaria de consultar os preços e marcas de ração disponíveis.'
    },
    {
      label: 'Ração a granel fresquinha',
      icon: Scale,
      text: 'Olá! Gostaria de saber quais rações a granel vocês têm disponíveis hoje.'
    }
  ];

  return (
    <div id="floating-whatsapp-widget" className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Expanded Quick Chat Box */}
      {isExpanded && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-emerald-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <PawPrint className="w-5 h-5 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-700 rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">DogCat Rações</h4>
                <p className="text-[11px] text-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                  Online no WhatsApp • Arapongas
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-emerald-800 transition-colors"
              aria-label="Fechar janela"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-2xl rounded-tl-xs border border-slate-200 shadow-2xs text-xs text-slate-700 leading-relaxed">
              <p className="font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                <PawPrint className="w-3.5 h-3.5 text-emerald-700 inline" />
                <span>Olá! Seja bem-vindo à DogCat Rações</span>
              </p>
              <p>
                Como podemos ajudar seu pet hoje? Escolha uma opção rápida abaixo ou envie uma mensagem direta:
              </p>
            </div>

            {/* Quick message options */}
            <div className="space-y-1.5 pt-1">
              {quickMessages.map((qm, idx) => {
                const Icon = qm.icon;
                return (
                  <a
                    key={idx}
                    href={`https://wa.me/${STORE_CONFIG.phoneRaw}?text=${encodeURIComponent(qm.text)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-xs font-semibold text-slate-800 flex items-center justify-between group transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>{qm.label}</span>
                    </span>
                    <Send className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Direct Action */}
          <div className="p-3 bg-white border-t border-slate-100">
            <a
              href={STORE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Abrir Conversa Direta</span>
            </a>
          </div>

        </div>
      )}

      {/* Floating Teaser Bubble (when collapsed) */}
      {!isExpanded && showTeaser && (
        <div className="mb-2 relative bg-white text-slate-800 py-2 px-3.5 rounded-2xl shadow-xl border border-slate-200 text-xs font-bold flex items-center gap-2 max-w-[260px] sm:max-w-xs animate-in fade-in slide-in-from-bottom-2">
          <PawPrint className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>Olá! Peça ração pelo WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTeaser(false);
            }}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating WhatsApp Action Button */}
      <button
        id="floating-whatsapp-trigger-btn"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="Falar com a DogCat Rações pelo WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Pulsating Ping Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 group-hover:opacity-60 animate-ping -z-10" />

        {isExpanded ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-8 h-8 fill-white text-[#25D366]" />
        )}

        {/* Online Green Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full"></span>
      </button>

    </div>
  );
}
