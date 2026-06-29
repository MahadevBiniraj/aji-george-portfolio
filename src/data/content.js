// ============================================================
//  Aji C. George — Executive Portfolio
//  SINGLE SOURCE OF TRUTH
//  Every fact below is drawn from the CV. To update any detail
//  (e.g. answers returned from the information request — exact
//  ERP, P&L figure, certification status, employer name), edit
//  it here once and it propagates across every page.
// ============================================================

export const profile = {
  name: "Aji C. George",
  initials: "ACG",
  titles: [
    "Strategic Finance & Internal Audit Leader",
    "Head of Finance",
    "Finance Director",
    "CFO-Track",
  ],
  headline: "Stewarding the finances of a multi-billion-dirham holding.",
  subhead:
    "Five-qualified finance leader with 24+ years across UAE & GCC investment-holding, real estate, construction and manufacturing groups — owning IFRS group consolidation, treasury, P&L and risk-based internal audit.",
  location: "Dubai, United Arab Emirates",
  phone: "+971 50 667 5064",
  phoneHref: "tel:+971506675064",
  email: "ajichekkayilgeorge@gmail.com",
  emailHref: "mailto:ajichekkayilgeorge@gmail.com",
  linkedin: "https://www.linkedin.com/in/aji-c-george",
  linkedinLabel: "linkedin.com/in/aji-c-george",
  qualifications: ["CPA", "CMA", "CIA", "CCP", "CIMA"],
  experienceYears: "24+",
  region: "UAE & GCC",
  visa: "UAE Employment Visa — valid to Oct 2026",
  objective:
    "Targeting Head of Finance, Finance Director or Internal Audit leadership in the UAE / GCC.",
  summary: [
    "Five-qualified finance leader (CPA, CMA, CIA, CCP, CIMA) with 24+ years in UAE / GCC investment-holding, real estate, construction and manufacturing groups.",
    "Lead the group finance function and serve as interim Head of Finance / CFO for subsidiaries above AED 200M turnover, owning IFRS group consolidation across 40+ entities, treasury, P&L and risk-based internal audit.",
    "Held group debt-to-asset below 2×, kept weighted cost of capital below 7.5%, and cut the annual audit close by 10–15 days.",
  ],
};

// Hero "Statement of Stewardship" ledger — the signature figures
export const heroStats = [
  { value: 30, prefix: "AED ", suffix: "B+", label: "Group revenue scope" },
  { value: 20, prefix: "AED ", suffix: "B+", label: "Assets under reporting" },
  { value: 40, suffix: "+", label: "Consolidated entities" },
  { value: 24, suffix: "+", label: "Years · UAE & GCC" },
];

// Secondary ratio rail
export const ratioStats = [
  { value: 2, prefix: "< ", suffix: "×", decimals: 0, label: "Group debt-to-asset" },
  { value: 1.5, prefix: "< ", suffix: "×", decimals: 1, label: "Bank debt-to-asset" },
  { value: 7.5, prefix: "< ", suffix: "%", decimals: 1, label: "Weighted cost of capital" },
  { value: 60, suffix: ":40", label: "Equity-to-debt mix" },
];

// Four practice pillars (used on Home triad + Expertise)
export const pillars = [
  {
    key: "finance",
    no: "01",
    title: "Financial Leadership & Reporting",
    blurb:
      "P&L ownership and IFRS group consolidation across 40+ entities, with board and management reporting, FP&A and financial modelling.",
    items: [
      "P&L Management",
      "IFRS Group Consolidation (IFRS 9 / 15 / 16)",
      "FP&A",
      "Statutory & Management Reporting",
      "Board Reporting",
      "Budgeting & Forecasting",
      "Variance Analysis",
      "Financial Modelling",
      "Capex Planning",
      "DCF",
    ],
  },
  {
    key: "treasury",
    no: "02",
    title: "Treasury & Capital Structure",
    blurb:
      "Liquidity, banking and capital structure — refinancing high-cost facilities and holding the group's solvency ratios in line.",
    items: [
      "Treasury & Banking",
      "Liquidity & Cash Management",
      "Bank Facilities",
      "LC & Bank Guarantees",
      "Working Capital",
      "Cash Flow Forecasting",
      "Capital Structure",
      "Cost of Capital",
      "Debt Refinancing",
      "Financial Restructuring",
    ],
  },
  {
    key: "audit",
    no: "03",
    title: "Audit, Risk & Governance",
    blurb:
      "Risk-based internal audit and forensic review across entities and assets up to AED 7B, surfacing control gaps and driving remediation.",
    items: [
      "Risk-Based Internal Audit",
      "Internal Controls",
      "Risk Management",
      "External Audit Coordination",
      "Audit Finalization",
      "Forensic Review",
      "Due Diligence",
      "Governance & Compliance",
    ],
  },
  {
    key: "tax",
    no: "04",
    title: "Tax, Systems & Specialized Finance",
    blurb:
      "UAE VAT and corporate tax compliance, ERP implementation, and the specialized accounting of an investment-holding group.",
    items: [
      "UAE VAT & FTA Filing",
      "UAE Corporate Tax",
      "ERP / System Implementation",
      "Investment Accounting",
      "Intercompany Reconciliation",
      "Related-Party Transactions",
      "Project & Contract Costing",
      "Cost Optimization",
      "Stakeholder Management",
      "M&A / Feasibility",
    ],
  },
];

export const experiences = [
  {
    id: "investment-group",
    company: "Investment Group (Pvt.) Ltd",
    confidential: true,
    role: "Group Finance Manager / Interim Head of Finance & CFO",
    location: "Sharjah, UAE",
    start: "Oct 2008",
    end: "Present",
    period: "Oct 2008 — Present",
    current: true,
    sector:
      "Real estate · oil trading & bunkering · insurance · manufacturing · contracting",
    summary:
      "Directs group finance and acts as interim Head of Finance / CFO across a multi-billion-dirham, 40+ subsidiary investment holding.",
    metrics: [
      { value: "AED 30B+", label: "Revenue scope" },
      { value: "AED 20B+", label: "Assets reported" },
      { value: "40+", label: "Subsidiaries" },
      { value: "AED 7B", label: "Control environment" },
    ],
    points: [
      "Direct group finance and act as interim Head of Finance / CFO for subsidiaries exceeding AED 200M turnover — leading financial restructuring, capital-injection appraisals, project-return analysis and feasibility studies.",
      "Deliver consolidated IFRS group accounts and management / board reporting across 40+ subsidiaries — a reporting scope spanning AED 30B+ in revenue and AED 20B+ in assets — across real estate, oil trading & bunkering, insurance, manufacturing and contracting.",
      "Strengthened capital structure and solvency — debt-to-asset below 2×, bank debt-to-asset below 1.5×, a 60:40 equity-to-debt mix and weighted cost of capital below 7.5% — via bank negotiation and refinancing of high-cost facilities.",
      "Strengthened the control environment across entities and assets up to AED 7B by leading risk-based internal audits and forensic reviews — surfacing control gaps and driving remediation reported to the Group Managing Director and Group Finance Head.",
      "Accelerated the annual audit close by 10–15 days year over year by re-engineering closing schedules, strengthening reconciliations and coordinating external auditors with divisional finance teams.",
      "Improved group liquidity — receivables collected 7–10 days faster and 10–15 days of additional vendor credit secured — while managing bank facilities, LCs, guarantees, trust receipts and inventory hedging group-wide.",
      "Cut related-party transaction processing 30% and VAT-documentation effort 20% through IT-redesigned data entry, reduced high-value overheads 20%, and ensured full UAE VAT and corporate tax (FTA) compliance.",
    ],
    tags: ["IFRS Consolidation", "Treasury", "Internal Audit", "Capital Structure", "UAE VAT & CT"],
  },
  {
    id: "alec",
    company: "Al Jaber Engineering & Contracting LLC (ALEC)",
    role: "Senior Accountant",
    location: "Dubai, UAE",
    start: "Nov 2004",
    end: "Sep 2008",
    period: "Nov 2004 — Sep 2008",
    sector: "Construction — high-rise, mall and hospitality projects",
    summary:
      "Project and contract accounting for a USD 1B-turnover contractor (12,000+ staff) on AED 100M–600M programmes.",
    metrics: [
      { value: "8–15%", label: "Lower material cost" },
      { value: "30%", label: "Lower rental cost" },
      { value: "USD 1B", label: "Contractor turnover" },
      { value: "AED 100–600M", label: "Project range" },
    ],
    points: [
      "Reduced project material costs 8–15% versus budget, equipment-rental costs 30% (idle-plant redeployment) and material loss 10% on AED 100M–600M high-rise, mall and hospitality projects for a USD 1B-turnover contractor — 12,000+ staff, clients including Majid Al Futtaim, Emaar and Aldar.",
      "Controlled project and contract accounting, WIP and IFRS revenue recognition; designed activity-based costing and integrated Bills of Quantities into the ERP, and built the budgeting and forecasting framework.",
      "Delivered monthly cost reports with cost / schedule variance analysis, cut idle-labour impact 3–5% through timely labour-hour reporting, and appraised CAPEX using DCF.",
      "Co-developed an integrated accounting system and strengthened internal controls and segregation of duties to mitigate fraud.",
    ],
    tags: ["Project Costing", "WIP & IFRS Revenue", "Activity-Based Costing", "DCF", "Internal Controls"],
  },
  {
    id: "bahrain-dairies",
    company: "Bahrain & Al Jazira Dairies",
    role: "Senior Accountant",
    location: "Manama, Bahrain",
    start: "Sep 2002",
    end: "Jan 2004",
    period: "Sep 2002 — Jan 2004",
    sector: "Manufacturing — dairy & beverage",
    summary:
      "Owned the full finance function for a dairy and beverage manufacturer with 40+ products and 50+ staff.",
    metrics: [
      { value: "40+", label: "Products costed" },
      { value: "50+", label: "Staff" },
    ],
    points: [
      "Owned the full finance function for a dairy and beverage manufacturer (40+ products, 50+ staff) — finalizing accounts and managing receivables, payables, payroll and bank reconciliations.",
      "Stood up a finance, inventory and payroll ERP and built product costing and segmented sales reporting that informed pricing and margin decisions.",
    ],
    tags: ["Full Finance Function", "ERP Implementation", "Product Costing", "Margin Analysis"],
  },
  {
    id: "fujairah-construction",
    company: "Fujairah National Construction LLC",
    role: "Senior Branch Accountant",
    location: "UAE",
    start: "May 1999",
    end: "Sep 2002",
    period: "May 1999 — Sep 2002",
    sector: "Construction — multiple project sites",
    summary:
      "Finalized branch accounts and project cost accounting across multiple construction jobs.",
    metrics: [],
    points: [
      "Finalized branch accounts and project cost accounting across multiple construction jobs — general ledger, project budgets, cost-to-complete and variance analysis.",
      "Managed progress billing, subcontractor and supplier payments and disputes, receivable collection and bank / balance-sheet reconciliations.",
    ],
    tags: ["Branch Accounts", "Cost-to-Complete", "Progress Billing", "Reconciliations"],
  },
];

// Major achievements — each a quantified, stand-alone win
export const achievements = [
  {
    stat: "< 2×",
    label: "Debt-to-asset held",
    tag: "Capital Structure",
    desc:
      "Protected solvency across a multi-billion-dirham, 40+ subsidiary holding — debt-to-asset held below 2× and weighted cost of capital below 7.5% — through bank negotiation and refinancing of high-cost facilities.",
  },
  {
    stat: "10–15 days",
    label: "Faster audit close",
    tag: "Audit & Reporting",
    desc:
      "Accelerated the annual group audit close by re-engineering closing schedules, reconciliations and external-auditor coordination — year over year.",
  },
  {
    stat: "7–10 days",
    label: "Faster receivables",
    tag: "Working Capital",
    desc:
      "Strengthened working capital by collecting receivables 7–10 days faster and securing 10–15 days of additional vendor credit across the group.",
  },
  {
    stat: "8–15%",
    label: "Lower project costs",
    tag: "Cost Optimization",
    desc:
      "Cut delivered project costs 8–15% and equipment-rental costs 30% on AED 100M–600M construction programmes at ALEC.",
  },
  {
    stat: "AED 7B",
    label: "Control environment",
    tag: "Risk & Controls",
    desc:
      "Strengthened the control environment across entities and assets up to AED 7B through risk-based internal audits and forensic reviews.",
  },
  {
    stat: "30%",
    label: "Less related-party processing",
    tag: "Process & Systems",
    desc:
      "Cut related-party transaction processing 30% and VAT-documentation effort 20% through IT-redesigned data entry, and reduced high-value overheads 20%.",
  },
];

export const auditRisk = {
  intro:
    "A risk-based internal audit practice run across a multi-billion-dirham holding — built on a CIA qualification and 24+ years in the field. The work spans entities and assets up to AED 7B, with findings reported directly to the Group Managing Director and Group Finance Head.",
  capabilities: [
    { title: "Risk-Based Internal Audit", desc: "Audit planning and execution prioritised by risk across 40+ group entities." },
    { title: "Internal Controls", desc: "Designing and strengthening controls and segregation of duties to mitigate fraud." },
    { title: "Risk Management", desc: "Identifying, surfacing and remediating control gaps across divisions." },
    { title: "Forensic Review", desc: "Forensic examination across entities and assets up to AED 7B." },
    { title: "External Audit Coordination", desc: "Coordinating external auditors with divisional finance to compress the close." },
    { title: "Audit Finalization", desc: "Driving the annual audit to close 10–15 days faster, year over year." },
    { title: "Due Diligence", desc: "Transaction and counterparty due diligence within the investment group." },
    { title: "Governance & Compliance", desc: "Full UAE VAT and corporate tax (FTA) compliance and group governance." },
  ],
  highlights: [
    "Findings reported to the Group Managing Director and Group Finance Head.",
    "Control environment strengthened across entities and assets up to AED 7B.",
    "Annual audit close accelerated 10–15 days through reconciliation and coordination.",
  ],
};

export const certifications = [
  { abbr: "CPA", name: "Certified Public Accountant", body: "AICPA", region: "United States" },
  { abbr: "CMA", name: "Certified Management Accountant", body: "IMA", region: "United States" },
  { abbr: "CIA", name: "Certified Internal Auditor", body: "IIA", region: "Global" },
  { abbr: "CCP", name: "Certified Cost Professional", body: "AACE International", region: "United States" },
  { abbr: "CIMA", name: "Advanced Diploma in Management Accounting", body: "CIMA", region: "United Kingdom" },
];

export const education = [
  { degree: "Advanced Diploma in Management Accounting", body: "CIMA, United Kingdom" },
  { degree: "Master of Commerce (M.Com)", body: "India" },
];

export const skills = {
  systems: [
    "ERP / System Implementation",
    "Integrated Accounting Systems",
    "Bills of Quantities Integration",
    "Inventory & Payroll Systems",
    "VAT / FTA Filing Systems",
  ],
  finance: [
    "IFRS 9 / 15 / 16",
    "Financial Modelling",
    "DCF & CAPEX Appraisal",
    "Activity-Based Costing",
    "Consolidation",
    "FP&A",
  ],
  business: [
    "Stakeholder Management",
    "Bank Negotiation",
    "Strategic Planning",
    "Team Leadership",
    "Board Engagement",
  ],
  languages: ["English", "Hindi", "Malayalam"],
};

export const uaeCredentials = [
  { label: "Base", value: "Dubai, United Arab Emirates" },
  { label: "Visa status", value: "UAE Employment Visa — valid to Oct 2026" },
  { label: "Driving licence", value: "Valid UAE Driving License" },
  { label: "Nationality", value: "Indian" },
  { label: "Languages", value: "English · Hindi · Malayalam" },
];

export const leadership = {
  philosophy:
    "Finance leadership, in a holding company, is fiduciary before it is technical. The job is to protect solvency, tell the board the truth early, and build the controls that let a 40-entity group move quickly without losing discipline.",
  pillars: [
    {
      title: "Stewardship over flash",
      desc: "Holding debt-to-asset below 2× and cost of capital below 7.5% across a multi-billion-dirham balance sheet — the unglamorous discipline that keeps a group solvent.",
    },
    {
      title: "Decisions backed by numbers",
      desc: "Capital-injection appraisals, project-return analysis, feasibility studies and DCF — bringing a defensible number to every strategic call.",
    },
    {
      title: "Control without friction",
      desc: "Risk-based audit and re-engineered close schedules that tighten governance while compressing the annual close by 10–15 days.",
    },
    {
      title: "Straight to the principals",
      desc: "Reporting findings directly to the Group Managing Director and Group Finance Head — clear, early and actionable.",
    },
  ],
};

export const resumeMeta = {
  file: "assets/resume/Aji-C-George-Resume.pdf",
  highlights: [
    "Five qualifications — CPA · CMA · CIA · CCP · CIMA",
    "24+ years across UAE & GCC investment-holding groups",
    "Interim Head of Finance / CFO for subsidiaries above AED 200M",
    "IFRS consolidation across 40+ entities",
    "Debt-to-asset below 2× · cost of capital below 7.5%",
  ],
  recruiter: {
    title: "For recruiters & hiring leaders",
    points: [
      "Seeking Head of Finance, Finance Director or Internal Audit leadership in the UAE / GCC.",
      "Based in Dubai · UAE Employment Visa valid to Oct 2026 · valid UAE driving licence.",
      "Available to discuss notice period and compensation on request.",
    ],
  },
};

// Navigation — primary (top bar) and full sitemap (footer + mobile)
export const navPrimary = [
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/expertise", label: "Expertise" },
  { to: "/achievements", label: "Achievements" },
  { to: "/credentials", label: "Credentials" },
  { to: "/contact", label: "Contact" },
];

export const navAll = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About & Leadership" },
  { to: "/journey", label: "Career Journey" },
  { to: "/experience", label: "Experience" },
  { to: "/expertise", label: "Finance Expertise" },
  { to: "/audit-risk", label: "Internal Audit & Risk" },
  { to: "/achievements", label: "Achievements" },
  { to: "/credentials", label: "Credentials" },
  { to: "/resume", label: "Résumé / CV" },
  { to: "/contact", label: "Contact" },
];
