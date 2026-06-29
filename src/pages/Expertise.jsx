import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { pillars } from "../data/content";
import { Container, Seo, PageHero, Reveal, Button } from "../components/ui";
import CTABand from "../components/layout/CTABand";

export default function Expertise() {
  return (
    <>
      <Seo title="Finance Expertise & Core Competencies — Aji C. George" description="Core competencies across financial leadership & IFRS reporting, treasury & capital structure, audit, risk & governance, and tax, systems & specialized finance." />
      <PageHero
        eyebrow="Finance Expertise"
        title="The full remit of a group finance function."
        intro="Four competency domains spanning IFRS group consolidation, treasury and capital structure, risk-based internal audit, and the tax and systems work of a multi-entity investment holding."
      >
        <div className="mt-8">
          <Button to="/audit-risk" variant="ghost" size="sm" icon={<FontAwesomeIcon icon={faAngleRight} className="text-[0.68rem]" />}>
            Internal audit &amp; risk in depth
          </Button>
        </div>
      </PageHero>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="divide-y divide-hairline">
            {pillars.map((p) => (
              <Reveal key={p.key}>
                <div className="grid gap-x-12 gap-y-7 py-14 first:pt-4 lg:grid-cols-[0.85fr_1.4fr]">
                  <div className="lg:sticky lg:top-24 lg:self-start">
                    <span className="font-mono text-[0.8rem] text-champagne">{p.no}</span>
                    <h2 className="mt-4 font-display text-[1.7rem] leading-tight text-ink text-balance">{p.title}</h2>
                    <p className="mt-4 text-[0.96rem] leading-relaxed text-slate text-pretty">{p.blurb}</p>
                  </div>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {p.items.map((it, j) => (
                      <Reveal key={it} delay={j * 0.02}>
                        <div className="flex items-center gap-3 rounded-xl border border-hairline bg-surface px-4 py-3 transition-colors duration-300 hover:border-champagne/50 hover:bg-champagne-soft/25">
                          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-champagne-soft text-champagne">
                            <FontAwesomeIcon icon={faCheck} className="text-[0.6rem]" />
                          </span>
                          <span className="text-[0.9rem] font-medium text-ink/85">{it}</span>
                        </div>
                      </Reveal>
                    ))}
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
