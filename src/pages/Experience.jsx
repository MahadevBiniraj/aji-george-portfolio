import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendar, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { experiences } from "../data/content";
import { Container, Seo, PageHero, Tag, Reveal, Button } from "../components/ui";
import CTABand from "../components/layout/CTABand";

export default function Experience() {
  return (
    <>
      <Seo title="Professional Experience — Aji C. George" description="Detailed professional experience across four employers — responsibilities, KPIs and business impact in group finance, treasury, internal audit and project costing." />
      <PageHero
        eyebrow="Professional Experience"
        title="The work, in full detail."
        intro="Four roles across 24+ years — each with its responsibilities, metrics and measurable business impact, exactly as delivered."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/journey" variant="ghost" size="sm" icon={<FontAwesomeIcon icon={faAngleRight} className="text-[0.68rem]" />}>See the timeline</Button>
          <Button to="/achievements" variant="ghost" size="sm" icon={<FontAwesomeIcon icon={faAngleRight} className="text-[0.68rem]" />}>Key achievements</Button>
        </div>
      </PageHero>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="divide-y divide-hairline">
            {experiences.map((exp, i) => (
              <Reveal key={exp.id}>
                <article className="grid gap-x-12 gap-y-8 py-14 first:pt-4 lg:grid-cols-[0.9fr_1.4fr]">
                  {/* Left: identity + metrics */}
                  <div className="lg:sticky lg:top-24 lg:self-start">
                    <span className="font-mono text-[0.8rem] text-champagne">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="mt-4 font-display text-[1.7rem] leading-tight text-ink text-balance">{exp.role}</h2>
                    <p className="mt-3 text-[1.02rem] font-medium text-ink/85">{exp.company}</p>
                    <div className="mt-3 space-y-1.5 text-[0.86rem] text-slate">
                      <p className="inline-flex items-center gap-2"><FontAwesomeIcon icon={faCalendar} className="text-[0.72rem] text-champagne" />{exp.period}</p>
                      <p className="inline-flex items-center gap-2"><FontAwesomeIcon icon={faLocationDot} className="text-[0.72rem] text-champagne" />{exp.location}</p>
                    </div>
                    <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-slate-light">{exp.sector}</p>

                    {exp.metrics.length > 0 && (
                      <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline">
                        {exp.metrics.map((m, j) => (
                          <div key={j} className="bg-surface px-4 py-4">
                            <p className="font-display text-[1.3rem] leading-none text-ink metric">{m.value}</p>
                            <p className="mt-1.5 text-[0.68rem] uppercase tracking-[0.08em] text-slate font-mono">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: responsibilities */}
                  <div>
                    <p className="text-[1.02rem] leading-relaxed text-ink/80 text-pretty">{exp.summary}</p>
                    <h3 className="mt-8 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-champagne">Responsibilities & impact</h3>
                    <ul className="mt-5 space-y-4">
                      {exp.points.map((pt, k) => (
                        <li key={k} className="flex gap-3.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" aria-hidden />
                          <span className="text-[0.96rem] leading-relaxed text-ink/75 text-pretty">{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {exp.tags.map((t) => (<Tag key={t}>{t}</Tag>))}
                    </div>
                  </div>
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
