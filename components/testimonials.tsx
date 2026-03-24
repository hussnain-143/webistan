"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Client Perspective"
          title="What clients value when they need dependable execution."
          description="Our work tends to earn trust in the same way every time: by being responsive, structured, and realistic from planning through support."
          align="center"
        />

        <div className="mt-12 grid gap-5 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="surface p-6"
            >
              <blockquote className="text-base leading-8 text-ink">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-line pt-5">
                <p className="font-semibold text-ink">{testimonial.name}</p>
                <p className="text-sm text-slateWarm">
                  {testimonial.role}, {testimonial.company}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
