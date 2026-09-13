import { REVIEWS, STORE_CONFIG } from '../data/storeData';
import { Star, ExternalLink, MessageCircle, ShieldCheck, ThumbsUp } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="avaliacoes" className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Big Google Badge */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <span>Opinião de Quem Confia</span>
            </div>
            <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Avaliações reais de clientes no Google
            </h2>
            <p className="mt-2 text-slate-600 text-base max-w-xl">
              A satisfação dos tutores e a saúde dos pets de Arapongas são a nossa maior recompensa.
            </p>
          </div>

          {/* Google Score Summary Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm flex items-center gap-5 shrink-0">
            <div className="text-center pr-5 border-r border-slate-200">
              <span className="font-['Outfit',sans-serif] text-4xl sm:text-5xl font-black text-slate-900 leading-none block">
                4.7
              </span>
              <div className="flex text-amber-400 mt-1.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block mt-1">
                de 5.0 estrelas
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="font-bold text-sm sm:text-base text-slate-900">
                  Google Meu Negócio
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-xs text-slate-500 font-medium mb-3">
                Com base em <strong>{STORE_CONFIG.reviewsCount} avaliações</strong> verificadas
              </p>
              <a
                href={STORE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
              >
                <span>Ver perfil no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              id={`review-item-${rev.id}`}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Review Header: Stars + Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3 text-emerald-600" />
                    {rev.date}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{rev.name}</h4>
                  <p className="text-xs text-emerald-700 font-medium">
                    {rev.petType}
                  </p>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  {rev.neighborhood}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for Google Maps */}
        <div className="mt-10 text-center">
          <a
            href={STORE_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 shadow-xs transition-all"
          >
            <span>Já é cliente da DogCat Rações? Avalie nossa loja no Google</span>
            <ExternalLink className="w-4 h-4 text-emerald-700" />
          </a>
        </div>

      </div>
    </section>
  );
}
