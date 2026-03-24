"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Factory,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Truck
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { industries } from "@/lib/data";

const iconMap = {
  "heart-pulse": HeartPulse,
  "shopping-bag": ShoppingBag,
  truck: Truck,
  "graduation-cap": GraduationCap,
  factory: Factory,
  "briefcase-business": BriefcaseBusiness
};

export function Industries() {
  return (
    <section id="industries" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Technology delivery shaped around how each sector actually operates."
          description="Different sectors need different rhythms, controls, deployment models, and support structures. We tailor the delivery model as carefully as the technology stack."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap];

            return (
              <motion.article
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="surface group p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-sand text-accentDark transition duration-300 group-hover:bg-accent group-hover:text-ink">
                    <Icon size={24} />
                  </div>
                  <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    Sector
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ink">{industry.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slateWarm">{industry.description}</p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
