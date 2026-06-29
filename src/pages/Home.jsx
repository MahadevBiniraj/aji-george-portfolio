import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import portrait from "../assets/images/profile_new.jpg";
import { profile, heroStats, ratioStats, pillars, achievements } from "../data/content";
import { Container, Seo, Eyebrow, SectionHeader, Button, Tag, Reveal, StatLedger, StatCounter, Divider } from "../components/ui";
import CTABand from "../components/layout/CTABand";

const CV = `${import.meta.env.BASE_URL}assets/resume/Aji-C-George-Resume.pdf`;

export default function Home() {
  return (
    <>
      <Seo title="Aji C. George — Strategic Finance & Internal Audit Leader | UAE & GCC" description={profile.subhead} />

      {/* ---------------- Hero ---------------- */}
      <section className="hero-wash">
        <Container className="grid items-center gap-14 pt-32 pb-20 sm:pt-40 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-28">
          <div>
            <Reveal>
              <Eyebrow>Strategic Finance · Internal Audit · UAE &amp; GCC</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 font-display font-semibold text-ink display-fluid leading-[0.98] text-balance">
                Aji C. George
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-xl font-display text-[1.4rem] sm:text-[1.7rem] leading-snug text-ink/85 text-balance">
                {profile.headline}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-slate text-pretty">
                {profile.subhead}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-7 flex flex-wrap items-center gap-2.5">
                {profile.qualifications.map((q) => (
                  <span key={q} className="rounded-full border border-champagne/40 bg-champagne-soft/40 px-3.5 py-1.5 font-mono text-[0.74rem] tracking-wide text-[#8a6d3b]">
                    {q}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button to="/resume" icon={<FontAwesomeIcon icon={faEye} className="text-[0.72rem]" />}>View CV</Button>
                <Button href={CV} download variant="ghost" icon={<FontAwesomeIcon icon={faDownload} className="text-[0.72rem]" />}>Download CV</Button>
                <Button to="/contact" variant="dark" icon={<FontAwesomeIcon icon={faArrowRight} className="text-[0.72rem]" />}>Get in touch</Button>
              </div>
            </Reveal>
          </div>

          {/* Portrait */}
          <Reveal delay={0.2} className="relative mx-auto w-full max-w-[380px] lg:max-w-none">
            <div className="absolute -right-3 -top-3 bottom-6 left-6 rounded-[18px] bg-ink/[0.96]" aria-hidden />
            <div className="relative overflow-hidden rounded-[16px] border border-champagne/30 bg-surface shadow-lift">
              <img src={portrait} alt={`${profile.name}, ${profile.titles[0]}`} className="aspect-[4/4.6] w-full object-cover object-top" loading="eager" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/55 to-transparent" aria-hidden />
            </div>
            <div className="absolute -bottom-5 left-3 right-8 rounded-xl border border-hairline bg-surface/95 px-5 py-3.5 shadow-soft backdrop-blur sm:left-0">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-slate">Based in</p>
              <p className="mt-0.5 text-[0.92rem] font-medium text-ink">{profile.location}</p>
              <p className="mt-1 font-mono text-[0.66rem] text-champagne">{profile.visa}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- Statement of Stewardship ---------------- */}
      <section className="bg-ink text-paper">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow className="text-champagne">Statement of Stewardship</Eyebrow>
              <h2 className="mt-4 max-w-xl font-display text-[1.9rem] sm:text-[2.3rem] leading-tight text-paper text-balance">
                The scale entrusted to a single finance function.
              </h2>
            </div>
            <p className="max-w-xs text-[0.9rem] leading-relaxed text-paper/55">
              Group consolidation across {profile.region}, reported to the Group Managing Director and Group Finance Head.
            </p>
          </div>

          <div className="mt-12">
            <StatLedger stats={heroStats} tone="dark" columns={4} />
          </div>

          {/* Ratio rail */}
          <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-paper/10 pt-10 lg:grid-cols-4">
            {ratioStats.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="font-display text-[1.7rem] leading-none text-champagne">
                  <StatCounter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <p className="mt-2.5 text-[0.74rem] uppercase tracking-[0.12em] text-paper/50 font-mono">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- Practice pillars ---------------- */}
      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <SectionHeader
            eyebrow="What I lead"
            title="Four disciplines, one fiduciary mandate."
            intro="From IFRS group consolidation to risk-based audit — the full finance remit of a multi-entity investment holding."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.key} delay={i * 0.06}>
                <div className="group flex h-full flex-col bg-surface p-7 transition-colors duration-300 hover:bg-surface-2 sm:p-9">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.8rem] text-champagne">{p.no}</span>
                    <FontAwesomeIcon icon={faArrowRight} className="-translate-x-1 text-slate-light opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-5 font-display text-[1.45rem] leading-snug text-ink">{p.title}</h3>
                  <p className="mt-3 text-[0.94rem] leading-relaxed text-slate text-pretty">{p.blurb}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.items.slice(0, 4).map((it) => (<Tag key={it}>{it}</Tag>))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button to="/expertise" variant="ghost" size="sm" icon={<FontAwesomeIcon icon={faArrowRight} className="text-[0.68rem]" />}>Explore expertise</Button>
            <Button to="/audit-risk" variant="ghost" size="sm" icon={<FontAwesomeIcon icon={faArrowRight} className="text-[0.68rem]" />}>Internal audit &amp; risk</Button>
          </div>
        </Container>
      </section>

      {/* ---------------- Achievements teaser ---------------- */}
      <section className="border-t border-hairline bg-surface-2/50">
        <Container className="py-20 sm:py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader eyebrow="Selected results" title="Outcomes with numbers attached." />
            <Button to="/achievements" variant="ghost" size="sm" className="shrink-0" icon={<FontAwesomeIcon icon={faArrowRight} className="text-[0.68rem]" />}>All achievements</Button>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {achievements.slice(0, 3).map((a, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <article className="card card-hover flex h-full flex-col p-7">
                  <Tag tone="accent">{a.tag}</Tag>
                  <p className="mt-6 font-display text-[2.4rem] leading-none text-ink">{a.stat}</p>
                  <p className="mt-2 font-mono text-[0.78rem] uppercase tracking-[0.12em] text-champagne">{a.label}</p>
                  <p className="mt-4 text-[0.9rem] leading-relaxed text-slate text-pretty">{a.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- CTA ---------------- */}
      <CTABand />
    </>
  );
}
