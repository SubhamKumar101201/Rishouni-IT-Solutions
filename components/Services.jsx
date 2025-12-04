"use client";

import { useState } from "react";

const CATEGORIES = [
  "All",
  "Digital Solutions",
  "Infrastructure & Cloud",
  "Security & Intelligence",
  "Training & Consulting",
];

const CATEGORY_ACCENTS = {
  "Digital Solutions":
    "from-sky-500/40 via-purple-500/40 to-emerald-400/30",
  "Infrastructure & Cloud":
    "from-amber-400/45 via-orange-500/35 to-emerald-400/25",
  "Security & Intelligence":
    "from-rose-500/45 via-amber-400/35 to-sky-500/25",
  "Training & Consulting":
    "from-emerald-400/45 via-sky-500/35 to-amber-300/25",
};

const SERVICES = [
  // Digital Solutions
  {
    title: "Web App Development",
    category: "Digital Solutions",
    short:
      "Custom web apps and portals tailored to your workflows and customers.",
    detail:
      "From internal dashboards to customer-facing portals, we design and build responsive, secure web applications that perform beautifully across devices.",
  },
  {
    title: "Mobile App Development",
    category: "Digital Solutions",
    short:
      "Native-feel apps for iOS & Android built with modern tech stacks.",
    detail:
      "We craft mobile apps that feel premium, offline-ready and push-enabled, integrated with your backend and cloud services.",
  },
  {
    title: "Digital Marketing",
    category: "Digital Solutions",
    short:
      "Performance-focused campaigns that connect your brand with the right audience.",
    detail:
      "From SEO and paid campaigns to landing pages and funnels, we help you grow traffic, leads and revenue with measurable outcomes.",
  },
  {
    title: "Social Media Applications Development & Management",
    category: "Digital Solutions",
    short: "Engaging social experiences that keep your audience connected.",
    detail:
      "We design, build and manage social media apps, integrations and automation to amplify your digital presence across platforms.",
  },
  {
    title: "Web Design",
    category: "Digital Solutions",
    short: "Pixel-perfect interfaces that feel premium on every screen.",
    detail:
      "Our UX and UI design services focus on clarity, speed and conversion, creating layouts that reflect your brand and guide users smoothly.",
  },

  // Training & Consulting
  {
    title: "Education & Training in Computer Software",
    category: "Training & Consulting",
    short: "Structured training programs for teams and individuals.",
    detail:
      "Hands-on training across productivity tools, business software and technical stacks to help your teams adopt technology with confidence.",
  },
  {
    title: "Consulting",
    category: "Training & Consulting",
    short:
      "Strategic IT consulting for modern, secure and scalable operations.",
    detail:
      "We align technology with your business goals, from roadmaps and budget planning to vendor selection and digital transformation initiatives.",
  },

  // Systems & Infrastructure
  {
    title: "Computer Systems",
    category: "Infrastructure & Cloud",
    short:
      "End-to-end solutions for critical business computer systems.",
    detail:
      "We design, supply and maintain server, desktop and specialized systems that keep your operations stable and secure.",
  },
  {
    title:
      "Computer Systems & Communication Equipment Software Design",
    category: "Infrastructure & Cloud",
    short:
      "Software that brings your hardware and communication systems together.",
    detail:
      "From firmware to control applications, we build software that connects your communication equipment and business platforms.",
  },
  {
    title: "IT Infrastructure",
    category: "Infrastructure & Cloud",
    short:
      "Core IT foundation for modern, always-on operations.",
    detail:
      "Network, servers, storage and security architectures designed for reliability, high availability and future growth.",
  },
  {
    title: "Infrastructure Services",
    category: "Infrastructure & Cloud",
    short: "End-to-end LAN, WAN and data center infrastructure.",
    detail:
      "We plan, deploy and maintain your physical and virtual infrastructure, from racks and cabling to hyperconverged stacks.",
  },
  {
    title: "IT Network Services",
    category: "Infrastructure & Cloud",
    short:
      "Secure, resilient networking for branch, campus and data center.",
    detail:
      "Routing, switching, Wi-Fi, SD-WAN and firewalls configured and managed to keep your organization securely connected.",
  },
  {
    title: "Enterprise Storage",
    category: "Infrastructure & Cloud",
    short:
      "High-performance storage platforms for mission-critical data.",
    detail:
      "SAN, NAS and object storage solutions with backup, replication and tiering tuned for your performance and retention needs.",
  },
  {
    title: "Cloud Computing",
    category: "Infrastructure & Cloud",
    short: "Scalable cloud platforms tailored for your workloads.",
    detail:
      "We design and manage public, private and hybrid cloud environments so you can scale on demand without losing control or security.",
  },
  {
    title: "Hybrid Multi Cloud",
    category: "Infrastructure & Cloud",
    short:
      "Combine the best of multiple cloud providers with on-prem.",
    detail:
      "Policies, connectivity and governance that let you run apps across AWS, Azure, GCP and your datacenter with confidence.",
  },
  {
    title: "Cloud (IaaS, SaaS, PaaS)",
    category: "Infrastructure & Cloud",
    short:
      "Modernize workloads with the right mix of cloud services.",
    detail:
      "We help you choose and implement the right combination of infrastructure, platform and software services for your business.",
  },
  {
    title: "Digital Workspace & Mobility",
    category: "Infrastructure & Cloud",
    short:
      "Secure work-from-anywhere experiences for your teams.",
    detail:
      "VDI, MDM and collaboration tools configured so your workforce can access apps and data from any device without compromising security.",
  },
  {
    title: "Virtualization",
    category: "Infrastructure & Cloud",
    short:
      "Optimize hardware usage and simplify server management.",
    detail:
      "We design and manage virtualized environments that reduce footprint, improve uptime and simplify operations.",
  },
  {
    title: "Backup and Archive",
    category: "Infrastructure & Cloud",
    short:
      "Protect your critical data with reliable backup and recovery.",
    detail:
      "Online/offline backups, archive strategies and DR runbooks that ensure you can recover when it matters most.",
  },
  {
    title: "Housing Services for IT Infrastructure",
    category: "Infrastructure & Cloud",
    short:
      "Secure, reliable hosting for your equipment and platforms.",
    detail:
      "From racks and power to monitoring and on-site support, we host and maintain your infrastructure in controlled environments.",
  },

  // Security & Intelligence
  {
    title: "Data Science & AI",
    category: "Security & Intelligence",
    short: "Turn your data into insights and intelligent automation.",
    detail:
      "We build analytics pipelines, dashboards and ML/AI solutions that help your teams see patterns and act faster.",
  },
  {
    title: "SIEM & SOAR",
    category: "Security & Intelligence",
    short: "Next-gen security monitoring and automated response.",
    detail:
      "Centralized logs, correlation rules and playbooks that help your security team detect, investigate and respond earlier.",
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* glossy corner glows */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(243,223,160,0.23),_transparent_60%)] blur-3xl opacity-90" />
        <div className="pointer-events-none absolute right-[-90px] top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.28),_transparent_60%)] blur-3xl opacity-80" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-16 pt-20 md:pb-20 md:pt-28">
          <p className="text-xs tracking-[0.3em] uppercase text-gold/80">
            Our Services
          </p>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Full-Stack IT &amp; Cloud Services
            <span className="block text-gold">
              For Modern Businesses in the UAE
            </span>
          </h1>

          <p className="max-w-3xl text-sm text-[var(--text-muted)] sm:text-base">
            We help you build high-quality digital products, stabilize critical
            infrastructure and secure every layer of your technology stack —
            from web and mobile frontends to data centers, cloud and cyber
            defense.
          </p>

          {/* CATEGORY PILLS */}
          <div className="mt-4 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition border ${
                  activeCategory === cat
                    ? "bg-[var(--rishoni-primary)] text-black border-[var(--rishoni-primary)] shadow-[0_0_0_1px_rgba(250,250,250,0.45)]"
                    : "bg-white/5 text-[var(--text-muted)] border-white/10 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative mx-auto max-w-6xl px-6 py-12 md:py-16">
        {/* glossy section glows */}
        <div className="pointer-events-none absolute -left-44 bottom-[-40px] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(243,223,160,0.18),_transparent_60%)] blur-3xl opacity-90" />
        <div className="pointer-events-none absolute right-[-100px] top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(148,163,253,0.3),_transparent_60%)] blur-3xl opacity-80" />

        <div className="relative">
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-xs text-[var(--text-muted)] max-w-xl">
              Select a category above or explore the full catalogue below.
              Every engagement is tailored to your industry, compliance
              requirements and growth plans.
            </p>
            <span className="hidden text-xs text-gold/80 md:inline">
              {filteredServices.length} services curated for you
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredServices.map((service) => {
              const accent =
                CATEGORY_ACCENTS[service.category] ||
                "from-amber-300/40 via-amber-500/30 to-emerald-300/25";

              return (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#050505] shadow-[0_24px_80px_rgba(0,0,0,0.85)] transition-transform duration-300 hover:-translate-y-1.5 hover:border-[var(--rishoni-primary)]"
                >
                  <div className="relative flex h-full flex-col p-4 sm:p-5">
                    {/* top gradient banner acts like an 'image' */}
                    <div
                      className={`relative mb-4 h-28 w-full overflow-hidden rounded-2xl bg-gradient-to-tr ${accent}`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),transparent_55%)] opacity-70 mix-blend-screen" />
                      <div className="absolute inset-0 bg-[url('/noise-light.png')] opacity-20 mix-blend-overlay pointer-events-none" />
                      <div className="absolute left-4 top-3 rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80">
                        {service.category}
                      </div>
                      <div className="absolute right-3 bottom-3 flex items-center gap-2 text-[10px] text-white/80">
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.4)]" />
                        <span>Production ready</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-[var(--text-muted)]">
                      {service.short}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]/80">
                      {service.detail}
                    </p>

                    <div className="mt-5 flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-[var(--rishoni-light)] via-[var(--rishoni-primary)] to-[var(--rishoni-dark)] text-[11px] font-bold text-black shadow-[0_0_0_1px_rgba(0,0,0,0.45)]">
                          {service.title.charAt(0)}
                        </span>
                        <span className="hidden sm:inline">
                          Scoped, implemented &amp; managed by Rishouni IT.
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-gold/90 group-hover:translate-x-0.5 transition-transform">
                        <span>Learn more</span>
                        <span className="h-[1px] w-3 bg-gold/80" />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* CTA BAR */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-black/75 to-white/5 px-5 py-4 text-xs sm:text-sm text-[var(--text-muted)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span>
              Not sure where to start? We’ll help you design a roadmap across{" "}
              <span className="text-gold">apps, infrastructure and security</span>{" "}
              that fits your current stage and future vision.
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--rishoni-primary)] bg-gradient-to-r from-[var(--rishoni-light)] via-[var(--rishoni-primary)] to-[var(--rishoni-dark)] px-5 py-2 text-xs sm:text-sm font-semibold text-black shadow-[0_12px_35px_rgba(217,185,110,0.45)] hover:shadow-[0_18px_45px_rgba(217,185,110,0.6)] hover:-translate-y-[1px] transition-all"
            >
              <span>Talk to a Solutions Architect</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/10">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="h-3 w-3"
                >
                  <path
                    d="M6 4l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
