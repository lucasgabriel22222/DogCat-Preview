import { useState } from 'react';
import { SERVICES, POPULAR_BRANDS, STORE_CONFIG } from '../data/storeData';
import { Truck, ShoppingBag, Scale, Bone, HeartPulse, Sparkles, MessageCircle, Check, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'delivery' | 'food' | 'care'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck':
        return <Truck className="w-5 h-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'Scale':
        return <Scale className="w-5 h-5" />;
      case 'Bone':
        return <Bone className="w-5 h-5" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const filteredServices = SERVICES.filter(service => {
    if (selectedFilter === 'delivery') return service.id === 'disk-entrega';
    if (selectedFilter === 'food') return ['racoes-fechadas', 'racao-granel', 'petiscos-saches'].includes(service.id);
    if (selectedFilter === 'care') return ['farmacia-basica', 'orientacao-nutricional'].includes(service.id);
    return true;
  });

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-slate-50/60 border-t border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
              <span>Produtos & Serviços DogCat</span>
            </div>
            <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tudo o que seu cão e gato precisam, com atendimento que você confia
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Da ração diária aos cuidados preventivos e tele-entrega expressa no Conjunto Águias e toda Arapongas.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Todos os Serviços' },
              { id: 'food', label: 'Rações & Petiscos' },
              { id: 'delivery', label: 'Disk Ração' },
              { id: 'care', label: 'Higiene & Orientação' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedFilter === f.id
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Container with Badge */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-900 text-xs font-extrabold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                  <span className="text-emerald-700">{getIcon(service.iconName)}</span>
                  <span>{service.badge}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <a
                  href={`https://wa.me/${STORE_CONFIG.phoneRaw}?text=${encodeURIComponent(
                    `Olá DogCat Rações! Gostaria de saber mais sobre "${service.title}" para o meu pet em Arapongas.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all group-hover:bg-emerald-600 group-hover:text-white"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pedir ou Consultar via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Showcase Strip */}
        <div className="mt-14 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="text-center max-w-lg mx-auto mb-6">
            <h4 className="text-base font-bold text-slate-900">
              Marcas Líderes de Mercado em Nosso Estoque
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Trabalhamos com fornecedores confiáveis e fórmulas que promovem longevidade e pelagem sedosa
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {POPULAR_BRANDS.map((b, idx) => (
              <div
                key={idx}
                className="px-3.5 py-2 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 rounded-xl transition-colors text-center"
              >
                <p className="text-xs sm:text-sm font-extrabold text-slate-800">
                  {b.name}
                </p>
                <span className="text-[10px] text-emerald-700 font-semibold uppercase tracking-wider block">
                  {b.category}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href={`https://wa.me/${STORE_CONFIG.phoneRaw}?text=${encodeURIComponent(
                "Olá! Vocês têm a marca que meu pet costuma comer? Gostaria de verificar a disponibilidade."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
            >
              <span>Não encontrou sua marca favorita? Pergunte-nos agora pelo WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
