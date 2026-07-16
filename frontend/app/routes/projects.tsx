import type { Route } from "./+types/projects";
import {
  PageWrapper,
  SectionHeader,
  TagMuted,
  SmallCodeLink,
  SmallPrimaryLink,
  GitHubIcon,
} from "../components/ui";
import { projects } from "../data";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Projects — Soleil Pham" }];
}

export default function Projects() {
  return (
    <PageWrapper>
      <SectionHeader label="Projects" title="Things I've Built" />
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className="bg-white border border-brand-lavender/60 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-brand-lavender hover:-translate-y-0.5 transition-all duration-200 flex flex-col animate-fade-up"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <h3 className="font-bold text-slate-900 text-sm mb-1.5">{p.title}</h3>
            {p.desc && (
              <p className="text-xs text-slate-600 leading-relaxed mb-3 flex-1">{p.desc}</p>
            )}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {p.tags.map((t) => <TagMuted key={t}>{t}</TagMuted>)}
            </div>
            <div className="flex flex-wrap gap-2 pt-2.5 border-t border-brand-lavender/30 mt-auto">
              {p.github && (
                <SmallCodeLink
                  href={p.github}
                  disabled={p.githubPrivate}
                  disabledLabel="Repo is private"
                >
                  <GitHubIcon size={11} /> {p.githubPrivate ? "Repo is private" : "Code"}
                </SmallCodeLink>
              )}
              {p.githubBackend && (
                <SmallCodeLink href={p.githubBackend}>
                  <GitHubIcon size={11} /> Backend
                </SmallCodeLink>
              )}
              {p.githubFrontend && (
                <SmallCodeLink href={p.githubFrontend}>
                  <GitHubIcon size={11} /> Frontend
                </SmallCodeLink>
              )}
              {p.live && <SmallPrimaryLink href={p.live}>Live ↗</SmallPrimaryLink>}
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
