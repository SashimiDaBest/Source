import type { Route } from "./+types/cv";
import { Link } from "react-router";
import {
  PageWrapper,
  SectionHeader,
  StatCard,
  PrimaryButton,
  DownloadIcon,
} from "../components/ui";
import { cn } from "../styles";
import { cv, education } from "../data";
import { publicUrl } from "../utils";

export function meta({}: Route.MetaArgs) {
  return [{ title: "CV — Soleil Pham" }];
}

export default function CV() {
  const { degree, skills } = education;

  return (
    <PageWrapper>
      <SectionHeader label="CV" title="Curriculum Vitae" />

      {/* Download */}
      <div className="bg-white border border-brand-lavender/60 rounded-xl p-6 shadow-sm mb-8">
        <p className="text-xs text-slate-600 mb-4 max-w-md">{cv.bio}</p>
        <PrimaryButton href={publicUrl(cv.downloadUrl)} download>
          <DownloadIcon size={14} />
          Download CV (PDF)
        </PrimaryButton>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {cv.stats.map(({ value, label }) => (
          <StatCard key={label} value={value} label={label} />
        ))}
      </div>

      {/* Education summary */}
      <p className={`${cn.sectionLabel} mb-3`}>Education</p>
      <div className="bg-white border border-brand-lavender/60 rounded-xl p-5 shadow-sm mb-8">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <p className="font-bold text-slate-900 text-sm">{degree.school}</p>
            <p className="text-brand-purple font-semibold text-xs mt-0.5">
              {degree.degree} — {degree.concentration}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">Minor in {degree.minor}</p>
          </div>
          <p className="text-xs text-slate-500 shrink-0">{degree.period}</p>
        </div>
      </div>

      {/* Skills summary */}
      <p className={`${cn.sectionLabel} mb-3`}>Technical Skills</p>
      <div className="bg-white border border-brand-lavender/60 rounded-xl p-5 shadow-sm mb-8">
        {Object.entries(skills).map(([cat, items], i, arr) => (
          <div key={cat}>
            <div className="flex flex-wrap gap-2 items-start">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest w-36 shrink-0 pt-0.5">
                {cat}
              </span>
              <span className="text-xs text-slate-600 flex-1">{items.join(" · ")}</span>
            </div>
            {i < arr.length - 1 && <div className="border-t border-brand-lavender/30 my-3" />}
          </div>
        ))}
      </div>

      {/* Quick links */}
      <p className={`${cn.sectionLabel} mb-3`}>Quick Links</p>
      <div className="flex flex-wrap gap-3">
        {cv.quickLinks.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={`text-xs px-4 py-2 bg-white border border-brand-lavender/60 text-brand-purple font-semibold rounded-xl transition-colors ${cn.accentLink}`}
          >
            {label}
          </Link>
        ))}
      </div>

      <p className="mt-14 text-xs text-slate-400 text-center">
        © {new Date().getFullYear()} Chan Nhu (Soleil) Nguyen Pham
      </p>
    </PageWrapper>
  );
}
