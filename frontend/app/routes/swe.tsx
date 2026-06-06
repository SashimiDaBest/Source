import type { Route } from "./+types/swe";
import { PageWrapper, SectionHeader, BulletList } from "../components/ui";
import { swe } from "../data";

export function meta({}: Route.MetaArgs) {
  return [{ title: "SWE Experience — Soleil Pham" }];
}

export default function SWE() {
  return (
    <PageWrapper>
      <SectionHeader label="SWE" title="Software Engineering Experience" />
      <div className="space-y-5">
        {swe.map((exp, i) => (
          <div
            key={exp.role + exp.org}
            className="bg-white border border-brand-lavender/60 border-t-2 border-t-brand-amber rounded-xl p-6 shadow-sm hover:shadow-md hover:border-brand-lavender hover:-translate-y-0.5 transition-all duration-200 animate-fade-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{exp.org}</h3>
                <p className="text-brand-purple font-semibold text-xs mt-0.5">{exp.role}</p>
              </div>
              <div className="text-xs text-slate-500 text-right shrink-0">
                <p>{exp.location}</p>
                <p className="font-medium">{exp.period}</p>
              </div>
            </div>
            <BulletList items={exp.bullets} />
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
