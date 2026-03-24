"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { whyUs } from "@/lib/data";

export function WhyUs() {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="surface-dark flex h-full flex-col justify-between p-8"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Why Choose Webistan.it
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-white md:text-4xl">
                Delivery confidence for projects that touch the whole business.
              </h2>
              <p className="mt-4 max-w-md text-[0.98rem] leading-8 text-white/86">
                We work best with businesses that need a dependable partner, not a handoff. The goal
                is simple: build the right solution, deploy it well, and remain accountable once it is
                in use.
              </p>
            </div>
            <div className="mt-8">
              <Button href="#contact" className="gap-2">
                Start a Project Conversation
                <ArrowRight size={16} />
              </Button>
            </div>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {whyUs.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="surface p-6"
              >
                <CheckCircle2 className="text-accentDark" size={22} />
                <h3 className="mt-5 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slateWarm">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
