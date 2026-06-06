import type { Route } from "./+types/home";
import { Link } from "react-router";
import { PageWrapper, Card, TagMuted, GitHubIcon, LinkedInIcon, EmailIcon } from "../components/ui";
import { cn } from "../styles";
import { home, projects, swe } from "../data";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Soleil Pham" },
    { name: "description", content: home.bio },
  ];
}

export default function Home() {
  return (
    <PageWrapper>
      {/* Intro */}
      <div className="mb-10">
        <p className={cn.sectionLabel}>Welcome</p>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-1 leading-tight">
          {home.greeting}
        </h1>
        <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-lg">
          {home.bio}
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          <a href="mailto:soleilpham@gmail.com" className={cn.btnPrimary}>
            <EmailIcon size={14} /> Get in touch
          </a>
          <a
            href="https://github.com/SashimiDaBest"
            target="_blank"
            rel="noreferrer"
            className={cn.btnOutline}
          >
            <GitHubIcon size={14} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/chan-nhu-p-4876a127a"
            target="_blank"
            rel="noreferrer"
            className={cn.btnGhost}
          >
            <LinkedInIcon size={14} /> LinkedIn
          </a>
        </div>
      </div>

      {/* Stats — staggered fade-up, alternating accent colors */}
      {(() => {
        const accentColors = [
          "text-brand-purple",
          "text-brand-amber",
          "text-brand-coral",
          "text-brand-purple",
        ] as const;
        const topBorders = [
          "border-t-2 border-t-brand-purple",
          "border-t-2 border-t-brand-amber",
          "border-t-2 border-t-brand-coral",
          "border-t-2 border-t-brand-purple",
        ] as const;
        return (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {home.stats.map(({ value, label }, i) => (
              <div
                key={label}
                className={`text-center bg-white border border-brand-lavender/60 ${topBorders[i]} rounded-xl py-4 px-2 shadow-sm animate-fade-up`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <p className={`text-2xl font-extrabold ${accentColors[i]}`}>{value}</p>
                <p className="text-xs text-slate-500 mt-1 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        );
      })()}

      {/* Featured projects */}
      <div className="mb-3 flex items-center justify-between">
        <p className={cn.sectionLabel}>Featured Projects</p>
        <Link to="/projects" className={cn.accentLink + " text-xs font-semibold"}>
          View all →
        </Link>
      </div>
      <div className="space-y-3 mb-10">
        {projects.slice(0, 3).map((p) => (
          <Card key={p.title} hover>
            <h3 className="font-bold text-slate-900 text-sm mb-1">{p.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => <TagMuted key={t}>{t}</TagMuted>)}
            </div>
          </Card>
        ))}
      </div>

      {/* Latest experience */}
      <div className="mb-3 flex items-center justify-between">
        <p className={cn.sectionLabel}>Latest Experience</p>
        <Link to="/swe" className={cn.accentLink + " text-xs font-semibold"}>
          View all →
        </Link>
      </div>
      <Card>
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <p className="font-bold text-slate-900 text-sm">{swe[0].org}</p>
            <p className="text-brand-purple font-semibold text-xs mt-0.5">{swe[0].role}</p>
          </div>
          <p className="text-xs text-slate-500 shrink-0">{swe[0].period}</p>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">{swe[0].bullets[0]}</p>
      </Card>

      <p className="mt-14 text-xs text-slate-400 text-center">
        © {new Date().getFullYear()} {/* fullName from profile could go here */}
        Chan Nhu (Soleil) Nguyen Pham
      </p>
    </PageWrapper>
  );
}
