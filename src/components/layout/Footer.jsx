import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLocationDot, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { navAll, profile } from "../../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        {/* Top */}
        <div className="grid gap-12 border-b border-paper/10 py-16 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-white/5 text-champagne font-display text-[0.95rem] font-semibold ring-1 ring-inset ring-champagne/30">ACG</span>
              <span className="font-display text-[1.15rem] font-semibold">{profile.name}</span>
            </div>
            <p className="mt-5 text-[0.92rem] leading-relaxed text-paper/65">
              {profile.titles[0]} — five-qualified, {profile.experienceYears} years across {profile.region}.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.qualifications.map((q) => (
                <span key={q} className="rounded-full border border-paper/15 px-3 py-1 font-mono text-[0.66rem] tracking-wide text-paper/75">{q}</span>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-champagne">Explore</h3>
            <ul className="mt-5 grid grid-cols-1 gap-y-2.5 xs:grid-cols-2">
              {navAll.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-[0.88rem] text-paper/65 transition-colors hover:text-paper">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-champagne">Contact</h3>
            <ul className="mt-5 space-y-3.5 text-[0.88rem] text-paper/75">
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faLocationDot} className="mt-1 text-champagne/80" />
                <span>{profile.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faPhone} className="mt-1 text-champagne/80" />
                <a href={profile.phoneHref} className="hover:text-paper">{profile.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="mt-1 text-champagne/80" />
                <a href={profile.emailHref} className="break-all hover:text-paper">{profile.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faLinkedinIn} className="mt-1 text-champagne/80" />
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-paper">
                  {profile.linkedinLabel}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[0.6rem]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-start justify-between gap-4 py-7 text-[0.78rem] text-paper/50 sm:flex-row sm:items-center">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p className="font-mono tracking-wide">Dubai · United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
}
