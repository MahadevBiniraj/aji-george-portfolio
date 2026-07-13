import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCertificate, faIdCard, faTimes, faExpand } from "@fortawesome/free-solid-svg-icons";
import { certifications, education, skills, uaeCredentials } from "../data/content";
import { Container, Seo, PageHero, SectionHeader, Eyebrow, Reveal } from "../components/ui";
import CTABand from "../components/layout/CTABand";
import { motion, AnimatePresence } from "framer-motion";

const skillGroups = [
  { label: "Systems & ERP", items: skills.systems },
  { label: "Technical finance", items: skills.finance },
  { label: "Business & leadership", items: skills.business },
];

export default function Credentials() {
  const [selectedCert, setSelectedCert] = useState(null);

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
                <article className="card card-hover flex h-full flex-col p-7 relative">
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
                  
                  {c.image && (
                    <button 
                      onClick={() => setSelectedCert(c)}
                      className="group mt-6 block w-full overflow-hidden rounded-xl border border-hairline bg-surface-2 transition-all hover:border-champagne/50 hover:shadow-sm"
                    >
                      <div className="relative flex h-56 w-full items-center justify-center p-2">
                        <img 
                          src={c.image} 
                          alt={`${c.abbr} Certificate`} 
                          className="h-full w-full object-contain transition-transform duration-500 hover:scale-[1.02]"
                        />
                        <div className="absolute right-3 top-3 flex items-center justify-center bg-ink/0 opacity-0 transition-opacity hover:opacity-100 group-hover:opacity-100">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface/90 text-ink shadow-sm backdrop-blur-md">
                            <FontAwesomeIcon icon={faExpand} className="text-champagne" />
                          </span>
                        </div>
                      </div>
                    </button>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
          
          <AnimatePresence>
            {selectedCert && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative flex max-h-full max-w-5xl flex-col items-center justify-center overflow-hidden rounded-2xl bg-surface p-2 shadow-2xl"
                >
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-ink/10 text-ink backdrop-blur-md transition-colors hover:bg-ink/20"
                    aria-label="Close"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.name} 
                    className="max-h-[85vh] w-auto rounded-xl object-contain"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
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
