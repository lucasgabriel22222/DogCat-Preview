import { useState, useEffect } from 'react';
import { STORE_CONFIG } from '../data/storeData';
import { Phone, MessageCircle, Menu, X, PawPrint } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços & Rações', href: '#servicos' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Main Navigation */}
      <header 
        id="main-navigation" 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80' 
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              <PawPrint className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-['Outfit',sans-serif] text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 block leading-tight">
                DogCat <span className="text-emerald-700">Rações</span>
              </span>
              <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider block">
                Arapongas - PR • Disk Entrega
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-emerald-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-emerald-600 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Contact & WhatsApp Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-phone-call-btn"
              href={`tel:${STORE_CONFIG.phoneRaw}`}
              className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-emerald-800 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5 transition-colors"
              title="Ligar para DogCat Rações"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>{STORE_CONFIG.phoneDisplay}</span>
            </a>
            <a
              id="nav-whatsapp-cta-btn"
              href={STORE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 rounded-lg shadow-sm shadow-emerald-700/30 flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Pedir no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu de navegação"
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2 font-medium text-slate-700 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={STORE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center justify-center gap-2 shadow-sm text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chamar no WhatsApp ({STORE_CONFIG.phoneDisplay})</span>
              </a>
              <a
                href={`tel:${STORE_CONFIG.phoneRaw}`}
                className="w-full py-2 text-center text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span>Ligar Agora: {STORE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
