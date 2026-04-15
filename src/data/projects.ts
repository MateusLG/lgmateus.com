export interface FeaturedProject {
  name: string;
  desc: string;
  url: string | null;
  demo: string | null;
  stack: string[];
  badge: string;
  image?: string;
}

export interface OtherProject {
  name: string;
  desc: string;
  url: string;
  stack: string[];
}

export const featured: FeaturedProject[] = [
  {
    name: "Sistema de Ativos — Embratur",
    desc: "Sistema interno de gerenciamento de patrimônio e colaboradores da Embratur com +1.000 ativos cadastrados. Permite cadastrar e atribuir ativos ao sistema ou a colaboradores usando o patrimônio oficial da instituição.",
    url: null,
    demo: null,
    stack: ["Python", "MySQL", "Docker", "SMTP"],
    badge: "Embratur",
  },
  {
    name: "Portal de Chamados — Embratur",
    desc: "Portal de suporte de TI integrado ao Monday.com. Colaboradores abrem chamados, consultam status por e-mail ou ID e recebem notificações automáticas. A IA do Monday lê cada chamado e distribui automaticamente para a área correta: Suporte TIC, Desenvolvimento, Suporte de Sistemas ou Segurança.",
    url: null,
    demo: null,
    stack: ["Python", "Flask", "Monday.com", "GraphQL", "Google OAuth", "Docker"],
    badge: "Embratur",
  },
  {
    name: "TurmasUnB",
    desc: "Projeto open source para a Universidade de Brasília com +120 turmas cadastradas, podendo impactar mais de 7 mil alunos.",
    url: "https://github.com/mateuslg/turmasunb",
    demo: null,
    stack: ["Python", "FastAPI", "JavaScript", "PostgreSQL", "Cloudflare"],
    badge: "Open Source",
  },
];

export const others: OtherProject[] = [
  {
    name: "VemDaChina",
    desc: "E-commerce de importação direta da China. Logística e burocracia resolvidas para o cliente, do pedido à entrega.",
    url: "https://vemdachina.com/",
    stack: ["TypeScript", "React", "Cloudflare"],
  },
  {
    name: "LampIAo",
    desc: "Aplicação web que usa IA para estruturar ideias em insights organizados.",
    url: "https://github.com/mateuslg/lampiao",
    stack: ["IA", "Web"],
  },
  {
    name: "UnAjuda",
    desc: "Plataforma colaborativa de Q&A para universitários.",
    url: "https://github.com/mateuslg/unajuda",
    stack: ["Q&A", "Web"],
  },
  {
    name: "KubShorty",
    desc: "Encurtador de URLs com FastAPI e Kubernetes.",
    url: "https://github.com/mateuslg/kubshorty",
    stack: ["FastAPI", "Kubernetes"],
  },
];
