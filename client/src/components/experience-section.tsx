import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const experiences = [
  {
    type: "Trabalho Híbrido",
    company: "V2Tech Soluções",
  },
  {
    type: "Sistema de Patrocínio",
    company: "Embratur",
  },
];

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 px-6" data-testid="section-experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-sm text-muted-foreground" data-testid="text-exp-label">
              experiencia
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group"
            >
              <div
                className="flex items-center justify-between gap-4 py-5 border-b border-border"
                data-testid={`card-experience-${i}`}
              >
                <h3
                  className="text-lg font-medium text-foreground"
                  data-testid={`text-company-${i}`}
                >
                  {exp.company}
                </h3>
                <Badge
                  variant="outline"
                  className="no-default-active-elevate font-normal font-mono text-xs shrink-0"
                  data-testid={`badge-type-${i}`}
                >
                  {exp.type}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
