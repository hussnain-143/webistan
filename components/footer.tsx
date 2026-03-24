import Link from "next/link";
import { Container } from "@/components/ui/container";
import { footerServices, navLinks, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#121210] py-14 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.65fr_0.65fr_0.8fr]">
          <div>
            <Link href="/" className="text-3xl font-semibold tracking-[-0.04em]">
              Webistan<span className="text-accent">.it</span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
              Webistan.it is a B2B technology partner delivering software systems, hardware
              procurement, infrastructure rollout, deployment, maintenance, and dependable support.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Quick Links</p>
            <ul className="mt-4 space-y-3 text-sm text-white/82">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Services</p>
            <ul className="mt-4 space-y-3 text-sm text-white/82">
              {footerServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-white/82">
              <li>
                <a href="mailto:contact@webistan.it" className="hover:text-white">
                  contact@webistan.it
                </a>
              </li>
              <li>+92 3000090009</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/82 hover:border-accent/40 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/64">
          © {new Date().getFullYear()} Webistan.it. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
