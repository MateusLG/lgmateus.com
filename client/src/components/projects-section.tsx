import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const featuredProject = {
  title: "VemDaChina",
  description:
    "E-commerce de importação direta da China. Produtos de qualidade entregues sem dor de cabeça, cuidando de toda a logística e burocracia para o cliente.",
  tags: ["TypeScript", "React", "JavaScript", "Cloudflare"],
  url: "https://vemdachina.com/",
};

const projects = [
  {
    title: "QuantikAI",
    description:
      "Sistema RAG para análise de documentos financeiros usando Google ADK e FastAPI.",
    url: "https://github.com/MateusLG/QuantikAI",
  },
  {
    title: "LampIAo",
    description:
      "Aplicação web que usa IA para estruturar ideias em insights organizados.",
    url: "https://github.com/mateuslg/lampiao",
  },
  {
    title: "UnAjuda",
    description:
      "Plataforma colaborativa de Q&A para universitários.",
    url: "https://github.com/mateuslg/unajuda",
  },
  {
    title: "KubShorty",
    description:
      "Encurtador de URLs com FastAPI e Kubernetes.",
    url: "https://github.com/mateuslg/kubshorty",
  },
  {
    title: "ArqGen",
    description:
      "Gerador de arquitetura de projetos.",
    url: "https://github.com/mateuslg/arqgen",
  },
  {
    title: "Limpa-Tex",
    description:
      "Utilitário para limpeza de arquivos auxiliares LaTeX.",
    url: "https://github.com/mateuslg/limpa-tex",
  },
];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-3, 3]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 px-6" data-testid="section-projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-sm text-muted-foreground" data-testid="text-proj-label">
              projetos
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <TiltCard>
            <a
              href={featuredProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              data-testid="link-featured-project"
            >
              <Card className="p-8 relative">
                <Badge
                  variant="secondary"
                  className="mb-4 no-default-active-elevate font-mono text-xs"
                  data-testid="badge-featured"
                >
                  destaque
                </Badge>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-foreground mb-3 tracking-tight"
                  data-testid="text-featured-title"
                >
                  {featuredProject.title}
                </h3>
                <p
                  className="text-muted-foreground mb-6 max-w-2xl leading-relaxed text-sm"
                  data-testid="text-featured-desc"
                >
                  {featuredProject.description}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  {featuredProject.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="no-default-active-elevate font-normal font-mono text-xs"
                      data-testid={`badge-tag-${tag.toLowerCase()}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <ExternalLink className="absolute top-6 right-6 w-4 h-4 text-muted-foreground" />
              </Card>
            </a>
          </TiltCard>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 0.05 + i * 0.06 }}
            >
              <TiltCard className="h-full">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group h-full"
                  data-testid={`link-project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Card className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-medium text-foreground text-sm" data-testid={`text-project-title-${i}`}>
                        {project.title}
                      </h3>
                      <SiGithub className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" />
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1" data-testid={`text-project-desc-${i}`}>
                      {project.description}
                    </p>
                  </Card>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
