import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCertificate, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { certifications, education, skills, uaeCredentials } from "../data/content";
import { Container, Seo, PageHero, SectionHeader, Eyebrow, Reveal } from "../components/ui";
import CTABand from "../components/layout/CTABand";

const skillGroups = [
  { label: "Systems & ERP", items: skills.systems },
  { label: "Technical finance", items: skills.finance },
  { label: "Business & leadership", items: skills.business },
];

export default function Credentials() {
  return (
    <>
      <Seo title="Credentials — Aji C. George" description="Five professional qualifications (CPA, CMA, CIA, CCP, CIMA), education, technical skills and UAE eligibility for Aji C. George." />
      <PageHero
        eyebrow="Credentials"
        title="Five qualifications. One discipline."
        intro="A rare combination of US and UK finance, management-accounting, internal-audit and cost-engineering credentials — backing 24+ years of practice."
      />

      {/* Certifications */}
      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <SectionHeader eyebrow="Professional qualifications" title="Certified across finance, audit and cost." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <Reveal key={c.abbr} delay={(i % 3) * 0.07}>
                <article className="card card-hover flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[2.2rem] font-semibold leading-none text-ink">{c.abbr}</span>
                    <FontAwesomeIcon icon={faCertificate} className="text-champagne/70" />
                  </div>
                  <div className="mt-5 h-px w-8 bg-champagne/50" />
                  <h3 className="mt-5 text-[1.02rem] font-medium leading-snug text-ink/85">{c.name}</h3>
                  <div className="mt-auto pt-5">
                    <p className="font-mono text-[0.74rem] uppercase tracking-[0.1em] text-champagne">{c.body}</p>
                    <p className="mt-1 text-[0.82rem] text-slate">{c.region}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Education + UAE eligibility */}
      <section className="border-y border-hairline bg-surface-2/50">
        <Container className="grid gap-12 py-20 lg:grid-cols-2 lg:gap-16 sm:py-24">
          <div>
            <Eyebrow>Education</Eyebrow>
            <div className="mt-7 space-y-4">
              {education.map((e, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="card flex items-start gap-4 p-6">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-champagne-soft text-champagne">
                      <FontAwesomeIcon icon={faGraduationCap} />
                    </span>
                    <div>
                      <h3 className="font-display text-[1.2rem] leading-snug text-ink">{e.degree}</h3>
                      <p className="mt-1.5 text-[0.88rem] text-slate">{e.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow>UAE eligibility</Eyebrow>
            <Reveal delay={0.06}>
              <div className="mt-7 overflow-hidden rounded-2xl border border-hairline bg-surface">
                <div className="flex items-center gap-3 border-b border-hairline bg-ink px-6 py-4 text-paper">
                  <FontAwesomeIcon icon={faIdCard} className="text-champagne" />
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em]">Ready to hire in the UAE</span>
                </div>
                <div className="divide-y divide-hairline">
                  {uaeCredentials.map((u) => (
                    <div key={u.label} className="flex items-center justify-between gap-4 px-6 py-3.5">
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-slate">{u.label}</span>
                      <span className="text-right text-[0.9rem] font-medium text-ink">{u.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <SectionHeader eyebrow="Skills & tools" title="What the work is built on." />
          <div className="mt-12 space-y-9">
            {skillGroups.map((g, i) => (
              <Reveal key={g.label} delay={i * 0.05}>
                <div className="grid gap-4 border-t border-hairline pt-7 md:grid-cols-[200px_1fr]">
                  <h3 className="font-mono text-[0.74rem] uppercase tracking-[0.16em] text-champagne">{g.label}</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {g.items.map((it) => (
                      <span key={it} className="rounded-full border border-hairline-strong bg-surface px-4 py-2 text-[0.85rem] font-medium text-ink/80">{it}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <div className="grid gap-4 border-t border-hairline pt-7 md:grid-cols-[200px_1fr]">
                <h3 className="font-mono text-[0.74rem] uppercase tracking-[0.16em] text-champagne">Languages</h3>
                <div className="flex flex-wrap gap-2.5">
                  {skills.languages.map((l) => (
                    <span key={l} className="rounded-full border border-champagne/40 bg-champagne-soft/40 px-4 py-2 text-[0.85rem] font-medium text-[#8a6d3b]">{l}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
