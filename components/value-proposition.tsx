"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { heroImages, valuePoints } from "@/lib/data";

export function ValueProposition() {
  return (
    <section className="section-padding">
      <Container>
        <div className="mesh-bg overflow-hidden rounded-[36px] border border-white/70 px-6 py-8 shadow-panel sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="image-shell relative min-h-[380px] rounded-[28px] sm:translate-y-8">
                  <Image
                    src={heroImages.consulting}
                    alt="Technology planning session"
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 20rem, 100vw"
                  />
                </div>
                <div className="space-y-4">
                  <div className="image-shell relative h-48">
                    <Image
                      src={heroImages.hardware}
                      alt="Hardware and infrastructure deployment"
                      fill
                      className="object-cover"
                      sizes="(min-width: 640px) 18rem, 100vw"
                    />
                  </div>
                  <div className="surface p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentDark">
                      One roof. One delivery thread.
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slateWarm">
                      Hardware choices influence software rollout. Infrastructure constraints shape
                      architecture. Support requirements change both. We plan with those realities in
                      view from day one.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
            >
              <SectionHeading
                eyebrow="Why It Matters"
                title="When software and hardware are delivered together, business risk drops."
                description="The strongest differentiator in our model is not simply breadth. It is coordination. Projects move faster when the people designing your applications also understand your network, deployment realities, device standards, and support obligations."
              />

              <div className="mt-8 space-y-4">
                {valuePoints.map((point) => (
                  <div key={point.title} className="surface flex gap-4 p-5">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-accentDark" size={22} />
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slateWarm">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 rounded-[26px] border border-accent/20 bg-white/70 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accentDark">
                    Practical result
                  </p>
                  <p className="mt-1 text-sm leading-7 text-slateWarm">
                    Fewer handoffs, fewer surprises during rollout, and clearer accountability after
                    launch.
                  </p>
                </div>
                <ArrowUpRight className="ml-auto text-accentDark" size={22} />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
