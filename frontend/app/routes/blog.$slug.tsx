import type { Route } from "./+types/blog.$slug";
import { Link, useParams } from "react-router";
import { PageWrapper, TagMuted } from "../components/ui";
import { cn } from "../styles";
import posts from "../blog/index";

export function meta({ params }: Route.MetaArgs) {
  const post = posts.find((p) => p.slug === params.slug);
  return [{ title: post ? `${post.title} — Soleil Pham` : "Post not found" }];
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageWrapper>
        <p className={cn.bodyText}>Post not found.</p>
        <Link to="/blog" className={cn.accentLink + " text-xs font-semibold mt-4 inline-block"}>
          ← Back to blog
        </Link>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="mb-6">
        <Link to="/blog" className={cn.accentLink + " text-xs font-semibold"}>
          ← Back to blog
        </Link>
      </div>

      <div className="bg-white border border-brand-lavender/60 rounded-xl p-6 shadow-sm">
        <p className={cn.mutedText + " mb-1"}>{post.date}</p>
        <h1 className="text-2xl font-extrabold text-slate-900 mb-3">{post.title}</h1>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {post.tags.map((t) => <TagMuted key={t}>{t}</TagMuted>)}
          </div>
        )}
        <div className={cn.divider + " mb-5"} />
        <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{post.content}</p>
      </div>
    </PageWrapper>
  );
}
