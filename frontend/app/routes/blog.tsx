import type { Route } from "./+types/blog";
import { Link } from "react-router";
import { PageWrapper, SectionHeader, TagMuted } from "../components/ui";
import { cn } from "../styles";
import posts from "../blog/index";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Blog — Soleil Pham" }];
}

export default function Blog() {
  return (
    <PageWrapper>
      <SectionHeader label="Blog" title="Writing" />
      {posts.length > 0 && (
        <div className="space-y-4">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block bg-white border border-brand-lavender/60 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-brand-lavender hover:-translate-y-0.5 transition-all duration-200 animate-fade-up"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h2 className="font-bold text-slate-900 text-sm">{post.title}</h2>
                <span className={cn.mutedText}>{post.date}</span>
              </div>
              {post.summary && (
                <p className="text-xs text-slate-600 leading-relaxed mb-3">{post.summary}</p>
              )}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((t) => <TagMuted key={t}>{t}</TagMuted>)}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </PageWrapper>
  );
}
