"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-black/5 bg-white/88 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-2xl font-semibold tracking-[-0.03em] text-ink">
            Webistan<span className="text-accentDark">.it</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slateWarm hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contact">Book a Consultation</Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/90 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-menu" className="border-t border-black/5 bg-white/95 backdrop-blur-xl lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-ink hover:bg-sand"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="#contact" className="mt-3">
                Book a Consultation
              </Button>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
