import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickOrderSimulator from './components/QuickOrderSimulator';
import ServicesSection from './components/ServicesSection';
import DiferenciaisSection from './components/DiferenciaisSection';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-slate-800 selection:bg-amber-400 selection:text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Bar and Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero com promessa clara e botão WhatsApp acima da dobra */}
        <Hero />

        {/* 2. Simulador Interativo de Pedido WhatsApp */}
        <QuickOrderSimulator />

        {/* 3. Seção de Serviços e Produtos */}
        <ServicesSection />

        {/* 4. Diferenciais Competitivos */}
        <DiferenciaisSection />

        {/* 5. Prova Social com Avaliações do Google (Nota 4.7, 18 avaliações) */}
        <ReviewsSection />

        {/* 6. Localização no Conj. Águias em Arapongas - PR com Mapa e Rotas */}
        <LocationSection />

        {/* 7. FAQ - Perguntas Frequentes */}
        <FaqSection />

        {/* 8. CTA Final de Alta Conversão */}
        <CtaSection />
      </main>

      {/* Rodapé com Informações Institucionais e Horários */}
      <Footer />

      {/* Botão de WhatsApp Flutuante com Balão de Atendimento */}
      <FloatingWhatsApp />
    </div>
  );
}
