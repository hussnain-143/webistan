"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { heroImages } from "@/lib/data";

export function CTASection() {
  return (
    <section id="contact" className="section-padding pt-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="surface-dark overflow-hidden"
        >
          <div className="grid gap-0 lg:grid-cols-[1fr_0.8fr]">
            <div className="px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Start The Conversation
              </p>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-5xl">
                Planning a new build, an infrastructure upgrade, or a wider technology refresh?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/84">
                We help businesses define the right scope, avoid fragmented delivery, and move from
                planning to rollout with confidence. If your next project touches software, hardware,
                support, or all three, we can map a sensible path forward.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="mailto:contact@webistan.it" className="gap-2">
                  Book a Consultation
                  <ArrowRight size={16} />
                </Button>
                <Button href="#services" variant="secondary">
                  Review Services
                </Button>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-3 text-white">
                    <Mail size={18} className="text-accent" />
                    <span className="font-semibold">contact@webistan.it</span>
                  </div>
                  <p className="mt-2 text-sm text-white/80">General enquiries and project discussions.</p>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-3 text-white">
                    <Phone size={18} className="text-accent" />
                    <span className="font-semibold">+92 3000090009</span>
                  </div>
                  <p className="mt-2 text-sm text-white/80">Weekday availability for consultations and support.</p>
                </div>
              </div>
            </div>

            <div className="image-shell relative min-h-[360px] rounded-none lg:rounded-l-none lg:rounded-r-[28px]">
              <Image
                src={heroImages.primary}
                alt="Business technology consultation and implementation planning"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 34rem, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/15 to-black/60" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
