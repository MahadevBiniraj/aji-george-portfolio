import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faArrowUpRightFromSquare, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { profile } from "../data/content";
import { Container, Seo, PageHero, Eyebrow, Button, Reveal, cn } from "../components/ui";

const channels = [
  { icon: faEnvelope, label: "Email", value: profile.email, href: profile.emailHref },
  { icon: faPhone, label: "Phone / WhatsApp", value: profile.phone, href: profile.phoneHref },
  { icon: faLinkedinIn, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, external: true },
  { icon: faLocationDot, label: "Location", value: profile.location },
];

function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-slate">{label}</span>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-hairline-strong bg-surface px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-slate-light focus:border-champagne"
      />
    </label>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const ready = form.name.trim() && form.message.trim();

  const send = () => {
    if (!ready) return;
    const subject = `Enquiry from ${form.name}${form.company ? ` · ${form.company}` : ""}`;
    const body = `${form.message}\n\n— ${form.name}${form.email ? `\n${form.email}` : ""}${form.company ? `\n${form.company}` : ""}`;
    window.location.href = `${profile.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Seo title="Contact — Aji C. George" description="Get in touch with Aji C. George regarding Head of Finance, Finance Director or Internal Audit leadership opportunities in the UAE & GCC." />
      <PageHero
        eyebrow="Contact"
        title="Let's talk finance leadership."
        intro={profile.objective + " Based in Dubai and available for conversations across the GCC."}
      />

      <section className="bg-paper">
        <Container className="grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 sm:py-24">
          {/* Channels */}
          <div>
            <Eyebrow>Direct channels</Eyebrow>
            <div className="mt-7 space-y-3">
              {channels.map((c) => {
                const Inner = (
                  <div className="flex items-center gap-4 rounded-2xl border border-hairline bg-surface p-5 transition-colors duration-300 hover:border-champagne/50">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-champagne-soft text-champagne">
                      <FontAwesomeIcon icon={c.icon} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-slate">{c.label}</p>
                      <p className="mt-0.5 truncate text-[0.98rem] font-medium text-ink">{c.value}</p>
                    </div>
                    {c.external && <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-auto text-[0.7rem] text-slate-light" />}
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target={c.external ? "_blank" : undefined} rel={c.external ? "noreferrer" : undefined} className="block">{Inner}</a>
                ) : (
                  <div key={c.label}>{Inner}</div>
                );
              })}
            </div>

            <div className="mt-7 rounded-2xl border border-champagne/30 bg-champagne-soft/30 px-6 py-5">
              <span className="eyebrow">Availability</span>
              <p className="mt-2.5 text-[0.92rem] leading-relaxed text-ink/80 text-pretty">
                Open to Head of Finance, Finance Director and Internal Audit leadership roles across the UAE & GCC. UAE Employment Visa valid to Oct 2026; notice period and compensation available on request.
              </p>
            </div>
          </div>

          {/* Form */}
          <Reveal>
            <div className="rounded-2xl border border-hairline bg-surface p-7 shadow-soft sm:p-9">
              <h2 className="font-display text-[1.5rem] text-ink">Send a message</h2>
              <p className="mt-2 text-[0.9rem] text-slate">This opens your email client with the message ready to send.</p>
              <div className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name *" value={form.name} onChange={set("name")} placeholder="Full name" />
                  <Field label="Email" type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" />
                </div>
                <Field label="Company / role" value={form.company} onChange={set("company")} placeholder="Organisation" />
                <label className="block">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-slate">Message *</span>
                  <textarea
                    value={form.message}
                    onChange={set("message")}
                    rows={5}
                    placeholder="A few lines about the opportunity…"
                    className="mt-2 w-full resize-none rounded-xl border border-hairline-strong bg-surface px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-slate-light focus:border-champagne"
                  />
                </label>
                <Button onClick={send} className={cn(!ready && "pointer-events-none opacity-50")} icon={<FontAwesomeIcon icon={faPaperPlane} className="text-[0.72rem]" />}>
                  Compose email
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
