import type { Route } from "./+types/education";
import { PageWrapper, SectionHeader, Divider, TagWhite } from "../components/ui";
import { cn } from "../styles";
import { education } from "../data";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Education — Soleil Pham" }];
}

export default function Education() {
  const { degree, coursework, skills } = education;

  return (
    <PageWrapper>
      <SectionHeader label="Education" title="Academic Background" />

      <div className="bg-white border border-brand-lavender/60 rounded-xl p-7 shadow-sm mb-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          <div>
            <h2 className="font-bold text-slate-900 text-base">{degree.school}</h2>
            <p className="text-brand-purple font-semibold text-sm mt-0.5">{degree.degree}</p>
            <p className="text-xs text-slate-500 mt-1">
              {degree.concentration} &nbsp;·&nbsp; Minor in {degree.minor}
            </p>
          </div>
          <div className="text-xs text-slate-500 text-right shrink-0">
            <p className="font-medium">{degree.location}</p>
            <p>{degree.period}</p>
          </div>
        </div>

        <Divider />

        <p className={`${cn.sectionLabel} mb-3`}>Relevant Coursework</p>
        <div className="flex flex-wrap gap-2">
          {coursework.map((c) => <TagWhite key={c}>{c}</TagWhite>)}
        </div>
      </div>

      <p className={`${cn.sectionLabel} mb-4`}>Technical Skills</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {Object.entries(skills).map(([cat, items]) => (
          <div
            key={cat}
            className="bg-white border border-brand-lavender/60 rounded-xl p-5 shadow-sm"
          >
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">{cat}</p>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2.5 py-1 bg-brand-lavender/20 text-brand-purple rounded-full font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
