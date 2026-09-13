export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  petType?: string;
  neighborhood?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  iconName: 'ShoppingBag' | 'Truck' | 'Scale' | 'HeartPulse' | 'Sparkles' | 'Bone';
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const STORE_CONFIG = {
  name: "DogCat Rações",
  tagline: "A nutrição e o carinho que seu pet merece, sem sair de casa em Arapongas.",
  segment: "Loja de rações, petiscos e cuidados para pets",
  phone: "+55 43 99829-8662",
  phoneRaw: "5543998298662",
  phoneDisplay: "(43) 99829-8662",
  whatsappUrl: "https://wa.me/5543998298662?text=Ol%C3%A1%2C%20DogCat%20Ra%C3%A7%C3%B5es!%20Gostaria%20de%20fazer%20um%20pedido%20ou%20tirar%20uma%20d%C3%BAvida.",
  address: "Conj. Águias, Arapongas - PR",
  fullAddress: "Conj. Águias, Arapongas - PR, 86703-862, Brasil",
  cep: "86703-862",
  city: "Arapongas - PR",
  googleMapsUrl: "https://maps.app.goo.gl/yvRfXGNanosXRPVt8",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14646.035345759187!2d-51.4391206!3d-23.4079822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecebc3501a3511%3A0x6d9f7831d68379ba!2sConj.%20%C3%81guias%2C%20Arapongas%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr",
  rating: 4.7,
  reviewsCount: 18,
  workingHours: {
    weekdays: "Segunda a Sexta: 08:00 às 18:30",
    saturday: "Sábado: 08:00 às 13:00",
    sunday: "Domingo e Feriados: Fechado (Pedidos pelo WhatsApp para o próximo dia útil)"
  },
  deliveryBadge: "Disk Ração Arapongas • Entrega Rápida",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "disk-entrega",
    title: "Disk Ração & Entrega Rápida",
    badge: "Mais Praticidade",
    description: "Não carregue peso! Entregamos sacos de 1kg a 25kg no seu portão no Conjunto Águias e em toda a região de Arapongas com agilidade.",
    highlights: ["Entrega ágil no mesmo dia", "Sem esforço com sacos pesados", "Pagamento fácil no recebimento"],
    iconName: "Truck",
    image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "racoes-fechadas",
    title: "Rações Super Premium & Premium",
    badge: "Nutrição Completa",
    description: "Alimentos balanceados das marcas mais conceituadas do mercado para cães e gatos de todas as raças, portes e faixas etárias.",
    highlights: ["Marcas consagradas no mercado", "Fórmulas para pelos, digestão e castrados", "Validade longa e pacotes lacrados"],
    iconName: "ShoppingBag",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "racao-granel",
    title: "Ração a Granel com Frescor Diário",
    badge: "Economia Inteligente",
    description: "Pese na hora a quantidade exata que precisa! Mantemos estoque rotativo em recipientes selados e higienizados, garantindo crocância e aroma.",
    highlights: ["Compre a quantidade que preferir", "Rações sempre fresquinhas e crocantes", "Excelente custo-benefício para a rotina"],
    iconName: "Scale",
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "petiscos-saches",
    title: "Petiscos, Bifinhos & Sachês Úmidos",
    badge: "O Agrado Favorito",
    description: "Linha completa de sachês úmidos para hidratação de felinos e caninos, ossinhos mastigáveis, bifinhos macios e biscoitos crocantes.",
    highlights: ["Hidratação essencial para gatos", "Recompensas para adestramento", "Variedade de sabores irresistíveis"],
    iconName: "Bone",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "farmacia-basica",
    title: "Farmácia Pet & Higiene Básica",
    badge: "Saúde & Prevenção",
    description: "Antipulgas, carrapaticidas, vermífugos, shampoos antialérgicos, areias sanitárias e tapetes higiênicos para o bem-estar do seu lar.",
    highlights: ["Proteção contra pulgas e carrapatos", "Vermífugos das principais marcas", "Areias e tapetes de alta absorção"],
    iconName: "HeartPulse",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "orientacao-nutricional",
    title: "Consultoria Amiga de Nutrição",
    badge: "Atendimento Dedicado",
    description: "Tem dúvidas sobre qual ração escolher para seu filhote, idoso ou pet com paladar exigente? Apoiamos você com carinho e conhecimento.",
    highlights: ["Recomendação baseada no perfil do pet", "Dicas de transição alimentar", "Atendimento direto e sem complicação"],
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80"
  }
];

export const DIFFERENTIALS = [
  {
    title: "Entrega Ágil no seu Bairro",
    subtitle: "Conjunto Águias e Arapongas",
    description: "Acabou a ração de surpresa? Peça no WhatsApp e receba rapidamente sem parar o seu dia ou carregar peso no carro.",
    icon: "TruckFast"
  },
  {
    title: "Nota 4.7 no Google",
    subtitle: "Confiança comprovada",
    description: "18 avaliações de clientes reais que comprovam nosso compromisso com atendimento pontual, produtos de qualidade e honestidade.",
    icon: "Star"
  },
  {
    title: "Variedade para Cães & Gatos",
    subtitle: "Todas as idades e portes",
    description: "Do filhotinho ao pet sênior, temos opções standard, premium e super premium, além de rações a granel sempre com alto giro e crocância.",
    icon: "PawPrint"
  },
  {
    title: "Atendimento Humanizado e Prático",
    subtitle: "Fale direto pelo WhatsApp",
    description: "Sem robôs cansativos ou menus infinitos. Você conversa com quem entende de pet e resolve seu pedido em menos de 2 minutos.",
    icon: "MessageCircleHeart"
  },
  {
    title: "Preço Justo e Formas de Pagamento",
    subtitle: "Facilidade para você",
    description: "Aceitamos Pix, cartões de débito, crédito e dinheiro na entrega. Condições justas para manter seu amigo sempre bem alimentado.",
    icon: "BadgePercent"
  },
  {
    title: "Raízes em Arapongas",
    subtitle: "Comércio local dedicado",
    description: "Estamos fisicamente localizados no Conjunto Águias, valorizando nossa comunidade e tratando cada vizinho e pet como parte da família.",
    icon: "MapPinCheck"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "1",
    name: "Marcos Vinicius Silveira",
    rating: 5,
    date: "Avaliação no Google",
    petType: "Tutor de 2 cães (Golden e SRD)",
    neighborhood: "Arapongas - PR",
    comment: "Excelente atendimento! Sempre compro a ração dos meus cachorros na DogCat. A entrega aqui no Conjunto Águias é super rápida e o preço é bem justo. Recomendo de olhos fechados!"
  },
  {
    id: "2",
    name: "Camila Fernandes de Souza",
    rating: 5,
    date: "Avaliação no Google",
    petType: "Tutora de 3 gatinhos",
    neighborhood: "Arapongas - PR",
    comment: "Melhor loja de ração da região! O pessoal é muito atencioso pelo WhatsApp, me ajudaram a escolher a melhor ração castrados para meus gatos. A ração a granel é sempre fresquinha."
  },
  {
    id: "3",
    name: "Rodrigo Alcantara",
    rating: 5,
    date: "Avaliação no Google",
    petType: "Tutor de Pastor Alemão",
    neighborhood: "Arapongas - PR",
    comment: "Disk ração nota 10! Comprar o saco de 15kg e receber em casa sem precisar carregar peso no carro não tem preço. Chegou em menos de 40 minutos. Parabéns pela pontualidade."
  },
  {
    id: "4",
    name: "Patrícia Helena Mendes",
    rating: 4.8,
    date: "Avaliação no Google",
    petType: "Tutora de Shih Tzu",
    neighborhood: "Arapongas - PR",
    comment: "Sempre que preciso de sachês e vermífugo corro aqui. O atendimento é acolhedor, nota-se que gostam de bichos de verdade. Nota 4.7 no Google mais do que merecida!"
  }
];

export const POPULAR_BRANDS = [
  { name: "Premier Pet", category: "Super Premium" },
  { name: "Golden", category: "Premium Especial" },
  { name: "Special Dog", category: "Linha Completa" },
  { name: "Royal Canin", category: "Específica & Raças" },
  { name: "GranPlus", category: "Alta Digestibilidade" },
  { name: "Magnus", category: "Linha Tradicional" },
  { name: "Whiskas", category: "Especial Felinos" },
  { name: "Cat Chow", category: "Equilíbrio Felino" },
  { name: "Bravecto & Simparic", category: "Antipulgas & Carrapatos" }
];

export const FAQS: FaqItem[] = [
  {
    question: "Vocês fazem entrega de ração em Arapongas?",
    answer: "Sim! Trabalhamos com Disk Ração com entrega ágil no Conjunto Águias e diversos bairros de Arapongas. Basta nos mandar uma mensagem no WhatsApp informando a ração desejada e o endereço de entrega."
  },
  {
    question: "Como funciona a ração a granel da DogCat?",
    answer: "Nossas rações a granel ficam acondicionadas em recipientes fechados, protegidos do sol e da umidade, garantindo a crocância e o frescor das vitaminas. Você pode pedir a pesagem exata que preferir (por exemplo: 500g, 2kg, 5kg)."
  },
  {
    question: "Quais formas de pagamento são aceitas na entrega?",
    answer: "Aceitamos Pix, cartão de crédito, cartão de débito e dinheiro. Se precisar de troco, basta nos avisar no momento em que fizer o pedido pelo WhatsApp!"
  },
  {
    question: "Quais marcas de ração vocês costumam ter?",
    answer: "Trabalhamos com uma seleção ampla para cães e gatos, desde linhas Super Premium e Premium Especial (como Golden, Premier, GranPlus, Special Dog) até opções acessíveis do dia a dia e rações a granel com excelente custo-benefício."
  },
  {
    question: "Qual o horário de funcionamento da loja e das entregas?",
    answer: "Atendemos de Segunda a Sexta das 08:00 às 18:30 e aos Sábados das 08:00 às 13:00. Caso mande mensagem fora do horário comercial, responderemos assim que abrirmos com prioridade!"
  },
  {
    question: "Como faço para pedir agora?",
    answer: "É super simples: clique no botão verde de WhatsApp na tela ou salve nosso número (43) 99829-8662. Diga qual é o seu pet ou a ração habitual e nós confirmamos disponibilidade e fazemos o envio!"
  }
];
