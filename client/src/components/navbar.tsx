import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Habilidades", href: "#habilidades" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => {
        const el = document.querySelector(link.href);
        if (!el) return { href: link.href, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { href: link.href, top: Math.abs(rect.top - 100) };
      });
      const closest = sections.reduce((a, b) => (a.top < b.top ? a : b));
      if (closest.top < 400) {
        setActiveSection(closest.href);
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="font-mono text-sm text-muted-foreground"
            data-testid="link-home"
          >
            lg<span className="text-foreground">mateus</span>
          </a>

          <div className="hidden md:flex items-center gap-0.5 flex-wrap">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-1.5 text-xs font-mono transition-colors duration-200 rounded-md ${
                  activeSection === link.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {activeSection === link.href && (
                  <span className="text-accent-foreground mr-1">{">"}</span>
                )}
                {link.label.toLowerCase()}
              </button>
            ))}
            <div className="w-px h-4 bg-border mx-2" />
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-1">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
              data-testid="button-theme-toggle-mobile"
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              data-testid="button-menu-toggle"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          data-testid="mobile-menu"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-xl font-mono text-muted-foreground"
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="text-foreground/30 mr-2">{String(i + 1).padStart(2, "0")}.</span>
                {link.label.toLowerCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
