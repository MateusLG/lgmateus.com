import { Mail, MapPin } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contato" className="py-24 px-6" data-testid="section-contact">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-border" />
            <span className="font-mono text-sm text-muted-foreground" data-testid="text-contact-label">
              contato
            </span>
            <div className="h-px w-12 bg-border" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight" data-testid="text-contact-title">
            Vamos conversar?
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed max-w-md mx-auto text-sm" data-testid="text-contact-subtitle">
            Disponível para projetos freelance, parcerias e oportunidades.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-3 flex-wrap mb-12"
        >
          <Button
            variant="secondary"
            size="lg"
            asChild
          >
            <a
              href="mailto:contato@lgmateus.com"
              data-testid="button-email"
            >
              <Mail className="w-4 h-4" />
              contato@lgmateus.com
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/lgmateus/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-contact-linkedin"
            >
              <SiLinkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <a
              href="https://github.com/mateuslg"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-contact-github"
            >
              <SiGithub className="w-4 h-4" />
              GitHub
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground"
        >
          <MapPin className="w-3 h-3" />
          <span data-testid="text-location">Brasil — remoto</span>
        </motion.div>
      </div>
    </section>
  );
}
