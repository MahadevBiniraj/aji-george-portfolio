import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { experiences, profile } from "../data/content";
import { Container, Seo, PageHero, Tag, Reveal } from "../components/ui";
import CTABand from "../components/layout/CTABand";

const items = [...experiences].reverse(); // earliest → present (the progression)

export default function Journey() {
  return (
    <>
      <Seo title="Career Journey — Aji C. George" description="A 24+ year career progression from construction finance to group-level stewardship and interim Head of Finance / CFO across UAE & GCC." />
      <PageHero
        eyebrow="Career Journey"
        title="From branch ledgers to group stewardship."
        intro={`A ${profile.experienceYears}-year progression across four employers in the UAE, Bahrain and the wider GCC — each step widening the remit, from project cost accounting to interim Head of Finance and CFO.`}
      />

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <div className="relative">
            {/* vertical rail — mobile near the left edge, desktop behind the year gutter */}
            <div className="pointer-events-none absolute top-2 bottom-2 left-[7px] w-px bg-hairline md:left-[140px]" aria-hidden />

            <div className="space-y-10 sm:space-y-12">
              {items.map((exp, i) => (
                <Reveal key={exp.id} delay={i * 0.05} className="relative pl-9 md:pl-[180px]">
                  {/* year gutter (desktop only) */}
                  <div className="absolute left-0 top-0.5 hidden w-[116px] text-right md:block">
                    <span className="font-mono text-[0.95rem] font-medium text-ink">{exp.start.split(" ").pop()}</span>
                    <p className="mt-0.5 font-mono text-[0.7rem] text-slate-light">{exp.current ? "Present" : exp.end.split(" ").pop()}</p>
                  </div>

                  {/* node — centred on the rail at both breakpoints */}
                  <span
                    className={`absolute top-1.5 left-[7px] z-10 grid h-[15px] w-[15px] -translate-x-1/2 place-items-center rounded-full border-2 md:left-[140px] ${exp.current ? "border-champagne bg-champagne" : "border-champagne bg-paper"}`}
                    aria-hidden
                  >
                    {exp.current && <span className="h-1.5 w-1.5 rounded-full bg-paper" />}
                  </span>

                  {/* card */}
                  <article className="card p-6 sm:p-7">
                    <span className="font-mono text-[0.82rem] font-medium text-champagne md:hidden">{exp.period}</span>
                    <h3 className="mt-1 font-display text-[1.3rem] leading-snug text-ink sm:text-[1.4rem] md:mt-0">{exp.role}</h3>
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[0.86rem] text-slate">
                      <span className="inline-flex items-center gap-2 font-medium text-ink/80">
                        <FontAwesomeIcon icon={faBriefcase} className="text-[0.72rem] text-champagne" />
                        {exp.company}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <FontAwesomeIcon icon={faLocationDot} className="text-[0.72rem] text-champagne" />
                        {exp.location}
                      </span>
                      <span className="hidden font-mono text-[0.78rem] text-slate-light md:inline">{exp.period}</span>
                    </div>
                    <p className="mt-4 text-[0.94rem] leading-relaxed text-slate text-pretty">{exp.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.tags.slice(0, 3).map((t) => (<Tag key={t}>{t}</Tag>))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTABand eyebrow="The detail behind each step" title="See the full responsibilities and results, company by company." />
    </>
  );
}
