import { Code2, Layers, Database, Cloud, Cpu, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Linguagens",
    icon: Code2,
    skills: ["Python", "TypeScript", "JavaScript", "PHP", "Java", "SQL", "C"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["FastAPI", "React", "Node.js", "Next.js", "Django", "Flask", "WordPress"],
  },
  {
    title: "Bancos de Dados",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Google Cloud", "AWS", "Docker", "Kubernetes", "CI/CD", "Vercel"],
  },
  {
    title: "IA & Ferramentas",
    icon: Cpu,
    skills: ["Lovable", "Claude Code", "Cursor", "LLMs", "Sistemas RAG", "Google ADK", "Antigravity", "ClaudeCode"],
  },
  {
    title: "Especialização",
    icon: Wrench,
    skills: ["APIs RESTful", "Crocoblock", "Elementor", "WooCommerce", "Automações"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: i * 0.04 },
  }),
};

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-24 px-6" data-testid="section-skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-sm text-muted-foreground" data-testid="text-skills-label">
              habilidades
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
            >
              <Card
                className="p-6 h-full transition-transform duration-300"
                data-testid={`card-skill-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center">
                    <category.icon className="w-3.5 h-3.5 text-accent-foreground" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm">{category.title}</h3>
                </div>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  {category.skills.map((skill, j) => (
                    <motion.div key={skill} custom={j} variants={badgeVariants}>
                      <Badge
                        variant="outline"
                        className="no-default-active-elevate font-normal font-mono text-xs"
                        data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
