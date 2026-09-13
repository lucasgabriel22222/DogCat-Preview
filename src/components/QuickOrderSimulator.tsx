import { useState } from 'react';
import { STORE_CONFIG } from '../data/storeData';
import { 
  MessageCircle, 
  Sparkles, 
  Check, 
  Send, 
  AlertCircle, 
  Dog, 
  Cat, 
  Bird, 
  Fish, 
  Rabbit, 
  PawPrint, 
  ClipboardList, 
  ChevronDown 
} from 'lucide-react';

export type PetType = 'cao' | 'gato' | 'passaro' | 'peixe' | 'roedor' | 'outro';

interface PetOption {
  id: PetType;
  label: string;
  description: string;
}

const PET_OPTIONS: PetOption[] = [
  { id: 'cao', label: 'Cachorro (Cão)', description: 'Porte pequeno, médio ou grande' },
  { id: 'gato', label: 'Gato (Felino)', description: 'Filhotes, adultos ou castrados' },
  { id: 'passaro', label: 'Pássaro / Ave', description: 'Calopsita, canário, periquito, etc.' },
  { id: 'peixe', label: 'Peixe / Aquário', description: 'Água doce, ornamental, ciclídeos' },
  { id: 'roedor', label: 'Roedor / Pequenos Pets', description: 'Hamster, porquinho-da-índia, coelho' },
  { id: 'outro', label: 'Outro Animal de Estimação', description: 'Outras espécies e necessidades' },
];

export default function QuickOrderSimulator() {
  const [petType, setPetType] = useState<PetType>('cao');
  const [lifeStage, setLifeStage] = useState<string>('adulto');
  const [category, setCategory] = useState<string>('super_premium');
  const [format, setFormat] = useState<string>('saco_fechado');
  const [includeTreat, setIncludeTreat] = useState<boolean>(false);
  const [includeFleaProtection, setIncludeFleaProtection] = useState<boolean>(false);
  const [neighborhood, setNeighborhood] = useState<string>('Conjunto Águias');
  const [notes, setNotes] = useState<string>('');

  const getPetIcon = (type: PetType, className = "w-5 h-5") => {
    switch (type) {
      case 'cao':
        return <Dog className={className} />;
      case 'gato':
        return <Cat className={className} />;
      case 'passaro':
        return <Bird className={className} />;
      case 'peixe':
        return <Fish className={className} />;
      case 'roedor':
        return <Rabbit className={className} />;
      case 'outro':
        return <PawPrint className={className} />;
    }
  };

  const getStagesForPet = () => {
    if (petType === 'cao' || petType === 'gato') {
      return [
        { id: 'filhote', label: 'Filhote' },
        { id: 'adulto', label: 'Adulto' },
        { id: 'castrado', label: 'Castrado' },
        { id: 'senior', label: 'Sênior (7+)' },
      ];
    }
    if (petType === 'passaro') {
      return [
        { id: 'mistura_sementes', label: 'Mistura de Sementes' },
        { id: 'extrusada', label: 'Ração Extrusada' },
        { id: 'filhote_papinha', label: 'Papinha / Filhote' },
        { id: 'vitaminada', label: 'Mistura com Vitaminas' },
      ];
    }
    if (petType === 'peixe') {
      return [
        { id: 'flocos', label: 'Alimento em Flocos' },
        { id: 'granulos', label: 'Grânulos / Sticks' },
        { id: 'peixe_fundo', label: 'Peixes de Fundo' },
        { id: 'ciclideos', label: 'Ciclídeos & Específicas' },
      ];
    }
    if (petType === 'roedor') {
      return [
        { id: 'extrusada', label: 'Ração Prensada/Extrusada' },
        { id: 'feno_alfafa', label: 'Feno & Alfafa Verde' },
        { id: 'mix_graos', label: 'Mix de Grãos Selecionados' },
        { id: 'petiscos', label: 'Blocos & Petiscos' },
      ];
    }
    return [
      { id: 'padrao', label: 'Nutrição Diária' },
      { id: 'granel', label: 'Por Quilo / Granel' },
      { id: 'especial', label: 'Específica' },
      { id: 'cuidados', label: 'Acessórios & Cuidados' },
    ];
  };

  const getStageLabel = () => {
    const stages = getStagesForPet();
    const found = stages.find(s => s.id === lifeStage);
    return found ? found.label : lifeStage;
  };

  const currentPetObj = PET_OPTIONS.find(p => p.id === petType) || PET_OPTIONS[0];

  const buildWhatsAppMessage = () => {
    const petLabel = currentPetObj.label;
    const stageLabel = getStageLabel();

    let categoryLabel = 'Super Premium';
    if (category === 'premium_especial') categoryLabel = 'Premium Especial';
    if (category === 'granel') categoryLabel = 'Ração a Granel (pesada na hora)';
    if (category === 'economica') categoryLabel = 'Econômica do Dia a Dia';
    if (category === 'medicamentosa') categoryLabel = 'Específica / Cuidados Especiais';

    let formatLabel = 'Saco Grande Fechado (10kg a 20kg)';
    if (format === 'pacote_pequeno') formatLabel = 'Pacote Menor (1kg a 3kg)';
    if (format === 'granel_peso') formatLabel = 'Por Quilo / Granel';

    const items: string[] = [];
    items.push(`*Pet:* ${petLabel} (${stageLabel})`);
    items.push(`*Linha / Categoria:* ${categoryLabel}`);
    items.push(`*Formato:* ${formatLabel}`);
    
    if (includeTreat) {
      items.push(`*Extra:* Adicionar Sachê, Petisco ou Mimo`);
    }
    if (includeFleaProtection) {
      items.push(`*Saúde & Higiene:* Cotação de Antipulgas / Vermífugo / Cuidados`);
    }

    if (neighborhood.trim()) {
      items.push(`*Local de Entrega:* ${neighborhood} - Arapongas`);
    }

    if (notes.trim()) {
      items.push(`*Observação / Marca:* ${notes}`);
    }

    const text = `Olá, equipe DogCat Rações!\nMontei uma simulação de pedido pelo site:\n\n${items.join('\n')}\n\nPoderiam me informar as marcas disponíveis e o valor com entrega para Arapongas? Obrigado!`;
    return encodeURIComponent(text);
  };

  const whatsappHref = `https://wa.me/${STORE_CONFIG.phoneRaw}?text=${buildWhatsAppMessage()}`;

  return (
    <section id="simulador" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Simulador & Pedido Express</span>
          </div>
          <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Monte o pedido ideal para o seu pet em segundos
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Escolha as preferências do seu amigo e envie diretamente para o WhatsApp da DogCat. Nós conferimos o estoque e calculamos sua entrega em Arapongas!
          </p>
        </div>

        {/* Interactive Builder Container */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Form Inputs (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Pet Type Dropdown */}
              <div>
                <label 
                  htmlFor="pet-type-selector" 
                  className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center justify-between"
                >
                  <span>1. Qual é o seu pet?</span>
                  <span className="text-emerald-700 font-semibold lowercase">Selecione na lista abaixo</span>
                </label>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-700">
                    {getPetIcon(petType, "w-5 h-5")}
                  </div>
                  
                  <select
                    id="pet-type-selector"
                    value={petType}
                    onChange={(e) => {
                      const newType = e.target.value as PetType;
                      setPetType(newType);
                      // Reset lifeStage to default for that pet
                      if (newType === 'cao' || newType === 'gato') {
                        setLifeStage('adulto');
                      } else if (newType === 'passaro') {
                        setLifeStage('mistura_sementes');
                      } else if (newType === 'peixe') {
                        setLifeStage('flocos');
                      } else if (newType === 'roedor') {
                        setLifeStage('extrusada');
                      } else {
                        setLifeStage('padrao');
                      }
                    }}
                    className="w-full pl-11 pr-10 py-3.5 bg-white border-2 border-slate-300 hover:border-emerald-500 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 rounded-xl font-bold text-slate-800 text-sm sm:text-base appearance-none cursor-pointer transition-all shadow-2xs"
                  >
                    {PET_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id} className="py-2 text-slate-800">
                        {opt.label} — {opt.description}
                      </option>
                    ))}
                  </select>

                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-500">
                    <ChevronDown className="w-5 h-5 text-emerald-700" />
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                  <span className="font-semibold text-emerald-800">Pet selecionado:</span>
                  <span>{currentPetObj.label} ({currentPetObj.description})</span>
                </div>
              </div>

              {/* Step 2: Life Stage / Condition */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  2. Fase, Dieta ou Condição
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {getStagesForPet().map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setLifeStage(st.id)}
                      className={`py-2 px-3 text-xs sm:text-sm rounded-lg font-semibold border transition-all text-center ${
                        lifeStage === st.id
                          ? 'border-emerald-600 bg-emerald-600 text-white shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {st.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Category */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  3. Categoria de Ração
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'super_premium', title: 'Super Premium', desc: 'Máxima digestibilidade e nutrientes nobres' },
                    { id: 'premium_especial', title: 'Premium Especial', desc: 'Excelente custo-benefício e sabor' },
                    { id: 'granel', title: 'A Granel (por quilo)', desc: 'Pesada na hora, fresquinha e econômica' },
                    { id: 'medicamentosa', title: 'Específica / Cuidados', desc: 'Sensibilidade alimentar, pelagem, urinária' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCategory(cat.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        category === cat.id
                          ? 'border-emerald-600 bg-emerald-50/80 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-slate-900">{cat.title}</span>
                        {category === cat.id && <Check className="w-4 h-4 text-emerald-700" />}
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{cat.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Format & Extras */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  4. Tamanho ou Embalagem
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'saco_fechado', label: 'Saco Grande (10 a 20kg)' },
                    { id: 'pacote_pequeno', label: 'Pacote 1 a 3kg' },
                    { id: 'granel_peso', label: 'Por Quilo (Granel)' },
                  ].map((fmt) => (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => setFormat(fmt.id)}
                      className={`p-2.5 rounded-lg text-xs font-semibold border text-center transition-all ${
                        format === fmt.id
                          ? 'border-emerald-600 bg-emerald-600 text-white'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {fmt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extras Toggles */}
              <div className="pt-2 border-t border-slate-200/70 space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                  Deseja adicionar complementos?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <label className="flex items-center gap-2.5 p-2.5 bg-white border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                    <input
                      type="checkbox"
                      checked={includeTreat}
                      onChange={(e) => setIncludeTreat(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-xs font-medium text-slate-700">Adicionar Sachê úmido / Petisco</span>
                  </label>
                  <label className="flex items-center gap-2.5 p-2.5 bg-white border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                    <input
                      type="checkbox"
                      checked={includeFleaProtection}
                      onChange={(e) => setIncludeFleaProtection(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-xs font-medium text-slate-700">Cotar Antipulgas / Vermífugo</span>
                  </label>
                </div>
              </div>

              {/* Neighborhood and notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Bairro em Arapongas
                  </label>
                  <input
                    type="text"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    placeholder="Ex: Conj. Águias, Centro, etc."
                    className="w-full text-xs sm:text-sm px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Marca favorita ou peso (opcional)
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ex: Golden, Premier, 15kg..."
                    className="w-full text-xs sm:text-sm px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

            </div>

            {/* Live WhatsApp Summary Card (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-md">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                      <ClipboardList className="w-4 h-4 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Resumo do Pedido</h4>
                      <p className="text-[11px] text-slate-500">Pronto para envio no WhatsApp</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
                    Arapongas - PR
                  </span>
                </div>

                {/* Structured Summary Items */}
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-6 bg-slate-50/70 p-3.5 rounded-xl border border-slate-100">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Tipo de Pet:</span>
                    <span className="font-bold text-slate-900 inline-flex items-center gap-1.5">
                      {getPetIcon(petType, "w-4 h-4 text-emerald-700")}
                      <span>{currentPetObj.label.split(' ')[0]} ({getStageLabel()})</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Categoria:</span>
                    <span className="font-semibold text-emerald-800 capitalize">
                      {category.replace('_', ' ')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Embalagem:</span>
                    <span className="font-semibold text-slate-800">
                      {format === 'saco_fechado' ? 'Saco Grande Fechado' : format === 'pacote_pequeno' ? 'Pacote Menor' : 'A Granel'}
                    </span>
                  </div>
                  {includeTreat && (
                    <div className="flex justify-between items-center text-amber-900 font-medium">
                      <span>Complemento:</span>
                      <span>+ Sachê / Petisco</span>
                    </div>
                  )}
                  {includeFleaProtection && (
                    <div className="flex justify-between items-center text-emerald-800 font-medium">
                      <span>Saúde:</span>
                      <span>+ Antipulgas/Vermífugo</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center pt-2 border-t border-slate-200 text-slate-600">
                    <span>Entrega:</span>
                    <span className="font-semibold text-slate-900">{neighborhood || 'Arapongas'}</span>
                  </div>
                </div>

                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start gap-2.5 text-xs text-emerald-900 mb-4">
                  <AlertCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <p>
                    Ao clicar no botão, seu WhatsApp abrirá com essa mensagem pré-montada para a <strong>DogCat Rações</strong>. Nós respondemos informando marcas disponíveis e horário de entrega!
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  id="simulator-send-whatsapp-btn"
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-lg shadow-emerald-700/20 flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] text-sm sm:text-base text-center"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Enviar Pedido pelo WhatsApp</span>
                  <Send className="w-4 h-4 opacity-80" />
                </a>

                <p className="text-[11px] text-center text-slate-500 mt-2 font-medium">
                  Atendimento direto no WhatsApp • (43) 99829-8662
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
