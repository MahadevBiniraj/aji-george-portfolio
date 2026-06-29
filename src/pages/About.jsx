import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import portrait from "../assets/images/profile_new.jpg";
import { profile, leadership } from "../data/content";
import { Container, Seo, PageHero, SectionHeader, Eyebrow, Reveal } from "../components/ui";
import CTABand from "../components/layout/CTABand";

const glance = [
  ["Experience", `${profile.experienceYears} years`],
  ["Region", profile.region],
  ["Base", "Dubai, UAE"],
  ["Visa", "Valid to Oct 2026"],
  ["Languages", "English · Hindi · Malayalam"],
];

const bio = [
  "Aji C. George is a five-qualified finance leader — CPA, CMA, CIA, CCP and CIMA — with more than 24 years across UAE and GCC investment-holding, real estate, construction and manufacturing groups.",
  "He leads the group finance function of a multi-billion-dirham investment holding and serves as interim Head of Finance / CFO for subsidiaries above AED 200M turnover — owning IFRS group consolidation across 40+ entities alongside treasury, P&L and risk-based internal audit.",
  "His path began in construction finance in 1999 and moved through manufacturing and a USD 1B contractor to group-level stewardship — measured throughout by the discipline of the balance sheet: debt-to-asset held below 2×, weighted cost of capital below 7.5%, and an annual audit close compressed by 10–15 days.",
];

export default function About() {
  return (
    <>
      <Seo title="About & Leadership — Aji C. George" description="Biography, executive summary and leadership philosophy of Aji C. George, a five-qualified finance leader with 24+ years across UAE & GCC." />
      <PageHero
        eyebrow="About & Leadership"
        title="Fiduciary before technical."
        intro="Two and a half decades stewarding the finances of multi-entity groups — protecting solvency, telling the board the truth early, and building controls that let scale move with discipline."
      />

      {/* Bio + glance */}
      <section className="bg-paper">
        <Container className="grid gap-12 py-20 lg:grid-cols-[1.5fr_1fr] lg:gap-16 sm:py-24">
          <div>
            <Eyebrow>Biography</Eyebrow>
            <div className="mt-7 space-y-5">
              {bio.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p className="text-[1.06rem] leading-relaxed text-ink/80 text-pretty">{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-2.5">
                {profile.qualifications.map((q) => (
                  <span key={q} className="rounded-full border border-champagne/40 bg-champagne-soft/40 px-3.5 py-1.5 font-mono text-[0.74rem] tracking-wide text-[#8a6d3b]">{q}</span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-2xl border border-hairline bg-surface shadow-soft">
                <img src={portrait} alt={profile.name} className="aspect-[4/3.6] w-full object-cover object-top" />
                <div className="divide-y divide-hairline">
                  {glance.map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between px-6 py-3.5">
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-slate">{k}</span>
                      <span className="text-[0.9rem] font-medium text-ink">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Executive summary */}
      <section className="border-y border-hairline bg-surface-2/50">
        <Container className="py-20 sm:py-24">
          <SectionHeader eyebrow="Executive summary" title="The mandate, in three lines." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {profile.summary.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <article className="card flex h-full flex-col p-7">
                  <span className="font-mono text-[0.8rem] text-champagne">{String(i + 1).padStart(2, "0")}</span>
                  <div className="mt-4 h-px w-8 bg-champagne/50" />
                  <p className="mt-5 text-[0.98rem] leading-relaxed text-ink/80 text-pretty">{s}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-8 rounded-2xl border border-champagne/30 bg-champagne-soft/30 px-7 py-6">
              <span className="eyebrow">Career objective</span>
              <p className="mt-3 font-display text-[1.35rem] leading-snug text-ink text-balance">{profile.objective}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Leadership */}
      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <SectionHeader eyebrow="Leadership philosophy" title="How the finance function is led." align="center" />
          <Reveal>
            <figure className="mx-auto mt-12 max-w-3xl text-center">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-2xl text-champagne/50" />
              <blockquote className="mt-5 font-display text-[1.5rem] sm:text-[1.9rem] leading-snug text-ink text-balance">
                {leadership.philosophy}
              </blockquote>
            </figure>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {leadership.pillars.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="card flex h-full gap-5 p-7">
                  <span className="mt-1 font-mono text-[0.8rem] text-champagne">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-[1.3rem] leading-snug text-ink">{p.title}</h3>
                    <p className="mt-2.5 text-[0.92rem] leading-relaxed text-slate text-pretty">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
