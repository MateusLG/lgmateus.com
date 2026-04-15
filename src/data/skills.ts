export interface SkillCategory {
  title: string;
  icon: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "Linguagens",
    icon: "{ }",
    items: ["Python", "TypeScript", "JavaScript", "PHP", "SQL"],
  },
  {
    title: "Frameworks",
    icon: "⬡",
    items: ["FastAPI", "React", "Node.js", "Next.js", "Django", "Flask", "WordPress"],
  },
  {
    title: "Bancos de Dados",
    icon: "⊞",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "MariaDB", "Supabase"],
  },
  {
    title: "Cloud & DevOps",
    icon: "↑",
    items: ["Google Cloud", "AWS", "Docker", "Kubernetes", "CI/CD", "Vercel", "Cloudflare"],
  },
  {
    title: "Especialização",
    icon: "✦",
    items: ["APIs RESTful", "Crocoblock", "Elementor", "Automações & IA", "LLMs", "RAG"],
  },
  {
    title: "Ferramentas & Gestão",
    icon: "⚙",
    items: ["Monday.com", "Git", "Linux", "Postman", "Figma", "Docker", "N8N"],
  },
];
