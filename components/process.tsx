"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section id="process" className="section-padding">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Delivery Process"
            title="A clear structure from early discovery to post-launch support."
            description="We run projects with enough rigor for enterprise environments and enough flexibility for real business needs. The process is designed to keep stakeholders aligned and rollout risk controlled."
          />

          <div className="surface relative overflow-hidden p-6 sm:p-8">
            <div className="absolute left-10 top-10 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-accent/60 via-line to-transparent md:block" />
            <div className="space-y-5">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="relative rounded-[24px] border border-line bg-white p-5 md:ml-8"
                >
                  <div className="md:absolute md:-left-14 md:top-6 md:flex md:h-12 md:w-12 md:items-center md:justify-center md:rounded-full md:border md:border-accent/30 md:bg-accent/12 md:text-sm md:font-bold md:text-accentDark">
                    {index + 1}
                  </div>
                  <div className="flex items-center gap-3 md:hidden">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/12 text-sm font-bold text-accentDark">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                  </div>
                  <h3 className="hidden text-lg font-semibold text-ink md:block">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slateWarm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
