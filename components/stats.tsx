"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="section-padding">
      <Container>
        <div className="surface-dark overflow-hidden px-6 py-10 sm:px-8 lg:px-10">
          <div className="grid gap-8 border-b border-white/10 pb-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Measured Delivery</p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white md:text-4xl">
                Results that reflect delivery discipline, not just design polish.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-8 text-white/82">
              We focus on rollout quality, support responsiveness, and technology that remains usable
              after launch. That shows up in the numbers our clients care about most.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-[24px] border border-white/10 bg-white/5 p-6"
              >
                <p className="text-4xl font-bold tracking-tight text-white">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  {stat.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/78">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
