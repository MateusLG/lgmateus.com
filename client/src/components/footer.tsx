export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border" data-testid="footer">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-muted-foreground font-mono" data-testid="text-footer-copy">
          &copy; {new Date().getFullYear()} lgmateus
        </p>
        <p className="text-xs text-muted-foreground font-mono" data-testid="text-footer-tagline">
          built with care
        </p>
      </div>
    </footer>
  );
}
