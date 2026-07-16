/**
 * Design tokens
 *
 * Palette (defined in app.css @theme)
 *   cream    #FFFFFB  — page background
 *   lavender #B8B8D1  — borders, muted accents
 *   purple   #5B5F97  — primary accent (labels, links, buttons)
 *   amber    #FFC145  — tags, title badges
 *   coral    #FF6B6C  — hover underline accent, active indicators
 *
 * Usage: import { cn } from "../styles" (from routes) or "../../styles" (from components)
 */

export const palette = {
  cream:    "#FFFFFB",
  lavender: "#B8B8D1",
  purple:   "#5B5F97",
  amber:    "#FFC145",
  coral:    "#FF6B6C",
} as const;

// ─── Shared Tailwind class strings ─────────────────────────────────────────

export const cn = {
  // ── Page ──
  pageBg:       "bg-brand-cream text-slate-800",
  sectionWrap:  "scroll-mt-20",

  // ── Typography ──
  sectionLabel: "text-xs font-bold text-brand-purple uppercase tracking-widest",
  sectionTitle: "text-2xl font-extrabold text-slate-900 mt-1",
  bodyText:     "text-sm text-slate-600 leading-relaxed",
  mutedText:    "text-xs text-slate-500",

  // ── Cards ──
  card:      "bg-white border border-brand-lavender/60 rounded-xl shadow-sm",
  cardHover: "bg-white border border-brand-lavender/60 rounded-xl shadow-sm hover:shadow-md hover:border-brand-lavender hover:-translate-y-0.5 transition-all duration-200",

  // ── Tags ──
  tagAmber:   "text-xs px-2.5 py-0.5 bg-brand-amber text-slate-900 rounded-full font-semibold",
  tagLavender:"text-xs px-2.5 py-1 bg-brand-lavender/25 text-brand-purple rounded-full font-medium",
  tagWhite:   "text-xs px-3 py-1 bg-slate-100 text-slate-700 rounded-full",

  // ── Status badges (colours meet WCAG AA 4.5:1) ──
  // coral/15 background ≈ #FFE8E8 — text-red-700 (#b91c1c) gives ~7.5:1 contrast
  badgeReview: "text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-coral/15 text-red-700",
  // lavender/30 background ≈ #EAEAF4 — text-brand-purple (#5B5F97) gives ~6:1 contrast
  badgePrep:   "text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-lavender/30 text-brand-purple",

  // ── Buttons ──
  btnPrimary:   "inline-flex items-center gap-2 px-5 py-2.5 bg-brand-purple text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity",
  btnOutline:   "inline-flex items-center gap-2 px-5 py-2.5 border border-brand-lavender text-slate-700 text-sm font-semibold rounded-xl hover:border-brand-purple hover:text-brand-purple transition-colors",
  btnGhost:     "inline-flex items-center gap-2 px-5 py-2.5 text-slate-600 text-sm font-semibold rounded-xl hover:text-brand-purple transition-colors",
  btnSmPrimary: "inline-flex items-center gap-1.5 text-xs px-2.5 py-1 bg-brand-purple text-white rounded-lg font-semibold hover:opacity-90 transition-opacity",
  btnSmGhost:   "inline-flex items-center gap-1.5 text-xs px-2.5 py-1 bg-brand-lavender/20 text-slate-700 rounded-lg font-medium hover:bg-brand-lavender/40 transition-colors",

  // ── Coral underline accent — animated pseudo-element ──
  // The ::after bar scales from 0 → 1 on hover (left-to-right), active stays at 1.
  accentLink:
    "relative text-slate-600 transition-colors hover:text-brand-purple " +
    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 " +
    "after:h-0.5 after:bg-brand-coral after:scale-x-0 after:origin-left " +
    "after:transition-transform after:duration-200 hover:after:scale-x-100",
  accentLinkActive:
    "relative text-brand-purple font-semibold " +
    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 " +
    "after:h-0.5 after:bg-brand-coral after:scale-x-100 after:origin-left",

  // ── Navbar ──
  navLink:
    "relative px-3.5 py-1 text-sm text-slate-600 transition-colors hover:text-brand-purple whitespace-nowrap " +
    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 " +
    "after:h-0.5 after:bg-brand-coral after:scale-x-0 after:origin-left " +
    "after:transition-transform after:duration-200 hover:after:scale-x-100",
  navLinkActive:
    "relative px-3.5 py-1 text-sm text-brand-purple font-semibold whitespace-nowrap " +
    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 " +
    "after:h-0.5 after:bg-brand-coral after:scale-x-100 after:origin-left",

  // ── Profile sidebar ──
  profileCardHeader: "bg-gradient-to-br from-brand-lavender/20 to-brand-purple/10 px-8 pt-8 pb-6 flex flex-col items-center text-center",
  profileLink:       "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-brand-lavender/20 transition-colors group",
  profileLinkIcon:   "text-brand-lavender group-hover:text-brand-purple transition-colors shrink-0",

  // ── Dividers ──
  divider: "border-t border-brand-lavender/40",
} as const;
