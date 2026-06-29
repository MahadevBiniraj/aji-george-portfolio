import React from "react";
import { achievements } from "../data/content";
import { Container, Seo, PageHero, Tag, Reveal } from "../components/ui";
import CTABand from "../components/layout/CTABand";

export default function Achievements() {
  return (
    <>
      <Seo title="Achievements & Business Impact — Aji C. George" description="Quantified finance and audit achievements — solvency protection, faster audit close, working-capital gains, cost reduction and stronger controls across a multi-billion-dirham group." />
      <PageHero
        eyebrow="Achievements & Impact"
        title="Results, not responsibilities."
        intro="Every claim here carries a number. These are the outcomes delivered across group finance, treasury, internal audit and project costing."
      />

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <article className="card card-hover relative flex h-full flex-col overflow-hidden p-7">
                  <span className="pointer-events-none absolute -right-6 -top-8 font-display text-[7rem] leading-none text-hairline/60 select-none" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Tag tone="accent" className="relative">{a.tag}</Tag>
                  <p className="relative mt-7 font-display text-[2.7rem] leading-none text-ink">{a.stat}</p>
                  <p className="relative mt-2.5 font-mono text-[0.76rem] uppercase tracking-[0.12em] text-champagne">{a.label}</p>
                  <p className="relative mt-4 text-[0.92rem] leading-relaxed text-slate text-pretty">{a.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
