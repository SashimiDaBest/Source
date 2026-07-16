import type { Route } from "./+types/cv";
import { SectionHeader, DownloadIcon } from "../components/ui";
import { cn } from "../styles";
import resumeUrl from "../assets/resume.pdf?url";

export function meta({}: Route.MetaArgs) {
  return [{ title: "CV — Soleil Pham" }];
}

export default function CV() {
  return (
    <div className="p-6 md:p-8">
      <SectionHeader label="CV" title="Curriculum Vitae" />

      {/* Inline PDF viewer */}
      <div className="bg-white border border-brand-lavender/60 rounded-xl shadow-sm overflow-hidden">
        <iframe
          src={resumeUrl}
          title="Resume — Soleil Pham"
          aria-label="Soleil Pham's resume PDF"
          loading="lazy"
          className="w-full"
          style={{ height: "82vh", minHeight: 600 }}
        />
        {/* Fallback for browsers that block inline PDFs */}
        <div className={`${cn.divider} px-5 py-3 flex items-center justify-between`}>
          <p className="text-xs text-slate-400">
            PDF not rendering?{" "}
            <a
              href={resumeUrl}
              download
              className="text-brand-purple font-semibold hover:text-brand-coral transition-colors"
            >
              Download it directly
            </a>
          </p>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-brand-purple font-semibold hover:text-brand-coral transition-colors"
          >
            Open in new tab ↗
          </a>
        </div>
      </div>

      <p className="mt-10 text-xs text-slate-400 text-center">
        © {new Date().getFullYear()} Chan Nhu (Soleil) Nguyen Pham
      </p>
    </div>
  );
}
