export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type Industry = {
  title: string;
  description: string;
  icon: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type CaseStudy = {
  title: string;
  sector: string;
  summary: string;
  outcome: string;
  metrics: string[];
  image: string;
};

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export const heroStats = [
  { value: "120+", label: "projects delivered" },
  { value: "3,500+", label: "devices deployed" },
  { value: "98.4%", label: "support SLA hit rate" }
];

export const services: Service[] = [
  {
    title: "Custom Software Development",
    description:
      "Business systems, portals, and internal tools designed around real workflows, approval chains, and operational constraints.",
    icon: "code"
  },
  {
    title: "Web and Mobile Applications",
    description:
      "Customer-facing products and internal apps built for reliability, adoption, and practical long-term maintenance.",
    icon: "monitor-smartphone"
  },
  {
    title: "ERP / CRM Solutions",
    description:
      "Tailored implementations and integrations that bring sales, finance, inventory, and service data into one usable system.",
    icon: "blocks"
  },
  {
    title: "Cloud Infrastructure and DevOps",
    description:
      "Scalable hosting, CI/CD pipelines, observability, and secure environments that support growth without operational friction.",
    icon: "cloud"
  },
  {
    title: "Hardware Procurement",
    description:
      "Workstations, networking, peripherals, servers, and fit-for-purpose sourcing aligned with budgets, compatibility, and lead times.",
    icon: "hard-drive"
  },
  {
    title: "Network and IT Infrastructure",
    description:
      "Structured office and branch infrastructure planning covering connectivity, access control, device management, and resilience.",
    icon: "network"
  },
  {
    title: "Managed IT Support",
    description:
      "Responsive end-user support, monitoring, lifecycle planning, and operational coverage for teams that cannot afford downtime.",
    icon: "headset"
  },
  {
    title: "Cybersecurity and Maintenance",
    description:
      "Patch management, endpoint protection, access policies, backups, and preventive maintenance built into day-to-day operations.",
    icon: "shield"
  }
];

export const industries: Industry[] = [
  {
    title: "Healthcare",
    description:
      "Operational dashboards, secure device rollout, and dependable infrastructure for clinics, labs, and specialist practices.",
    icon: "heart-pulse"
  },
  {
    title: "Retail",
    description:
      "Store systems, POS modernization, stock visibility, branch connectivity, and support for distributed locations.",
    icon: "shopping-bag"
  },
  {
    title: "Logistics",
    description:
      "Tracking interfaces, warehouse tooling, rugged hardware planning, and network stability for time-sensitive operations.",
    icon: "truck"
  },
  {
    title: "Education",
    description:
      "Campus connectivity, managed devices, staff portals, and practical support structures for growing institutions.",
    icon: "graduation-cap"
  },
  {
    title: "Manufacturing",
    description:
      "Production-facing systems, reporting layers, workstation standardization, and facility-grade infrastructure upgrades.",
    icon: "factory"
  },
  {
    title: "Corporate IT",
    description:
      "Office rollouts, internal platforms, governance-aware environments, and dependable support for multi-team businesses.",
    icon: "briefcase-business"
  }
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    description:
      "We map your processes, systems, hardware landscape, and business goals before proposing technology."
  },
  {
    title: "Plan",
    description:
      "Scope, architecture, procurement, dependencies, and timelines are aligned into a delivery roadmap you can act on."
  },
  {
    title: "Build",
    description:
      "Our team develops applications, prepares environments, and coordinates hardware readiness in parallel."
  },
  {
    title: "Deploy",
    description:
      "We manage rollout, migration, installation, user readiness, and go-live with minimal disruption to operations."
  },
  {
    title: "Support",
    description:
      "Post-launch, we stay involved through monitoring, maintenance, user support, and phased optimization."
  }
];

export const valuePoints: Feature[] = [
  {
    title: "Fewer gaps between teams",
    description:
      "Application delivery, infrastructure decisions, and hardware standards are coordinated from the start."
  },
  {
    title: "Faster decision-making",
    description:
      "Technical tradeoffs are solved in one conversation instead of being passed across vendors."
  },
  {
    title: "Lower rollout risk",
    description:
      "Procurement, deployment, access, connectivity, and support planning are built into the project, not added later."
  }
];

export const whyUs: Feature[] = [
  {
    title: "End-to-end delivery",
    description:
      "From specification to rollout, we keep software, procurement, deployment, and support aligned."
  },
  {
    title: "One partner for software and hardware",
    description:
      "You do not need separate vendors to coordinate application logic, infrastructure, and devices."
  },
  {
    title: "Reliable support",
    description:
      "We stay accountable after go-live with practical support structures and measurable service performance."
  },
  {
    title: "Scalable architecture",
    description:
      "Solutions are designed so teams can expand locations, users, and workloads without expensive rewrites."
  },
  {
    title: "Transparent communication",
    description:
      "Clear delivery updates, scoped milestones, and direct conversations replace vague status reporting."
  },
  {
    title: "Business-first execution",
    description:
      "We prioritize operational fit, adoption, and maintainability instead of shipping technology for its own sake."
  }
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Retail Infrastructure + POS Modernization",
    sector: "Retail",
    summary:
      "A regional retailer needed to replace outdated branch connectivity, standardize tills, and introduce a more reliable point-of-sale environment across 18 stores.",
    outcome:
      "Webistan.it coordinated network refresh, device sourcing, staged deployment, and software integration planning, reducing store disruption during the rollout window.",
    metrics: ["18 stores upgraded", "32% faster checkout recovery", "Single support channel post-launch"],
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Internal Operations Dashboard",
    sector: "Corporate IT",
    summary:
      "A growing services firm needed one internal platform for approvals, reporting, service visibility, and management-level operational insight.",
    outcome:
      "We designed and delivered a custom dashboard integrated with existing workflows and hosted it on a managed cloud setup with role-based access and audit-friendly reporting.",
    metrics: ["7 disconnected reports unified", "45% less manual reconciliation", "Role-based access implemented"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Office-Wide Hardware Deployment and Support",
    sector: "Professional Services",
    summary:
      "A newly expanded office required workstation rollout, meeting room equipment, network readiness, and an ongoing support structure for a hybrid workforce.",
    outcome:
      "Webistan.it handled procurement, asset planning, installation, endpoint setup, and service onboarding so the office opened with fully operational IT from day one.",
    metrics: ["160 devices deployed", "4-week rollout", "Support SLA active from launch"],
    image:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80"
  }
];

export const stats: Stat[] = [
  {
    value: "120+",
    label: "Projects Delivered",
    detail: "Across software builds, infrastructure rollouts, and mixed-scope engagements."
  },
  {
    value: "3,500+",
    label: "Devices Deployed",
    detail: "Workstations, networking equipment, peripherals, and managed office hardware."
  },
  {
    value: "6",
    label: "Industries Served",
    detail: "With delivery patterns tailored to operational realities, compliance needs, and scale."
  },
  {
    value: "<2 hrs",
    label: "Average First Response",
    detail: "For managed support requests under active client service agreements."
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Webistan.it stood out because they could discuss software architecture and office deployment in the same meeting. That shortened decisions for us and made delivery far smoother.",
    name: "Elena Moretti",
    role: "Operations Director",
    company: "Linea Retail Group"
  },
  {
    quote:
      "Their team translated our internal process issues into a working platform without overcomplicating the project. Communication was clear, timelines were realistic, and support continued after launch.",
    name: "Marco Bellini",
    role: "Head of Business Systems",
    company: "Northbridge Advisory"
  },
  {
    quote:
      "We needed a partner who could handle procurement, deployment, and long-term support with the same level of accountability. Webistan.it delivered exactly that.",
    name: "Sofia Ricci",
    role: "IT Manager",
    company: "Valore Logistics"
  }
];

export const faqs: FAQItem[] = [
  {
    question: "Do you handle both hardware and software projects?",
    answer:
      "Yes. Webistan.it is structured to deliver custom software, procurement, infrastructure, deployment, and support as one coordinated service. Many clients work with us specifically to avoid gaps between separate vendors."
  },
  {
    question: "Can you take on custom projects instead of fixed packages?",
    answer:
      "Absolutely. Most of our work is scoped around real operational needs rather than preset bundles. We shape the solution around your environment, timeline, and internal constraints."
  },
  {
    question: "Do you provide maintenance and ongoing support after launch?",
    answer:
      "Yes. We offer post-launch support, monitoring, maintenance, device lifecycle planning, and structured service coverage depending on the complexity of the environment."
  },
  {
    question: "What do deployment timelines usually look like?",
    answer:
      "Timelines vary by scope, but we define rollout phases early. Smaller deployments can move within weeks, while larger multi-site or software-plus-hardware programs are typically staged to reduce disruption."
  },
  {
    question: "Can you upgrade our existing infrastructure instead of replacing everything?",
    answer:
      "Yes. We often work with mixed environments and prefer sensible modernization. Where possible, we reuse viable infrastructure and plan upgrades where they create the most operational value."
  },
  {
    question: "Do you support long-term engagements?",
    answer:
      "Yes. Many clients start with a project and continue with us for support, optimization, procurement planning, and phased technology improvements over time."
  }
];

export const heroImages = {
  primary:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  software:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  hardware:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  consulting:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
};

export const footerServices = [
  "Software Development",
  "ERP / CRM Solutions",
  "Cloud & DevOps",
  "Hardware Procurement",
  "Managed Support"
];

export const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "Email", href: "mailto:contact@webistan.it" }
];
