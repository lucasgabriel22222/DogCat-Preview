import { useState } from 'react';
import { STORE_CONFIG } from '../data/storeData';
import { MapPin, Clock, Phone, MessageCircle, ExternalLink, Copy, Check, Navigation, AlertCircle } from 'lucide-react';

export default function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_CONFIG.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            <span>Venha nos Visitar ou Peça em Casa</span>
          </div>
          <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Onde encontrar a DogCat Rações
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Estamos no Conjunto Águias em Arapongas - PR. Retire pessoalmente ou peça pelo Disk Ração no WhatsApp!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF9F5] border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              
              {/* Address Box */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Endereço Completo</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {STORE_CONFIG.address}
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Arapongas - PR • CEP: {STORE_CONFIG.cep}
                </p>

                {/* Copy address button */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    id="copy-address-btn"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-xs font-bold text-slate-700 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Endereço Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copiar Endereço</span>
                      </>
                    )}
                  </button>

                  <a
                    id="open-maps-route-btn"
                    href={STORE_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Traçar Rota no GPS</span>
                  </a>
                </div>
              </div>

              {/* Working Hours Box */}
              <div className="pt-5 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>Horários de Funcionamento</span>
                </div>
                
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex justify-between items-center py-1 border-b border-slate-100">
                    <span className="font-semibold text-slate-900">Segunda a Sexta:</span>
                    <span className="text-slate-700">08:00 às 18:30</span>
                  </li>
                  <li className="flex justify-between items-center py-1 border-b border-slate-100">
                    <span className="font-semibold text-slate-900">Sábado:</span>
                    <span className="text-slate-700">08:00 às 13:00</span>
                  </li>
                  <li className="flex justify-between items-center py-1 text-slate-500">
                    <span>Domingo e Feriados:</span>
                    <span className="text-xs italic">Plantão WhatsApp</span>
                  </li>
                </ul>
              </div>

              {/* Delivery Zone Notice */}
              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200/80 text-xs text-emerald-900 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <p>
                  <strong>Disk Ração em Arapongas:</strong> Atendemos o Conjunto Águias e diversos bairros. Chame no WhatsApp para consultar o tempo estimado de entrega no seu endereço!
                </p>
              </div>

            </div>

            {/* Direct Contact CTAs */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <a
                id="location-whatsapp-btn"
                href={STORE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp: {STORE_CONFIG.phoneDisplay}</span>
              </a>
              <a
                id="location-call-btn"
                href={`tel:${STORE_CONFIG.phoneRaw}`}
                className="py-3 px-4 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Ligar</span>
              </a>
            </div>

          </div>

          {/* Interactive Map Visual (7 cols) */}
          <div className="lg:col-span-7 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-sm relative min-h-[380px] sm:min-h-[460px] flex flex-col">
            
            {/* Top Bar for Map */}
            <div className="bg-white/95 backdrop-blur-xs px-4 py-3 border-b border-slate-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>DogCat Rações no Mapa de Arapongas</span>
              </div>
              <a
                href={STORE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
              >
                <span>Abrir Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Map Frame */}
            <div className="relative flex-1 w-full h-full min-h-[340px]">
              <iframe
                title="Mapa de localização da DogCat Rações no Conjunto Águias em Arapongas - PR"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14646.035345759187!2d-51.4391206!3d-23.4079822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecebc3501a3511%3A0x6d9f7831d68379ba!2sConj.%20%C3%81guias%2C%20Arapongas%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0"
              />

              {/* Floating Map Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-lg text-slate-800 pointer-events-auto">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="font-extrabold text-xs text-slate-900">DogCat Rações</span>
                </div>
                <p className="text-[11px] text-slate-600 mb-2 leading-tight">
                  Conj. Águias, Arapongas - PR (86703-862)
                </p>
                <a
                  href={STORE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 px-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Navegar até a Loja</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
