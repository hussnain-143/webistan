"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { caseStudies } from "@/lib/data";

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Practical outcomes for businesses that need technology to work reliably."
          description="These examples reflect the kind of cross-functional engagements where procurement, rollout, software, and support all affect success."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="surface overflow-hidden p-3"
            >
              <div className="image-shell relative h-60">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 24rem, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-4">
                <Badge>{study.sector}</Badge>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-ink">{study.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slateWarm">{study.summary}</p>
                <p className="mt-4 text-sm leading-7 text-slateWarm">{study.outcome}</p>
                <ul className="mt-5 space-y-2">
                  {study.metrics.map((metric) => (
                    <li key={metric} className="rounded-2xl bg-sand px-4 py-3 text-sm font-medium text-ink">
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
