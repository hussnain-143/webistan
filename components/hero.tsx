"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { heroImages, heroStats } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="overflow-hidden pb-16 pt-10 md:pb-20 lg:pb-24 lg:pt-14">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <Badge>Software, Hardware, Infrastructure</Badge>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-ink sm:text-6xl lg:text-[4.45rem]">
              A serious technology partner for the systems your business runs on.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slateWarm md:text-[1.15rem]">
              Webistan.it helps businesses plan, build, procure, deploy, and support the technology
              they rely on every day. From custom software and cloud environments to office hardware,
              networks, and managed support, we deliver with one accountable team.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" className="gap-2">
                Book a Consultation
                <ArrowRight size={16} />
              </Button>
              <Button href="#case-studies" variant="secondary">
                View Case Studies
              </Button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="surface p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 text-accentDark" size={20} />
                  <div>
                    <p className="font-semibold text-ink">Built for operational reality</p>
                    <p className="mt-1 text-sm text-slateWarm">
                      We design around procurement, deployment, user adoption, support needs, and
                      long-term ownership.
                    </p>
                  </div>
                </div>
              </div>
              <div className="surface p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 text-accentDark" size={20} />
                  <div>
                    <p className="font-semibold text-ink">Trusted delivery model</p>
                    <p className="mt-1 text-sm text-slateWarm">
                      Software, hardware, infrastructure, and support coordinated as one program.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 border-t border-line pt-8 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold tracking-tight text-ink">{stat.value}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-slateWarm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -left-10 top-12 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-black/5 blur-3xl" />

            <div className="relative rounded-[34px] border border-white/70 bg-white/70 p-4 shadow-panel backdrop-blur-xl">
              <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                <div className="image-shell relative min-h-[440px] rounded-[28px]">
                  <Image
                    src={heroImages.primary}
                    alt="Technology team reviewing software and infrastructure planning"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 36rem, 100vw"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                      Advisory + delivery
                    </p>
                    <p className="mt-2 max-w-xs text-lg font-semibold text-white">
                      Planning, implementation, and support shaped around business continuity.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="image-shell relative h-52">
                    <Image
                      src={heroImages.software}
                      alt="Software delivery and consulting workshop"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 18rem, 100vw"
                    />
                  </div>
                  <div className="surface flex-1 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentDark">
                      Integrated capability
                    </p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 overflow-hidden rounded-2xl">
                          <Image
                            src={heroImages.hardware}
                            alt="Hardware deployment and device installation"
                            width={44}
                            height={44}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-ink">Hardware & device rollout</p>
                          <p className="text-sm text-slateWarm">Sourced, staged, and installed with support readiness.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 overflow-hidden rounded-2xl">
                          <Image
                            src={heroImages.consulting}
                            alt="Enterprise consulting and implementation planning"
                            width={44}
                            height={44}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-ink">Infrastructure & cloud</p>
                          <p className="text-sm text-slateWarm">Reliable environments, security controls, and deployment planning.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
