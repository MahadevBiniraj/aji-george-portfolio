import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { navPrimary, navAll, profile } from "../../data/content";
import { Button, cn } from "../ui";

function Logo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="group flex items-center gap-3" aria-label={`${profile.name} — home`}>
      <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-ink text-champagne font-display text-[0.95rem] font-semibold tracking-wide ring-1 ring-inset ring-champagne/30 transition-transform duration-300 group-hover:scale-[1.04]">
        ACG
      </span>
      <span className="leading-tight">
        <span className="block font-display text-[1.06rem] font-semibold text-ink">{profile.name}</span>
        <span className="block font-mono text-[0.6rem] uppercase tracking-[0.24em] text-slate">Finance &amp; Internal Audit</span>
      </span>
    </Link>
  );
}

const linkCls = ({ isActive }) =>
  cn(
    "relative text-[0.84rem] font-medium tracking-wide transition-colors duration-200 py-1",
    "after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-champagne after:transition-all after:duration-300",
    isActive ? "text-ink after:w-full" : "text-slate hover:text-ink after:w-0 hover:after:w-full"
  );

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-paper/85 backdrop-blur-md border-b border-hairline shadow-[0_2px_20px_rgba(14,26,43,0.04)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <nav className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-5 sm:px-8">
          <Logo />

          <div className="hidden items-center gap-8 lg:flex">
            {navPrimary.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkCls}>{item.label}</NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button to="/resume" size="sm" className="hidden sm:inline-flex" icon={<FontAwesomeIcon icon={faArrowRight} className="text-[0.7rem]" />}>
              Résumé
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-hairline-strong text-ink transition-colors hover:bg-ink hover:text-paper lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <FontAwesomeIcon icon={open ? faXmark : faBars} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile / tablet drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-full w-[min(86vw,380px)] flex-col bg-paper shadow-2xl lg:hidden"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: [0.2, 0.65, 0.3, 1] }}
            >
              <div className="flex h-[72px] items-center justify-between border-b border-hairline px-6">
                <span className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-slate">Menu</span>
                <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full border border-hairline-strong text-ink" aria-label="Close menu">
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <nav className="flex flex-col">
                  {navAll.map((item, i) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center justify-between border-b border-hairline/70 py-4 font-display text-[1.15rem] transition-colors",
                          isActive ? "text-champagne" : "text-ink hover:text-champagne"
                        )
                      }
                    >
                      <span><span className="mr-3 font-mono text-[0.7rem] text-slate-light">{String(i + 1).padStart(2, "0")}</span>{item.label}</span>
                      <FontAwesomeIcon icon={faArrowRight} className="text-[0.75rem] text-slate-light" />
                    </NavLink>
                  ))}
                </nav>
              </div>
              <div className="border-t border-hairline px-6 py-5">
                <a href={profile.phoneHref} className="block font-mono text-[0.8rem] text-ink">{profile.phone}</a>
                <a href={profile.emailHref} className="mt-1 block text-[0.85rem] text-slate link-ul">{profile.email}</a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
