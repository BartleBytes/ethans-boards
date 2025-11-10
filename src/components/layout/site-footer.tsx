export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container flex flex-col gap-3 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Ethans Boards. Hand Crafted in Colorado. Website made with 	&#128153; 2025</p>
        <div className="flex gap-4">
          <a href="mailto:hello@bartleboards.com" className="hover:text-foreground">
            hello@bartleboards.com
          </a>
          <a href="https://instagram.com" className="hover:text-foreground">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
