import { SiLinkedin, SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 60);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <span>
      {displayed}
      <span
        className="inline-block w-[2px] h-[1em] bg-foreground/60 ml-0.5 align-text-bottom"
        style={{ opacity: showCursor ? 1 : 0, transition: "opacity 0.1s" }}
      />
    </span>
  );
}

export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 pt-16 relative"
      data-testid="section-hero"
    >
      <div className="hero-grid-bg absolute inset-0 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-muted-foreground mb-6" data-testid="text-greeting">
            <TypewriterText text="$ whoami" delay={300} />
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          data-testid="text-name"
        >
          Mateus Lira
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          data-testid="text-description"
        >
          5 anos construindo soluções robustas e escaláveis com{" "}
          <span className="text-foreground">WordPress</span>,{" "}
          <span className="text-foreground">Python</span> e{" "}
          <span className="text-foreground">automações com IA</span>.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-3 flex-wrap mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button
            variant="secondary"
            size="lg"
            onClick={() => handleScroll("#contato")}
            data-testid="button-contact"
          >
            Contato
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
              data-testid="link-linkedin"
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
              data-testid="link-github"
            >
              <SiGithub className="w-4 h-4" />
              GitHub
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button
            onClick={() => handleScroll("#habilidades")}
            className="group inline-flex flex-col items-center gap-2"
            data-testid="button-explore"
          >
            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
              scroll
            </span>
            <div className="w-px h-8 bg-border relative">
              <div className="absolute top-0 left-0 w-full h-full bg-foreground/40 animate-scroll-line origin-top" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
