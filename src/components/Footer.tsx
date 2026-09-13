import { STORE_CONFIG } from '../data/storeData';
import { MapPin, Phone, MessageCircle, Star, ExternalLink, Heart, PawPrint } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 text-xs sm:text-sm pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
                <PawPrint className="w-5 h-5 text-white" />
              </span>
              <span className="font-['Outfit',sans-serif] text-xl font-extrabold text-white">
                DogCat <span className="text-emerald-400">Rações</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Sua loja de ração, petiscos e cuidados essenciais no Conjunto Águias em Arapongas - PR. Disk ração com entrega rápida e atendimento direto pelo WhatsApp.
            </p>
            <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-white">Nota 4.7</span>
              <span className="text-slate-500">({STORE_CONFIG.reviewsCount} avaliações no Google)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-emerald-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-emerald-400 transition-colors">Produtos e Serviços</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-emerald-400 transition-colors">Simulador de Pedido</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-emerald-400 transition-colors">Nossos Diferenciais</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-emerald-400 transition-colors">Avaliações de Clientes</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-emerald-400 transition-colors">Onde Estamos</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4">
              Atendimento & Horários
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-300">
                <span className="font-semibold text-white block">Segunda a Sexta:</span>
                08:00 às 18:30
              </li>
              <li className="text-slate-300">
                <span className="font-semibold text-white block">Sábado:</span>
                08:00 às 13:00
              </li>
              <li className="text-slate-400 pt-1">
                <span className="text-emerald-400 font-bold block">WhatsApp:</span>
                {STORE_CONFIG.phoneDisplay}
              </li>
            </ul>
          </div>

          {/* Location & GPS */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4">
              Endereço Físico
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed mb-3">
              <MapPin className="w-4 h-4 text-emerald-400 inline mr-1" />
              {STORE_CONFIG.fullAddress}
            </p>
            <a
              href={STORE_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors"
            >
              <span>Ver no Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {STORE_CONFIG.name}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido com carinho para os pets de Arapongas</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </p>
        </div>

      </div>
    </footer>
  );
}
