export interface Job {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
}

export const jobs: Job[] = [
  {
    company: "V2Tech Soluções",
    role: "Desenvolvedor Fullstack",
    period: "out/2025 — presente",
    type: "PJ",
    description:
      "Desenvolvimento de sistemas web full-stack para clientes de diferentes setores, com foco em performance, escalabilidade e automações.",
    highlights: [
      "Arquitetura de APIs RESTful com Python e FastAPI",
      "Desenvolvimento de interfaces com React e TypeScript",
      "Automações de processos com N8N e integrações de IA",
      "Deploy e gerenciamento de infraestrutura em cloud (GCP, AWS)",
    ],
  },
  {
    company: "Embratur",
    role: "Desenvolvedor Fullstack",
    period: "out/2025 — presente",
    type: "Alocado via V2Tech · Híbrido",
    description:
      "Alocado na Embratur (Agência Brasileira de Promoção Internacional do Turismo) como desenvolvedor full-stack, trabalhando em regime híbrido.",
    highlights: [
      "Sistema de gerenciamento de +1.000 ativos de TI",
      "Portal de chamados de suporte integrado ao Monday.com com triagem por IA",
      "Sistema de patrocínio de eventos internacionais de turismo",
      "Desenvolvimento de landing pages e hotsites para promoção internacional do turismo brasileiro",
      "Suporte direto a usuários e resolução ágil de incidentes",
    ],
  },
];
