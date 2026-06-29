import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faArrowUpRightFromSquare, faCircleCheck, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { profile, resumeMeta } from "../data/content";
import { Container, Seo, PageHero, Eyebrow, Button, Reveal } from "../components/ui";
import CTABand from "../components/layout/CTABand";

const CV = `${import.meta.env.BASE_URL}${resumeMeta.file}`;

export default function Resume() {
  return (
    <>
      <Seo title="Résumé / CV — Aji C. George" description="View and download the CV of Aji C. George — strategic finance and internal audit leader, UAE & GCC." />
      <PageHero
        eyebrow="Résumé / CV"
        title="The full curriculum vitae."
        intro="Read it inline below, or download the PDF. The document mirrors everything on this site — credentials, experience and quantified results."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={CV} download icon={<FontAwesomeIcon icon={faDownload} className="text-[0.72rem]" />}>Download PDF</Button>
          <Button href={CV} target="_blank" rel="noreferrer" variant="ghost" icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[0.7rem]" />}>Open in new tab</Button>
        </div>
      </PageHero>

      <section className="bg-paper">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.5fr] lg:gap-12">
          {/* Side notes */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>At a glance</Eyebrow>
            <ul className="mt-6 space-y-3.5">
              {resumeMeta.highlights.map((h, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <li className="flex gap-3">
                    <FontAwesomeIcon icon={faCircleCheck} className="mt-1 text-champagne" />
                    <span className="text-[0.92rem] leading-relaxed text-ink/80">{h}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <div className="mt-9 rounded-2xl border border-hairline bg-surface p-6 shadow-soft">
              <h3 className="font-display text-[1.15rem] text-ink">{resumeMeta.recruiter.title}</h3>
              <ul className="mt-4 space-y-3">
                {resumeMeta.recruiter.points.map((p, i) => (
                  <li key={i} className="text-[0.88rem] leading-relaxed text-slate text-pretty">{p}</li>
                ))}
              </ul>
              <div className="mt-5 border-t border-hairline pt-5">
                <a href={profile.emailHref} className="block text-[0.9rem] font-medium text-ink link-ul">{profile.email}</a>
                <a href={profile.phoneHref} className="mt-1 block font-mono text-[0.85rem] text-slate">{profile.phone}</a>
              </div>
            </div>
          </div>

          {/* Embedded PDF */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-hairline bg-surface-2 shadow-soft">
              <div className="flex items-center justify-between border-b border-hairline bg-surface px-5 py-3">
                <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-slate">
                  <FontAwesomeIcon icon={faFilePdf} className="text-champagne" />
                  Aji-C-George-Resume.pdf
                </span>
                <a href={CV} download className="font-mono text-[0.72rem] text-champagne hover:underline">Download</a>
              </div>
              <object data={CV} type="application/pdf" className="h-[78vh] min-h-[560px] w-full" aria-label="Curriculum vitae PDF">
                <div className="flex flex-col items-center justify-center gap-4 px-6 py-20 text-center">
                  <FontAwesomeIcon icon={faFilePdf} className="text-3xl text-champagne" />
                  <p className="max-w-sm text-[0.95rem] text-slate">Your browser can't display the embedded PDF. You can open or download it directly instead.</p>
                  <Button href={CV} download size="sm" icon={<FontAwesomeIcon icon={faDownload} className="text-[0.7rem]" />}>Download the CV</Button>
                </div>
              </object>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
