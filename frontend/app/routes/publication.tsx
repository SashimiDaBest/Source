import type { Route } from "./+types/publication";
import { PageWrapper, SectionHeader, ComingSoon, StatusBadge } from "../components/ui";
import { cn } from "../styles";
import { publication } from "../data";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Publication — Soleil Pham" }];
}

export default function Publication() {
  return (
    <PageWrapper>
      <SectionHeader label="Publication" title="Research & Publications" />

      {publication.comingSoon ? (
        <ComingSoon
          title="Papers Coming Soon"
          message="Research is in active development across three labs at Purdue. Publications will appear here once ready."
        />
      ) : (
        <div className="space-y-5">
          {publication.items.map((pub, i) => (
            <div
              key={pub.title}
              className="bg-white border border-brand-lavender/60 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-brand-lavender hover:-translate-y-0.5 transition-all duration-200 animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <StatusBadge variant={pub.venue === "Under Review" ? "review" : "prep"}>
                  {pub.venue} · {pub.year}
                </StatusBadge>
                <span className={cn.tagLavender}>{pub.lab}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm leading-snug mb-2">
                {pub.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">{pub.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Lab affiliations always shown */}
      <div className="mt-10">
        <p className={`${cn.sectionLabel} mb-4`}>Lab Affiliations</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {publication.labs.map(({ name, focus, desc }, i) => {
            const leftAccent = ["border-l-4 border-l-brand-amber", "border-l-4 border-l-brand-coral", "border-l-4 border-l-brand-purple"][i % 3];
            return (
            <div
              key={name}
              className={`bg-white border border-brand-lavender/60 ${leftAccent} rounded-xl p-5 shadow-sm`}
            >
              <p className="font-bold text-slate-900 text-xs">{name}</p>
              <p className="text-brand-purple text-xs font-semibold mt-0.5">{focus}</p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">{desc}</p>
            </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
