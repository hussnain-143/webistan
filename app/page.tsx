import { CaseStudies } from "@/components/case-studies";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Industries } from "@/components/industries";
import { Navbar } from "@/components/navbar";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { ValueProposition } from "@/components/value-proposition";
import { WhyUs } from "@/components/why-us";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ValueProposition />
        <Industries />
        <Process />
        <WhyUs />
        <CaseStudies />
        <Stats />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
