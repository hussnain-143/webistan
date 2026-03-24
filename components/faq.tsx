"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { faqs } from "@/lib/data";

export function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Clear answers for teams planning technology investment."
            description="The most common questions we hear usually revolve around scope, timelines, support, and whether one partner can realistically handle both software and hardware well."
          />

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="surface overflow-hidden"
              >
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-ink">
                    {item.question}
                    <ChevronDown className="shrink-0 text-accentDark transition group-open:rotate-180" size={20} />
                  </summary>
                  <div className="border-t border-line px-6 py-5">
                    <p className="text-sm leading-7 text-slateWarm">{item.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
