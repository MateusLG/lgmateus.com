import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const differentials = [
  {
    number: 1,
    title: "Grandes Projetos",
    description:
      "Sistema de patrocínio da Embratur.",
  },
  {
    number: 2,
    title: "Foco Internacional",
    description:
      "Disponível para projetos remotos globais, mas também atuo em projetos no Brasil.",
  },
  {
    number: 3,
    title: "Suporte Ágil",
    description:
      "Experiência em contato direto com usuários e resolução rápida e certeira de bugs.",
  },
  {
    number: 4,
    title: "Documentação Completa",
    description:
      "Documentação clara de sistemas e códigos para equipes de grande porte.",
  },
  {
    number: 5,
    title: "Metodologias Ágeis",
    description:
      "Kanban, Scrum e ferramentas como Monday para gestão de demandas e suporte.",
  },
  {
    number: 6,
    title: "WordPress & IA",
    description:
      "Domínio do ecossistema Crocoblock, Elementor e especialização em LLMs e RAG.",
  },
];

function AnimatedNumber({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 600;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span className="font-mono text-3xl font-bold text-muted-foreground/20 tabular-nums">
      {String(count).padStart(2, "0")}
    </span>
  );
}

export function DifferentialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="diferenciais" className="py-24 px-6" data-testid="section-differentials" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-sm text-muted-foreground" data-testid="text-diff-label">
              diferenciais
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {differentials.map((diff, i) => (
            <motion.div
              key={diff.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card
                className="p-6 h-full group"
                data-testid={`card-differential-${String(diff.number).padStart(2, "0")}`}
              >
                <div className="mb-3">
                  <AnimatedNumber target={diff.number} inView={inView} />
                </div>
                <h3 className="font-semibold text-foreground mb-2" data-testid={`text-diff-title-${String(diff.number).padStart(2, "0")}`}>
                  {diff.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-diff-desc-${String(diff.number).padStart(2, "0")}`}>
                  {diff.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
