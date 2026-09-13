import { DIFFERENTIALS, STORE_CONFIG } from '../data/storeData';
import { Truck, Star, Heart, MessageCircle, BadgePercent, MapPin, CheckCircle } from 'lucide-react';

export default function DiferenciaisSection() {
  const getDiffIcon = (iconName: string) => {
    switch (iconName) {
      case 'TruckFast':
        return <Truck className="w-6 h-6 text-emerald-600" />;
      case 'Star':
        return <Star className="w-6 h-6 text-amber-500 fill-amber-400" />;
      case 'PawPrint':
        return <Heart className="w-6 h-6 text-rose-500" />;
      case 'MessageCircleHeart':
        return <MessageCircle className="w-6 h-6 text-emerald-600" />;
      case 'BadgePercent':
        return <BadgePercent className="w-6 h-6 text-indigo-600" />;
      case 'MapPinCheck':
        return <MapPin className="w-6 h-6 text-emerald-700" />;
      default:
        return <CheckCircle className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="diferenciais" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Por que escolher a DogCat</span>
          </div>
          <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mais do que vender ração, cuidamos do bem-estar do seu pet
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Veja os motivos pelos quais dezenas de famílias de Arapongas confiam na DogCat Rações diariamente.
          </p>
        </div>

        {/* 6 Differential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DIFFERENTIALS.map((diff, index) => (
            <div
              key={index}
              id={`differential-card-${index}`}
              className="bg-[#FAF9F5] border border-slate-200/80 rounded-2xl p-6 sm:p-7 hover:bg-white hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-4">
                  {getDiffIcon(diff.icon)}
                </div>
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                  {diff.subtitle}
                </span>
                <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-900 mb-2.5">
                  {diff.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span>Diferencial DogCat</span>
                <span className="font-bold text-emerald-700">✓ Garantido</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Callout Box */}
        <div className="mt-12 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h3 className="font-['Outfit',sans-serif] text-xl sm:text-2xl font-bold text-amber-300 mb-1">
              Ficou sem ração em Arapongas?
            </h3>
            <p className="text-emerald-100 text-sm max-w-xl">
              Não deixe seu pet esperando. Chame nossa equipe no WhatsApp e agende sua entrega agora mesmo!
            </p>
          </div>
          <a
            id="differentials-fast-whatsapp-btn"
            href={STORE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold rounded-xl shadow-md text-sm sm:text-base flex items-center gap-2 transition-all active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950" />
            <span>Falar no WhatsApp ({STORE_CONFIG.phoneDisplay})</span>
          </a>
        </div>

      </div>
    </section>
  );
}
