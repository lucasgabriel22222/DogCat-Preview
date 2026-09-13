import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { STORE_CONFIG } from '../data/storeData';
import { MessageCircle, Truck, ShieldCheck, Sparkles, ChevronRight, CreditCard, PawPrint } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax subtle text & background effect
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  return (
    <section 
      id="inicio" 
      ref={containerRef}
      className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden py-16 sm:py-24 bg-slate-950 text-white"
    >
      {/* Background Image like modern standard websites */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div style={{ y: yBg }} className="w-full h-[120%] -mt-[10%]">
          <img
            src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=2000&q=85"
            alt="Cão e Gato bem nutridos e saudáveis - DogCat Rações Arapongas"
            className="w-full h-full object-cover object-center filter brightness-[0.85]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Gradient overlays for readability and focus */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Content Column */}
          <motion.div 
            style={{ opacity: opacityText }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-8 flex flex-col items-start text-left"
          >
            {/* Direct Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-bold mb-5 backdrop-blur-sm shadow-xs">
              <PawPrint className="w-3.5 h-3.5 text-emerald-400" />
              <span>DogCat Rações • Arapongas - PR</span>
            </div>

            {/* Clear Headline with Specific Value */}
            <h1 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] font-extrabold tracking-tight text-white leading-[1.12] mb-5">
              A nutrição certa para o seu pet, entregue no seu portão em{' '}
              <span className="text-amber-400 underline decoration-emerald-500 decoration-wavy decoration-2 underline-offset-4">
                Arapongas
              </span>.
            </h1>

            {/* Direct & Persuasive Subtitle */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              Na <strong>DogCat Rações</strong> você encontra rações Premium, Super Premium e a granel sempre novinhas, além de petiscos, antipulgas e remédios essenciais. Não carregue peso: peça no WhatsApp e receba em casa com agilidade!
            </p>

            {/* Above-the-fold WhatsApp CTA Section */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                id="hero-primary-whatsapp-btn"
                href={STORE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 text-base sm:text-lg font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] rounded-xl shadow-lg shadow-emerald-900/50 transition-all duration-200 text-center"
              >
                <div className="relative flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-300"></span>
                  </span>
                </div>
                <span>Pedir Ração pelo WhatsApp</span>
                <ChevronRight className="w-5 h-5 text-emerald-200 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                id="hero-secondary-simulator-btn"
                href="#simulador"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-bold text-white hover:text-emerald-300 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl backdrop-blur-sm transition-all text-center"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Simulador de Pedido</span>
              </a>
            </div>

            {/* Quick Guarantees with Icons (no emojis) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-5 border-t border-white/15 w-full text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-xs px-3 py-2 rounded-lg border border-white/5">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Disk Entrega</strong> rápida em Arapongas</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-xs px-3 py-2 rounded-lg border border-white/5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Rações Frescas</strong> sacos e granel</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-xs px-3 py-2 rounded-lg border border-white/5">
                <CreditCard className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Pix e Cartão</strong> no portão</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
