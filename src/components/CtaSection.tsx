import { STORE_CONFIG } from '../data/storeData';
import { MessageCircle, Phone, ArrowRight, ShieldCheck, Truck, Star, CreditCard } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="cta-final" className="py-16 sm:py-24 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Rating chip */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-700 text-amber-300 text-xs sm:text-sm font-bold mb-6">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-white">Nota 4.7 • 18 Avaliações no Google em Arapongas</span>
        </div>

        {/* Big Impact Copy */}
        <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-5 max-w-3xl mx-auto leading-tight">
          Não deixe a tigela do seu melhor amigo ficar vazia. Peça agora mesmo!
        </h2>

        <p className="text-emerald-100/90 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Sem filas, sem carregar peso e com a garantia de rações fresquinhas de marcas consagradas. Envie uma mensagem no WhatsApp da <strong>DogCat Rações</strong> e receba no conforto da sua casa em Arapongas.
        </p>

        {/* Dual High Conversion CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
          <a
            id="final-cta-whatsapp-btn"
            href={STORE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 font-extrabold text-base sm:text-lg rounded-2xl shadow-xl shadow-emerald-950/40 flex items-center justify-center gap-3 transition-all duration-200"
          >
            <MessageCircle className="w-6 h-6 fill-slate-950" />
            <span>Chamar no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            id="final-cta-call-btn"
            href={`tel:${STORE_CONFIG.phoneRaw}`}
            className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base rounded-2xl transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-amber-300" />
            <span>Ligar: {STORE_CONFIG.phoneDisplay}</span>
          </a>
        </div>

        {/* Reassurance Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-emerald-200/90 pt-8 border-t border-emerald-800/60 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-amber-400" />
            <span>Entrega rápida em Arapongas</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Rações seladas com garantia</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-emerald-400" />
            <span>Pix e cartões no portão</span>
          </div>
        </div>

      </div>
    </section>
  );
}
