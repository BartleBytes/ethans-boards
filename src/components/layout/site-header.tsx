import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#collections", label: "Collections" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-black/10">
      <div className="container flex h-20 items-center justify-between text-white">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.3em] uppercase text-white"
        >
          Ethans Boards
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="outline" className="hidden border-white/40 text-white md:inline-flex">
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button asChild className="bg-white/20 text-white hover:bg-white/30">
            <Link href="#featured">View designs</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
