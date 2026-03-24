"use client";

import { motion } from "framer-motion";
import {
  Blocks,
  CloudCog,
  Code2,
  HardDrive,
  Headset,
  MonitorSmartphone,
  Network,
  ShieldCheck
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { services } from "@/lib/data";

const iconMap = {
  code: Code2,
  "monitor-smartphone": MonitorSmartphone,
  blocks: Blocks,
  cloud: CloudCog,
  "hard-drive": HardDrive,
  network: Network,
  headset: Headset,
  shield: ShieldCheck
};

export function Services() {
  return (
    <section id="services" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Core Services"
          title="Software delivery, hardware sourcing, and dependable IT execution."
          description="We support organizations that need more than one narrow specialist. Webistan.it combines product development, infrastructure delivery, procurement, deployment, and support in a way that reduces friction across the whole project."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="surface group h-full p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 text-accentDark transition duration-300 group-hover:bg-accent group-hover:text-ink">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slateWarm">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
