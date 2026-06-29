import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faMagnifyingGlassChart } from "@fortawesome/free-solid-svg-icons";
import { auditRisk } from "../data/content";
import { Container, Seo, PageHero, SectionHeader, Reveal } from "../components/ui";
import CTABand from "../components/layout/CTABand";

export default function AuditRisk() {
  return (
    <>
      <Seo title="Internal Audit & Risk — Aji C. George" description="Risk-based internal audit, internal controls, forensic review, due diligence and governance across a multi-billion-dirham UAE investment holding." />
      <PageHero
        eyebrow="Internal Audit & Risk"
        title="Control without friction."
        intro={auditRisk.intro}
      />

      {/* Highlights */}
      <section className="border-b border-hairline bg-ink text-paper">
        <Container className="py-14">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-3">
            {auditRisk.highlights.map((h, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex h-full items-start gap-4 bg-ink px-7 py-8">
                  <FontAwesomeIcon icon={faShieldHalved} className="mt-1 text-champagne" />
                  <p className="text-[0.96rem] leading-relaxed text-paper/85 text-pretty">{h}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <SectionHeader
            eyebrow="Capabilities"
            title="A risk-based audit practice, end to end."
            intro="From planning prioritised by risk to forensic examination and remediation — the controls that let a 40-entity group move quickly without losing discipline."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {auditRisk.capabilities.map((c, i) => (
              <Reveal key={i} delay={(i % 4) * 0.06}>
                <article className="card card-hover flex h-full flex-col p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-champagne-soft text-champagne">
                    <FontAwesomeIcon icon={faMagnifyingGlassChart} />
                  </span>
                  <h3 className="mt-5 font-display text-[1.15rem] leading-snug text-ink">{c.title}</h3>
                  <p className="mt-2.5 text-[0.88rem] leading-relaxed text-slate text-pretty">{c.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand eyebrow="Governance you can rely on" title="Bring risk-based discipline to your group's balance sheet." />
    </>
  );
}
