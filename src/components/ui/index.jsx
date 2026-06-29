import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useReducedMotion, animate } from "framer-motion";
import { ClipLoader } from "react-spinners";

export const cn = (...c) => c.filter(Boolean).join(" ");

/* ---------------- Layout ---------------- */
export function Container({ className = "", children }) {
  return <div className={cn("mx-auto w-full max-w-[1180px] px-5 sm:px-8", className)}>{children}</div>;
}

export function Divider({ className = "" }) {
  return <div className={cn("hr-hair", className)} />;
}

/* ---------------- SEO (React 19 hoists these to <head>) ---------------- */
export function Seo({ title, description }) {
  return (
    <>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
    </>
  );
}

/* ---------------- Eyebrow ---------------- */
export function Eyebrow({ children, className = "", index }) {
  return (
    <span className={cn("inline-flex items-center gap-3 eyebrow", className)}>
      {index ? <span className="text-champagne/70">{index}</span> : null}
      <span className="h-px w-6 bg-champagne/50" aria-hidden />
      {children}
    </span>
  );
}

/* ---------------- Section header ---------------- */
export function SectionHeader({ eyebrow, title, intro, align = "left", index, className = "" }) {
  const centered = align === "center";
  return (
    <div className={cn(centered ? "text-center mx-auto max-w-2xl" : "max-w-3xl", className)}>
      {eyebrow ? <Eyebrow index={index} className={cn(centered && "justify-center")}>{eyebrow}</Eyebrow> : null}
      {title ? (
        <h2 className="mt-5 font-display text-[2rem] sm:text-[2.6rem] leading-[1.07] text-ink text-balance">{title}</h2>
      ) : null}
      {intro ? <p className="mt-4 text-[1.02rem] leading-relaxed text-slate text-pretty">{intro}</p> : null}
    </div>
  );
}

/* ---------------- Page hero (inner pages) ---------------- */
export function PageHero({ eyebrow, title, intro, children }) {
  return (
    <header className="hero-wash border-b border-hairline">
      <Container className="pt-32 pb-14 sm:pt-36 sm:pb-20">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-[2.6rem] sm:text-[3.6rem] leading-[1.04] text-ink text-balance max-w-4xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 max-w-2xl text-[1.05rem] sm:text-[1.12rem] leading-relaxed text-slate text-pretty">
              {intro}
            </p>
          ) : null}
          {children}
        </Reveal>
      </Container>
    </header>
  );
}

/* ---------------- Button ---------------- */
const btnBase =
  "group inline-flex items-center justify-center gap-2.5 rounded-full text-[0.86rem] font-medium tracking-wide transition-all duration-300 focus-visible:outline-2";
const btnSizes = { md: "px-6 py-3", sm: "px-5 py-2.5 text-[0.8rem]" };
const btnVariants = {
  primary: "bg-champagne text-ink hover:bg-champagne-bright shadow-[0_8px_24px_rgba(181,147,90,0.28)] hover:shadow-[0_12px_30px_rgba(181,147,90,0.36)] hover:-translate-y-0.5",
  dark: "bg-ink text-paper hover:bg-ink-soft hover:-translate-y-0.5",
  ghost: "border border-hairline-strong text-ink hover:border-ink hover:bg-ink hover:text-paper",
  ghostLight: "border border-paper/30 text-paper hover:bg-paper hover:text-ink",
};

export function Button({ children, variant = "primary", size = "md", to, href, onClick, className = "", icon, type = "button", ...rest }) {
  const cls = cn(btnBase, btnSizes[size], btnVariants[variant], className);
  const inner = (
    <>
      {children}
      {icon ? <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span> : null}
    </>
  );
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>;
  return <button type={type} onClick={onClick} className={cls} {...rest}>{inner}</button>;
}

/* ---------------- Tag ---------------- */
export function Tag({ children, tone = "default", className = "" }) {
  const tones = {
    default: "border-hairline-strong text-slate bg-surface",
    dark: "border-paper/15 text-paper/80 bg-white/5",
    accent: "border-champagne/40 text-champagne bg-champagne-soft/40",
  };
  return (
    <span className={cn("inline-flex items-center rounded-full border px-3 py-1 text-[0.72rem] font-medium tracking-wide", tones[tone], className)}>
      {children}
    </span>
  );
}

/* ---------------- Reveal (scroll-triggered) ---------------- */
export function Reveal({ children, delay = 0, y = 18, className = "", as = "div" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px -8% 0px" });
  const reduce = useReducedMotion();
  const M = motion[as] || motion.div;
  return (
    <M
      ref={ref}
      initial={reduce ? false : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.65, 0.3, 1] }}
      className={className}
    >
      {children}
    </M>
  );
}

/* ---------------- Animated counter ---------------- */
function formatNum(n, decimals) {
  return decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString("en-US");
}

export function StatCounter({ value, prefix = "", suffix = "", decimals = 0, className = "" }) {
  const ref = useRef(null);
  const nodeRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!nodeRef.current) return;
    if (reduce || !inView) {
      if (nodeRef.current && (reduce || inView)) nodeRef.current.textContent = formatNum(value, decimals);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => { if (nodeRef.current) nodeRef.current.textContent = formatNum(v, decimals); },
    });
    return () => controls.stop();
  }, [inView, reduce, value, decimals]);

  return (
    <span ref={ref} className={cn("metric inline-flex items-baseline", className)}>
      {prefix ? <span>{prefix}</span> : null}
      <span ref={nodeRef}>0</span>
      {suffix ? <span>{suffix}</span> : null}
    </span>
  );
}

/* ---------------- Stat ledger (row of counters) ---------------- */
export function StatLedger({ stats, tone = "light", columns = 4, className = "" }) {
  const dark = tone === "dark";
  const gridCols = columns === 4 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2 lg:grid-cols-3";
  return (
    <div className={cn("grid", gridCols, dark ? "divide-paper/10" : "divide-hairline", className)}>
      {stats.map((s, i) => (
        <Reveal key={i} delay={i * 0.08} className={cn(
          "px-5 py-6 sm:px-7 sm:py-7 border-t",
          dark ? "border-paper/10" : "border-hairline",
          i % 2 === 1 ? "border-l" : "",
          "lg:border-l",
          i === 0 ? "lg:border-l-0" : "",
        )}>
          <div className={cn("font-display text-[2.1rem] sm:text-[2.6rem] leading-none", dark ? "text-paper" : "text-ink")}>
            <StatCounter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
          </div>
          <div className={cn("mt-3 text-[0.78rem] uppercase tracking-[0.14em] font-mono", dark ? "text-paper/55" : "text-slate")}>
            {s.label}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- Loading ---------------- */
export function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-paper">
      <ClipLoader color="#B5935A" size={34} speedMultiplier={0.85} />
    </div>
  );
}
